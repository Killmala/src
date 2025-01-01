// src/components/Layout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const isEconPage = location.pathname === "/econ";

  const handleUploadClick = () => {
    console.log("Upload button clicked!");
  };

  return (
    <div className="layout-container">
      <TopBar 
        onUploadClick={handleUploadClick}
        showUploadButton={isEconPage}
      />

      {/* Left Sidebar Fixed */}
      <LeftSidebar />

      {/* Main Content Area */}
      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;