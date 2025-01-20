const express = require('express');
const mongoose = require('mongoose');
const UserUpload = require('./models/UserUpload');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/singularity', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/upload', async (req, res) => {
  try {
    const userUpload = new UserUpload(req.body);
    await userUpload.save();
    res.status(201).send(userUpload);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
