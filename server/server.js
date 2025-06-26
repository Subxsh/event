import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/eventmanagement');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Don't exit the process, just log the error
    console.log('Continuing without database connection...');
  }
};

// Connect to database
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Event Management Server is running!' });
});

// API Routes
app.get('/api/events', (req, res) => {
  res.json({ 
    message: 'Events endpoint working',
    events: []
  });
});

app.post('/api/events', (req, res) => {
  res.json({ 
    message: 'Event created successfully',
    event: req.body
  });
});

app.get('/api/auth/me', (req, res) => {
  res.json({ 
    message: 'Auth endpoint working',
    user: null
  });
});

app.post('/api/auth/login', (req, res) => {
  res.json({ 
    message: 'Login endpoint working',
    token: 'dummy-token'
  });
});

app.post('/api/auth/register', (req, res) => {
  res.json({ 
    message: 'Register endpoint working',
    token: 'dummy-token'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});