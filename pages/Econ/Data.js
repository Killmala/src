// src/components/Data.js
import React from "react";
import "./Data.css"; // Import your custom styles for Data component
const Data = () => {
  // Placeholder data for metrics and stats
  const contentCategories = [
    { name: "Education", count: 120 },
    { name: "Entertainment", count: 85 },
    { name: "Technology", count: 60 },
    { name: "Health", count: 30 },
  ];

  return (
    <div className="Data">
      {/* Website Data Section */}
      <div className="Website-Data">
        {/* Metric Bars Section */}
        <div className="Metric-Bars">
          <div className="metric-bar metric-bar-1">Content & Trends</div>
          <div className="metric-bar metric-bar-2">Engagement & Growth</div>
        </div>
      </div>

      {/* User Data Section */}
      <div className="User-Data">
        {/* General Stats Section */}
        <div className="General-Stats">
          <div className="stat-item">
            <p>Upload Success Probability: 75%</p>
          </div>
          <div className="stat-item">
            <p>Website Health Score: 80%</p>
          </div>
        </div>

        {/* User Stats Section */}
        <div className="User-Stats">
          <div className="user-growth-circle">
            <span>85% Growth</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
