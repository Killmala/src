// src/components/TopBar.js
import React from "react";
import SearchContainer from "./SearchContainer";
import UserOption from "./UserOption";
import "./TopBar.css";

const TopBar = ({ onUploadClick, showUploadButton, onToggleSidebar }) => {
  return (
    <div className="top-bar">
      <div className="website-name">
        <h1>Singularity</h1>
      </div>
      <SearchContainer />
      <div className="top-bar-right">
        <UserOption />
        {/* Render either the upload button or sidebar toggle */}
        {showUploadButton ? (
          <div className="upload-button-container">
            <button onClick={onUploadClick} className="upload-button">
              <img
                src="/path/to/upload-icon.png"
                alt="Upload"
                className="upload-icon"
              />
            </button>
          </div>
        ) : (
          <div className="content-option" id="Sub-bar">
            <button onClick={onToggleSidebar}>&#9776;</button> {/* Sidebar toggle button */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
