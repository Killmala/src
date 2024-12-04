// src/components/LoginForm.js
import React, { useState } from "react";
import { auth, googleProvider } from "../firebase"; // Firebase imports
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import GmailIcon from "../assets/GmailIcon.svg"; // Gmail icon import
//import "./LoginForm.css";

const LoginForm = ({ onClose, onSwitchToSignUp }) => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState(null); // State for error messages

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      setError(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (error) {
      console.error("Login Error:", error.message);
      setError(error.message);
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      setError("Please enter your email to reset your password.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Please check your inbox.");
    } catch (error) {
      console.error("Password Reset Error:", error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      <div className="forgot-password">
        <a href="#" onClick={handlePasswordReset}>
          Forgot Password?
        </a>
      </div>
      <div className="alternative-login">
        <p>Or sign in with:</p>
        <button className="google-button" onClick={handleGoogleSignIn}>
          <img src={GmailIcon} alt="Gmail Icon" className="icon-image" />
          Sign in with Google
        </button>
      </div>
      <div className="signup-option">
        <p>
          New user?{" "}
          <a href="#" onClick={onSwitchToSignUp}>
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
