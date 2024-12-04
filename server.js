// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Parses incoming requests with JSON payloads

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/your_database_name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a Mongoose schema and model for uploaded files
const fileSchema = new mongoose.Schema({
  fileURL: String,
  uploadedAt: { type: Date, default: Date.now },
});
const File = mongoose.model("File", fileSchema);

// API endpoint to receive file metadata
app.post("/upload", async (req, res) => {
  try {
    const { fileURL } = req.body;
    const newFile = new File({ fileURL });
    await newFile.save();
    res.json({ message: "File metadata saved to MongoDB successfully" });
  } catch (error) {
    console.error("Error saving file metadata:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});