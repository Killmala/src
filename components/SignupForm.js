import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import "./SignupForm.css"; // Import the CSS file

const SignupForm = ({ onClose, onSwitchToLogin }) => {
  const [step, setStep] = useState(1); // State to track the current step
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [usernameAvailable, setUsernameAvailable] = useState(null);
  const [emailAvailable, setEmailAvailable] = useState(null);
  const [error, setError] = useState(null);

  // Function to check username availability
  const checkUsername = async () => {
    if (username.trim() === "") {
      setUsernameAvailable(null);
      return;
    }

    try {
      const usernameRef = doc(db, "usernames", username);
      const usernameSnap = await getDoc(usernameRef);
      setUsernameAvailable(!usernameSnap.exists());
    } catch (error) {
      console.error("Username Check Error:", error.message);
      setError("Error checking username availability.");
    }
  };

  // Function to check email availability
  const checkEmail = async () => {
    if (email.trim() === "") {
      setEmailAvailable(null);
      return;
    }

    try {
      const emailQuery = await getDoc(doc(db, "users", email));
      setEmailAvailable(!emailQuery.exists());
    } catch (error) {
      console.error("Email Check Error:", error.message);
      setError("Error checking email availability.");
    }
  };

  // Evaluate password strength
  useEffect(() => {
    const evaluatePasswordStrength = () => {
      if (password.length === 0) {
        setPasswordStrength("");
      } else if (password.length < 8) {
        setPasswordStrength("Weak");
      } else if (
        password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)
      ) {
        setPasswordStrength("Strong");
      } else {
        setPasswordStrength("Medium");
      }
    };

    evaluatePasswordStrength();
  }, [password]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (step === 1) {
      if (!username || !email) {
        setError("Please fill in all required fields.");
        return;
      }

      checkUsername();
      checkEmail();

      if (!usernameAvailable) {
        setError("Username is not available.");
        return;
      }

      if (!emailAvailable) {
        setError("Email is already in use. Please use a different email.");
        return;
      }

      setStep(2); // Proceed to the next step if username and email are valid
    } else if (step === 2) {
      if (!password || !confirmPassword) {
        setError("Please enter and confirm your password.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      if (passwordStrength !== "Strong") {
        setError("Please create a stronger password.");
        return;
      }

      try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredential.user, { displayName: username });
        await setDoc(doc(db, "usernames", username), {
          uid: userCredential.user.uid,
        });

        setStep(3); // Proceed to the verification step
      } catch (error) {
        console.error("Sign-Up Error:", error.message);
        setError(error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {step === 1 && (
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Username Field */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value.trim())}
            onBlur={checkUsername}
          />
          {usernameAvailable === false && (
            <p className="error-message">Username is already taken.</p>
          )}

          {/* Email Field */}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            onBlur={checkEmail}
          />
          {emailAvailable === false && (
            <p className="error-message">Email is already in use.</p>
          )}

          {/* General Error Message */}
          {error && <p className="error-message">{error}</p>}

          {/* Next Button */}
          <button type="submit">Next</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Password Field */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="New Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small>
            Use at least 8 characters, including uppercase, lowercase, numbers,
            and special characters.
          </small>
          <p className={`password-strength ${passwordStrength.toLowerCase()}`}>
            Password Strength: {passwordStrength}
          </p>

          {/* Confirm Password Field */}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {/* General Error Message */}
          {error && <p className="error-message">{error}</p>}

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      )}

      {step === 3 && (
        <div className="success-message">
          <p>
            Thank you for signing up! A verification email has been sent to{" "}
            {email}. Please check your inbox and follow the instructions to
            verify your email address.
          </p>
        </div>
      )}

      {/* Login Option */}
      <div className="login-option">
        <p>
          Already have an account?{" "}
          <a href="#" onClick={onSwitchToLogin}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
