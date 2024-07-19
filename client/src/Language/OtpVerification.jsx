import React from 'react';
import '../Language/OtpVerification.css';

function OtpVerification({ onOtpVerified, contact, otp, setOtp }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onOtpVerified();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="sbt">
        <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)}/>
        <button type="submit">Submit OTP</button>
      </div>
    </form>
  );
}

export default OtpVerification;
