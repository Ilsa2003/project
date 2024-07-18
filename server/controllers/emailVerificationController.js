const nodemailer = require('nodemailer');
const EmailVerification = require('../model/EmailVerification');

// Nodemailer transporter setup (ensure your .env is configured correctly)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Generate a random alphanumeric token
const generateToken = () => {
  return Math.random().toString(36).substr(2, 10);
};

// Function to send verification email
const sendVerificationEmail = async (email) => {
  const token = generateToken();

  const emailVerification = new EmailVerification({ email, token });
  await emailVerification.save();

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Email Verification',
    text: `Verification token: ${token}`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail };
