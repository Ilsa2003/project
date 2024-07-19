// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/{{ns}}.json',
//     },
//   });

// export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Your translations go here
      },
    },
    es: {
      translation: {
        // Your translations go here
      },
    },
    fr: {
      translation: {
        // Your translations go here
      },
    },
    zh: {
      translation: {
        // Your translations go here
      },
    },
    hi: {
      translation: {
        "phoneNumber": "फोन नंबर",
    "otpSent": "OTP {{type}} पर भेजा गया",
    "enterOtp": "OTP दर्ज करें",
    "verify": "सत्यापित करें",
    "failedToSendOtp": "OTP भेजने में विफल",
    "invalidOtp": "अमान्य OTP",
    "verifying": "सत्यापित हो रहा है..."
      },
    },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
