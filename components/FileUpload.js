// src/components/FileUpload.js
import React, { useState } from "react";

const FileUpload = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*,video/*" // Allows images and videos
      />
      {selectedFile && <p>File selected: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUpload;
