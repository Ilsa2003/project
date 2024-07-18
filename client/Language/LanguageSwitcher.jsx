// src/Components/LanguageSwitcher.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import OtpVerification from './OtpVerification';
import './LanguageSwitcher.css';


function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [otpRequested, setOtpRequested] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);
  const [contact, setContact] = useState('');

  const switchLanguage = async (lng) => {
    setSelectedLang(lng);
    try {
      if (lng === 'fr') {
        await axios.post('http://localhost:5000/otp/send-email-otp', { email: contact });
        alert(t('common.otpSent', { type: t('common.email') }));
      } else {
        await axios.post('http://localhost:5000/otp/send-mobile-otp', { phone: contact });
        alert(t('common.otpSent', { type: t('common.phoneNumber') }));
      }
      setOtpRequested(true);
    } catch (error) {
      console.error('Error in switchLanguage:', error);
      alert(t('common.failedToSendOtp'));
    }
  };

  const onOtpVerified = () => {
    setOtpRequested(false);
    i18n.changeLanguage(selectedLang);
    switch (selectedLang) {
      case 'hi':
        document.body.style.backgroundColor = 'blue';
        break;
      case 'zh':
        document.body.style.backgroundColor = 'green';
        break;
      case 'fr':
        document.body.style.backgroundColor = 'yellow';
        break;
      default:
        document.body.style.backgroundColor = 'white';
    }
  };

  return (
    // <div className="language-switcher">
    //   {!otpRequested ? (
    //     <>
    //       <input
    //         type="text"
    //         placeholder={selectedLang === 'fr' ? 'Enter your email' : 'Enter your phone number'}
    //         value={contact}
    //         onChange={(e) => setContact(e.target.value)}
    //       />
    //       <button onClick={() => switchLanguage('en')}>English</button>
    //       <button onClick={() => switchLanguage('es')}>Español</button>
    //       <button onClick={() => switchLanguage('hi')}>हिन्दी</button>
    //       <button onClick={() => switchLanguage('pt')}>Português</button>
    //       <button onClick={() => switchLanguage('zh')}>中文</button>
    //       <button onClick={() => switchLanguage('fr')}>Français</button>
    //     </>
    //   ) : (
    //     <OtpVerification onOtpVerified={onOtpVerified} contact={contact} />
    //   )}
    // </div>
    <>
    </>
  );
}

export default LanguageSwitcher;
