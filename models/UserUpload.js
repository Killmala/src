const mongoose = require('mongoose');

const userUploadSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  // Add other fields as needed
});

const UserUpload = mongoose.model('UserUpload', userUploadSchema);

module.exports = UserUpload;