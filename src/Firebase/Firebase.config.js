// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJNeGcdSF5lyyEhMwVnRsD9U9lAA1FJ5o",
  authDomain: "auth-email-pass-project.firebaseapp.com",
  projectId: "auth-email-pass-project",
  storageBucket: "auth-email-pass-project.appspot.com",
  messagingSenderId: "964097194072",
  appId: "1:964097194072:web:f04f79e721dbef2321322d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);