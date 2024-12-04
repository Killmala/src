// src/components/LoginModal.js
import React, { useEffect, useRef, useState } from "react";
import "./LoginModal.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginModal = ({ onClose }) => {
  const modalRef = useRef();
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and signup

  useEffect(() => {
    // Focus on the modal when it opens
    modalRef.current.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    // Listen for escape key
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackgroundClick = (e) => {
    if (e.target.className === "modal-overlay") onClose();
  };

  const toggleSignUp = () => {
    setIsSignUp((prev) => !prev); // Toggle between login and signup forms
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleBackgroundClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`modal-content ${isSignUp ? "slide-left" : "slide-right"}`} // Sliding effect for the modal
        ref={modalRef}
        tabIndex="-1"
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {isSignUp ? (
          <SignupForm onClose={onClose} onSwitchToLogin={toggleSignUp} />
        ) : (
          <LoginForm onClose={onClose} onSwitchToSignUp={toggleSignUp} />
        )}
      </div>
    </div>
  );
};

export default LoginModal;
