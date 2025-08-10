// src/pages/Index/Index.js
import React, { useState } from "react";
import ContentDisplayer from "./ContentDisplayer";
import ContentArea from "./ContentArea";


const Index = () => {
  const [contentType, setContentType] = useState("All");

  const handleContentTypeChange = (type) => {
    setContentType(type);
  };

  return (
    <div className="index-page">
      <ContentDisplayer onContentTypeChange={handleContentTypeChange} />
      <ContentArea contentType={contentType} />
    </div>
  );
};

export default Index;
