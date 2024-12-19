// src/pages/Econ/Econ.js
import React from "react";
import Data from "./Data"; // Ensure the path to Data is correct
//import "./Econ.css"; // Optional: Import styles specific to Econ page

const Econ = () => {
  // Function to handle upload button click
  const handleUploadClick = () => {
    console.log("Upload button clicked!");
    // Implement upload functionality here
  };

  return (
    <div className="econ-container">
      {/* If you need to use TopBar-specific features, they should be handled via Layout's props */}
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
