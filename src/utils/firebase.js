// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {  getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe-7eeGxWWuVh4ojsn6ijXFm7Umdy09jA",
  authDomain: "craveroute-cc28f.firebaseapp.com",
  projectId: "craveroute-cc28f",
  storageBucket: "craveroute-cc28f.firebasestorage.app",
  messagingSenderId: "1063403510429",
  appId: "1:1063403510429:web:0be7e89b2ab32c8275d274",
  measurementId: "G-YSW40LXKRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth()