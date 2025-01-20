// src/components/UploadModal.js
import React, { useState } from "react";
import "./UploadModal.css";

const UploadModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    // Simulate a file upload
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
      } else {
        alert("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    onClose();  // Close the modal after upload
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Upload File</h2>
        <input type="file" onChange={handleFileChange} />
        <div className="modal-buttons">
          <button onClick={handleUpload}>Upload</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
