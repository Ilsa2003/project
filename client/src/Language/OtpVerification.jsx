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
// import React, { useState } from 'react';

// function OtpVerification({ onOtpVerified, otp, setOtp, predefinedOtp }) {
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (otp === predefinedOtp) {
//       setError('');
//       onOtpVerified();
//     } else {
//       setError('Invalid OTP. Please try again.');
//     }
//   };

//   return (
//     <div className="sbt">
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)}/>
//         <button type="submit">Verify OTP</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// }

// export default OtpVerification;
