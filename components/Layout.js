// src/components/Layout.js
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const isEconPage = location.pathname === "/econ";

  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(
    !isEconPage
  );

  const handleUploadClick = () => {
    console.log("Upload button clicked!");
  };

  const onToggleSidebar = () => {
    setIsRightSidebarVisible((prev) => !prev);
  };

  return (
    <div className="layout-container">
      <TopBar
        onUploadClick={handleUploadClick}
        showUploadButton={isEconPage}
        onToggleSidebar={onToggleSidebar}
      />

      {/* Left Sidebar Fixed */}
      <LeftSidebar />

      {/* Main Content Area */}
      <div
        className={`layout-content ${
          isRightSidebarVisible ? "with-right-sidebar" : "no-right-sidebar"
        }`}
      >
        <Outlet />
      </div>

      {/* Conditionally Render Right Sidebar */}
      {isRightSidebarVisible && !isEconPage && <RightSidebar />}
    </div>
  );
};

export default Layout;
