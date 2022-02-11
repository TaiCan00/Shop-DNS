// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDEA7dhW7gu7T5WSJ8h9ej88DBid1IXNaw",
  authDomain: "react-shop-4806b.firebaseapp.com",
  databaseURL: "https://react-shop-4806b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-shop-4806b",
  storageBucket: "react-shop-4806b.appspot.com",
  messagingSenderId: "779468383085",
  appId: "1:779468383085:web:677f2254520982ec31b064",
  measurementId: "G-09RC6PS1PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);