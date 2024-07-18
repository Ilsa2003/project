// otpController.js
const Otp = require('../model/Otp');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
};

const sendEmailOTP = async (email) => {
  const otp = generateOtp();
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  };

  const otpEntry = new Otp({ email, otp });
  await otpEntry.save();
  console.log(`Sending OTP ${otp} to email ${email}`);
  return transporter.sendMail(mailOptions);
};

const sendMobileOTP = async (phone) => {
  const otp = generateOtp();
  const otpEntry = new Otp({ phone, otp });
  await otpEntry.save();
  console.log(`Sending OTP ${otp} to mobile ${phone}`);
  // Logic to send OTP to mobile (not implemented in the provided code)
  // Use a service like Twilio or another SMS gateway to send OTP via SMS
};

const verifyOtp = async (email, phone, otp) => {
  const query = email ? { email, otp } : { phone, otp };
  const otpEntry = await Otp.findOne(query);
  if (otpEntry) {
    await Otp.deleteOne(query); // Remove the OTP entry after verification
    return true;
  }
  return false;
};

module.exports = {
  sendEmailOTP,
  sendMobileOTP,
  verifyOtp,
};
