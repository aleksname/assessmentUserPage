import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFCOloeXIdo3b2LSny1NgUXJ20ijN8_7o",
  authDomain: "useracout-9a698.firebaseapp.com",
  projectId: "useracout-9a698",
  storageBucket: "useracout-9a698.appspot.com",
  messagingSenderId: "442918198893",
  appId: "1:442918198893:web:431aa7a8ec5245a76b6964",
  measurementId: "G-6NTPBTL8VG",
};

const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
