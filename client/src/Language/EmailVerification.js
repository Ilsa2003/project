// src/components/EmailVerification.js
import React, { useState } from 'react';
import axios from 'axios';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleVerification = async () => {
    try {
      const response = await axios.post('http://localhost:5000/email-verification/send-email-verification', {
        email,
      });
      setMessage(response.data);
    } catch (error) {
      console.error('Error sending verification email:', error);
      setMessage('Failed to send verification email');
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <button onClick={handleVerification}>Send Verification Email</button>
      <p>{message}</p>
    </div>
  );
};

export default EmailVerification;
