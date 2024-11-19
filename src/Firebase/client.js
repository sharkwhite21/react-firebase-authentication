// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7y9tteyoIjG_6j_elP5Qt6VBUij1Pklc",
  authDomain: "my-firebase-project-2345c.firebaseapp.com",
  projectId: "my-firebase-project-2345c",
  storageBucket: "my-firebase-project-2345c.firebasestorage.app",
  messagingSenderId: "426449104922",
  appId: "1:426449104922:web:eef29dbc73ebb2d6fda1a3",
  measurementId: "G-41K6ZZGXJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);