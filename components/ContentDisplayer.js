// src/components/ContentDisplayer.js
import React from "react";
import styles from "./ContentDisplayer.css"; // Import the CSS module

const ContentDisplayer = ({ onContentTypeChange }) => {
  const contentTypes = ["All", "Videos", "Images", "Reading", "People"];

  return (
    <div className={styles["content-displayer"]}>
      {contentTypes.map((type) => (
        <button
          key={type}
          className={styles["button"]} // Apply button styles
          onClick={() => onContentTypeChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default ContentDisplayer;
