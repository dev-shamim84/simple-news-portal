// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Do Not Share

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvTqT8IVFubIXH86JQU2Cv_4Iji8RggV4",
  authDomain: "news-portal-breaking.firebaseapp.com",
  projectId: "news-portal-breaking",
  storageBucket: "news-portal-breaking.firebasestorage.app",
  messagingSenderId: "515671726801",
  appId: "1:515671726801:web:e57492d7fbac202cda83f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
