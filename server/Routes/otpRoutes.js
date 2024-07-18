// otpRoutes.js
const express = require('express');
const router = express.Router();
const { sendEmailOTP, sendMobileOTP, verifyOtp } = require('../controllers/otpController');

// Route to send email OTP
router.post('/send-email-otp', async (req, res) => {
  try {
    const { email } = req.body;
    await sendEmailOTP(email);
    res.send('OTP sent successfully');
  } catch (error) {
    console.error('Error sending email OTP:', error);
    res.status(500).send('Failed to send OTP');
  }
});

// Route to send mobile OTP
router.post('/send-mobile-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    await sendMobileOTP(phone);
    res.send('OTP sent successfully');
  } catch (error) {
    console.error('Error sending mobile OTP:', error);
    res.status(500).send('Failed to send OTP');
  }
});

// Route to verify OTP
router.post('/verify', async (req, res) => {
  try {
    const { email, phone, otp } = req.body;
    const isValid = await verifyOtp(email, phone, otp);
    console.log(isValid)
    if (isValid) {
      res.send('OTP verified successfully');
    } else {
      res.status(400).send('Invalid OTP');
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).send('Failed to verify OTP');
  }
});

module.exports = router;
