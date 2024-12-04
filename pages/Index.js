// src/pages/Index.js
import React, { useState } from "react";
import ContentDisplayer from "../components/ContentDisplayer";
import ContentArea from "../components/ContentArea";

const Index = () => {
  const [contentType, setContentType] = useState("All");

  const handleContentTypeChange = (type) => {
    setContentType(type);
    // Implement content filtering logic here if needed
  };

  return (
    <div>
      <ContentDisplayer onContentTypeChange={handleContentTypeChange} />
      <ContentArea contentType={contentType} />
    </div>
  );
};

export default Index;
