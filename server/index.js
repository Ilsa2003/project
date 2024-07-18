const express = require('express');
const cors = require('cors');
const path = require('path');
const { connect } = require('./db');
const avatarRoute = require('./routes/avatarRoute');
const router = require('./routes/index');
const otpRoutes = require('./routes/otpRoutes');
// Load environment variables
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes


// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello, this is my backend server.');
});

app.use('/api', router); // Main API routes
app.use('/api/avatar', avatarRoute); // Avatar routes
app.use('/otp', otpRoutes); // Handle OTP routes
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
connect().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});
