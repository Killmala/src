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
        ) : null}
        {!showUploadButton && onToggleSidebar && (
          <div className="content-option" id="Sub-bar">
            {/* Sidebar toggle button */}
            <button onClick={onToggleSidebar}>&#9776;</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
