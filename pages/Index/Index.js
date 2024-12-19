// src/pages/Index/Index.js
import React, { useState } from "react";
import ContentDisplayer from "./ContentDisplayer";
import ContentArea from "./ContentArea";
import "./Index.css"; // Custom styles

const Index = () => {
  const [contentType, setContentType] = useState("All");

  const handleContentTypeChange = (type) => {
    setContentType(type);
    // Implement content filtering if needed
  };

  return (
    <div className="index-page">
      <ContentDisplayer onContentTypeChange={handleContentTypeChange} />
      <ContentArea contentType={contentType} />
    </div>
  );
};

export default Index;
