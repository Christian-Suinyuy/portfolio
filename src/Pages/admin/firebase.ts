// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNijGLd9eQsqhQt4yPpPtIXG9A4vkMZig",
  authDomain: "portfolio2-11caf.firebaseapp.com",
  projectId: "portfolio2-11caf",
  storageBucket: "portfolio2-11caf.firebasestorage.app",
  messagingSenderId: "842708997497",
  appId: "1:842708997497:web:eaac48daa1cb2fb361cba8",
  measurementId: "G-MJFSPW02VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);