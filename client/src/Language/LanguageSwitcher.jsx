// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import axios from 'axios';
// import OtpVerification from './OtpVerification';
// import './LanguageSwitcher.css';

// function LanguageSwitcher() {
//   const { t, i18n } = useTranslation();
//   const [otpRequested, setOtpRequested] = useState(false);
//   const [selectedLang, setSelectedLang] = useState(null);
//   const [contact, setContact] = useState('');
//   const [otp, setOtp] = useState('');

//   const switchLanguage = async (lng) => {
//     setSelectedLang(lng);
//     try {
//       if (lng === 'fr') {
//         await axios.post('http://localhost:5000/otp/send-email-otp', { email: contact });
//         alert(t('common.otpSent', { type: t('common.email') }));
//       } else {
//         await axios.post('http://localhost:5000/otp/send-mobile-otp', { phone: contact });
//         alert(t('common.otpSent', { type: t('common.phoneNumber') }));
//       }
//       setOtpRequested(true);
//     } catch (error) {
//       console.error('Error in switchLanguage:', error);
//       alert(t('common.failedToSendOtp'));
//     }
//   };

//   const onOtpVerified = () => {
//     setOtpRequested(false);
//     i18n.changeLanguage(selectedLang).then(() => {
//       switch (selectedLang) {
//         case 'hi':
//           document.body.style.backgroundColor = 'blue';
//           break;
//         case 'zh':
//           document.body.style.backgroundColor = 'green';
//           break;
//         case 'fr':
//           document.body.style.backgroundColor = 'yellow';
//           break;
//         default:
//           document.body.style.backgroundColor = 'white';
//       }
//     }).catch(error => {
//       console.error('Error changing language:', error);
//     });
//   };

//   return (
//     <div className="language-switcher">
//       {!otpRequested ? (
//         <>
//         <div className='switch'>
//           <input type="text" className="txt" placeholder={selectedLang === 'fr' ? 'Enter your email' : 'Enter your phone number'} value={contact} onChange={(e) => setContact(e.target.value)}/>
//           <div className="mb-4 justify-center text-center" >
//             <p><button onClick={() => switchLanguage('en')}>English</button></p>
//             <p><button onClick={() => switchLanguage('es')}>Español</button></p>
//             <p><button onClick={() => switchLanguage('fr')}>Français</button></p>
//             <p><button onClick={() => switchLanguage('zh')}>中文</button></p>
//             <p><button onClick={() => switchLanguage('hi')}>हिंदी</button></p>
//           </div>
//         </div>
//         </>

//       ) : (
//         <OtpVerification onOtpVerified={onOtpVerified} contact={contact}otp={otp}setOtp={setOtp} />
//       )}
//     </div>
//   );
// }

// export default LanguageSwitcher;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import OtpVerification from './OtpVerification';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const [otpRequested, setOtpRequested] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);
  const [contact, setContact] = useState('');
  const [otp, setOtp] = useState('');

  const predefinedOtp = '123456'; // Predefined OTP for demonstration

  const switchLanguage = (lng) => {
    setSelectedLang(lng);
    alert(`OTP Sent`); // Simulate sending OTP
    setOtpRequested(true);
  };

  const onOtpVerified = () => {
    setOtpRequested(false);
    i18n.changeLanguage(selectedLang).then(() => {
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
    }).catch(error => {
      console.error('Error changing language:', error);
    });
  };

  return (
    <div className="language-switcher">
      {!otpRequested ? (
        <>
          <div className='switch'>
            <input type="text" className="txt" placeholder={selectedLang === 'fr' ? 'Enter your email' : 'Enter your phone number'} value={contact} onChange={(e) => setContact(e.target.value)}/>
            <div className="mb-4 justify-center text-center">
              <p><button onClick={() => switchLanguage('en')}>English</button></p>
              <p><button onClick={() => switchLanguage('es')}>Español</button></p>
              <p><button onClick={() => switchLanguage('fr')}>Français</button></p>
              <p><button onClick={() => switchLanguage('zh')}>中文</button></p>
              <p><button onClick={() => switchLanguage('hi')}>हिंदी</button></p>
            </div>
          </div>
        </>
      ) : (
        <OtpVerification onOtpVerified={onOtpVerified} contact={contact} otp={otp} setOtp={setOtp} predefinedOtp={predefinedOtp}/>
      )}
    </div>
  );
}

export default LanguageSwitcher;
