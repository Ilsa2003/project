// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvBE6NmT5P6P8dV2cfasnZAUdTt4JOQKA",
  authDomain: "internarea-fd5e2.firebaseapp.com",
  projectId: "internarea-fd5e2",
  storageBucket: "internarea-fd5e2.appspot.com",
  messagingSenderId: "521864262650",
  appId: "1:521864262650:web:3c8aa9fed10c4d7fce6a43",
  measurementId: "G-FY31KRFTP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider}