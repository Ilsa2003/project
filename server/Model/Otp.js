const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: { type: String },
  phone: { type: String },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, index: { expires: '5m' } }, // Expires in 5 minutes
});

const Otp = mongoose.model('Otp', otpSchema);

module.exports = Otp;
