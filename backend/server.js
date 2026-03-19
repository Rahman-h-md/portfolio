const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load Message model
const Message = require('./models/Message');

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_messages';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, msg: 'Please provide all required fields' });
    }

    const newMessage = new Message({
      name,
      email,
      subject: subject || 'No Subject',
      message
    });

    await newMessage.save();

    res.status(201).json({ success: true, msg: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, msg: 'Server error, please try again later.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
