// src/pages//Index/ContentArea.js
import React from "react";

const ContentArea = ({ contentType }) => {
  return (
    <div className="content-area">
      <h2>{contentType} Content</h2>
      <p>
        This is where the {contentType.toLowerCase()} content will be displayed.
      </p>
    </div>
  );
};

export default ContentArea;
