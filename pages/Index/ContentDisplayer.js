// src/components/ContentDisplayer.js
import React from "react";
import "./ContentDisplayer.css"; // now a regular CSS file

const ContentDisplayer = ({ onContentTypeChange }) => {
  const contentTypes = ["All", "Videos", "Images", "Reading", "People"];

  return (
    <div className="content-displayer">
      {contentTypes.map((type) => (
        <button
          key={type}
          className="button"
          onClick={() => onContentTypeChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default ContentDisplayer;
