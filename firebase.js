// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzr4Blck9wDrksQ4FnFempIbQb9D_5HZQ",
  authDomain: "reflexed-2eb67.firebaseapp.com",
  projectId: "reflexed-2eb67",
  storageBucket: "reflexed-2eb67.appspot.com",
  messagingSenderId: "22207506951",
  appId: "1:22207506951:web:4558183d3a4d216cacd8a2",
  measurementId: "G-DEMXV9LFST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };