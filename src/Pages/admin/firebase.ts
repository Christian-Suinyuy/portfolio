// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM4wnYYHFJZCMc_OE6A7A5ZqIMSOJ63mY",
  authDomain: "portfolio-aa439.firebaseapp.com",
  projectId: "portfolio-aa439",
  storageBucket: "portfolio-aa439.firebasestorage.app",
  messagingSenderId: "59577084309",
  appId: "1:59577084309:web:9c4964dcce2e841b39ee9c",
  measurementId: "G-95FQVNJTZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);