// src/components/RightSidebar.js
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./RightSidebar.css";

const RightSidebar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [rankUp, setRankUp] = useState(false);
  const [customOptions, setCustomOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleRankUpChange = () => {
    setRankUp((prev) => !prev);
    // Add additional logic for rank up preference here
  };

  const handleOptionChange = (e) => {
    const { name, checked } = e.target;
    setCustomOptions((prev) => ({
      ...prev,
      [name]: checked,
    }));
    // Add additional logic for customizing feed here
  };

  return (
    <aside className="right-sidebar" id="right-sidebar" aria-label="Sidebar">
      {!isSignedIn ? (
        <div className="translucent-overlay" role="alert">
          <div className="message-container">
            <p className="login-message">
              Please log in to use additional functionalities.
            </p>
          </div>
        </div>
      ) : (
        <div className="preferences-container">
          <h2>Preferences</h2>
          <div className="rank-up">
            <label htmlFor="rank-up-switch">Rank Up</label>
            <input
              type="checkbox"
              id="rank-up-switch"
              checked={rankUp}
              onChange={handleRankUpChange}
            />
          </div>
          <div className="customize-feed">
            <h3>Customize Feed</h3>
            <div className="checkbox-list" id="checkbox-list">
              <label htmlFor="option1">
                <input
                  type="checkbox"
                  id="option1"
                  name="option1"
                  checked={customOptions.option1}
                  onChange={handleOptionChange}
                />
                Option 1
              </label>
              <label htmlFor="option2">
                <input
                  type="checkbox"
                  id="option2"
                  name="option2"
                  checked={customOptions.option2}
                  onChange={handleOptionChange}
                />
                Option 2
              </label>
              <label htmlFor="option3">
                <input
                  type="checkbox"
                  id="option3"
                  name="option3"
                  checked={customOptions.option3}
                  onChange={handleOptionChange}
                />
                Option 3
              </label>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default RightSidebar;
