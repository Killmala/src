// src/pages/Index/Index.js
import React, { useState } from "react";
import ContentDisplayer from "./ContentDisplayer";
import ContentArea from "./ContentArea";
import RightSidebar from "../../components/RightSidebar";
import TopBar from "../../components/TopBar";


const Index = () => {
  const [contentType, setContentType] = useState("All");
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(true);

  const handleContentTypeChange = (type) => {
    setContentType(type);
  };

  const onToggleSidebar = () => {
    setIsRightSidebarVisible((prev) => !prev);
  };

  return (
    <div className="index-page">
      <TopBar onToggleSidebar={onToggleSidebar} showUploadButton={false} />
      <div className={`index-content ${isRightSidebarVisible ? 'with-sidebar' : ''}`}>
        <ContentDisplayer onContentTypeChange={handleContentTypeChange} />
        <ContentArea contentType={contentType} />
      </div>
      {isRightSidebarVisible && <RightSidebar />}
    </div>
  );
};

export default Index;
