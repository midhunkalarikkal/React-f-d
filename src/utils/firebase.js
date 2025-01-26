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
  apiKey: "AIzaSyAzojez2Tmj6d89UE7aM5kzKiy8OE53jN4",
  authDomain: "tastetown-3337f.firebaseapp.com",
  projectId: "tastetown-3337f",
  storageBucket: "tastetown-3337f.firebasestorage.app",
  messagingSenderId: "1014568713379",
  appId: "1:1014568713379:web:335a393dc84bae663b5316",
  measurementId: "G-63NQQ99BT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth()