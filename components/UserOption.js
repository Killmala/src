import React, { useState, useEffect } from "react";
import "./UserOption.css";
import LoginModal from "./LoginModal";
import { auth } from "../firebase"; // Firebase authentication import
import { onAuthStateChanged, signOut } from "firebase/auth"; // Firebase methods

const UserOption = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  const [user, setUser] = useState(null); // State to store the user data
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set user when signed in
      } else {
        setUser(null); // Clear user data when signed out
      }
    });
    return () => unsubscribe(); // Clean up on unmount
  }, []);

  const openLoginModal = () => setIsModalOpen(true);
  const closeLoginModal = () => setIsModalOpen(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsDropdownOpen(false); // Close dropdown on logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="user-option" id="user-option">
      {user ? (
        <div className="user-profile" onClick={toggleDropdown}>
          {/* Display user's profile picture or fallback to user's name */}
          <img
            src={user.photoURL || "/default-avatar.png"} // Fallback to a default avatar if no photo URL
            alt="User profile"
            className="user-avatar"
          />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <p>{user.displayName}</p>
              <button onClick={handleLogout}>Logout</button>
              {/* Add other dropdown options here */}
            </div>
          )}
        </div>
      ) : (
        <button className="login-button" onClick={openLoginModal}>
          Login
        </button>
      )}

      {/* Show login modal when not signed in */}
      {isModalOpen && <LoginModal onClose={closeLoginModal} />}
    </div>
  );
};

export default UserOption;
