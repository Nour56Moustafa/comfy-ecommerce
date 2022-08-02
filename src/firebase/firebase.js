// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyDQ3iSLbVwSQE4zMFoAmXA1epWrwflismE",
  authDomain: "comfy-sloth-9f66c.firebaseapp.com",
  projectId: "comfy-sloth-9f66c",
  storageBucket: "comfy-sloth-9f66c.appspot.com",
  messagingSenderId: "1051050980251",
  appId: "1:1051050980251:web:1f23e0c0822fb07c8de73e",
  measurementId: "G-ZLJ2CYK0VP",
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(firebaseConfig);
