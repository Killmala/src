/* src/components/Layout.js */
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import "./Layout.css"; // Import styles for Layout

const Layout = () => {
  const location = useLocation();
  const isEconPage = location.pathname === "/econ"; // Conditionally control UI behavior
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(true); // Sidebar open by default

  const handleUploadClick = () => {
    console.log("Upload button clicked!");
    // Add upload functionality here
  };

  const toggleRightSidebar = () => {
    setRightSidebarVisible(!isRightSidebarVisible);
  };

  useEffect(() => {
    // If navigating to /econ page, hide the Right Sidebar
    if (isEconPage) {
      setRightSidebarVisible(false);
    }
  }, [isEconPage]);

  return (
    <div className="layout-container">
      {/* Top Bar */}
      <TopBar
        showUploadButton={isEconPage}
        onUploadClick={isEconPage ? handleUploadClick : undefined}
        onToggleSidebar={toggleRightSidebar}
      />

      <div className="layout-body">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <div
          className={`layout-content ${
            isRightSidebarVisible && !isEconPage
              ? "with-right-sidebar"
              : "no-right-sidebar"
          }`}
        >
          <Outlet /> {/* Renders child routes here */}
        </div>

        {/* Right Sidebar is open by default */}
        {!isEconPage && isRightSidebarVisible && <RightSidebar />}
      </div>
    </div>
  );
};

export default Layout;
