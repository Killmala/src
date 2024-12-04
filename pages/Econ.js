// src/pages/Econ.js
import React from "react";
import Data from "../components/Data"; // Import your Data component

const Econ = () => {
  // Function to handle upload button click
  const handleUploadClick = () => {
    console.log("Upload button clicked!");
    // Add your upload functionality here
  };

  return (
    <div className="econ-container">
      {/* TopBar for Econ page, conditionally with upload functionality */}

      <div className="content">
        {/* Render the Data component */}
        <Data />

        {/* Content category statistics */}
        <div className="content-stats-section">
          <h2>Content Statistics</h2>
          <ul>
            <li className="content-stat-item">Education: 120 items</li>
            <li className="content-stat-item">Entertainment: 85 items</li>
            <li className="content-stat-item">Technology: 60 items</li>
            <li className="content-stat-item">Health: 30 items</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Econ;
