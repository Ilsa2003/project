// src/Components/OtpVerification.jsx
import React, { useState } from 'react';
import '../Language/OtpVerification.css'
function OtpVerification({ onOtpVerified, contact }) {
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onOtpVerified();
    } catch (error) {
      alert('Invalid OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button type="submit">Verify</button>
    </form>
  );
}

export default OtpVerification;
