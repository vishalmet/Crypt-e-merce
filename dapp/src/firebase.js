// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHABiL7yS44I1sUABntz06b1OY4BV6XLE",
  authDomain: "pec-hack.firebaseapp.com",
  projectId: "pec-hack",
  storageBucket: "pec-hack.appspot.com",
  messagingSenderId: "758140823070",
  appId: "1:758140823070:web:d3a7ef3d36cb9d1053300f",
  measurementId: "G-XJPCYDC5QN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;