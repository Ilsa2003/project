const mongoose = require('mongoose');

const emailVerificationSchema = new mongoose.Schema({
  email: { type: String, required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '1d' } // Token expires in 1 day
});

const EmailVerification = mongoose.model('EmailVerification', emailVerificationSchema);

module.exports = EmailVerification;
