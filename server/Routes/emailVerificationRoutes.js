const express = require('express');
const router = express.Router();
const { sendVerificationEmail } = require('../controllers/emailVerificationController');

router.post('/send-email-verification', async (req, res) => {
  const { email } = req.body;

  try {
    await sendVerificationEmail(email);
    res.status(200).send('Verification email sent');
  } catch (error) {
    console.error('Error sending verification email:', error);
    res.status(500).send('Failed to send verification email');
  }
});

module.exports = router;
