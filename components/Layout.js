// src/components/Layout.js
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import LeftSidebar from "./LeftSidebar";
import UploadModal from "./UploadModal";  // Import the modal component
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const isEconPage = location.pathname === "/econ";

  // State to track modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle upload button click
  const handleUploadClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
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

      {/* Conditionally render Upload Modal */}
      {isModalOpen && <UploadModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Layout;
