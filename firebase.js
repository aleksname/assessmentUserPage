import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCzr4Blck9wDrksQ4FnFempIbQb9D_5HZQ",
  authDomain: "reflexed-2eb67.firebaseapp.com",
  projectId: "reflexed-2eb67",
  storageBucket: "reflexed-2eb67.appspot.com",
  messagingSenderId: "22207506951",
  appId: "1:22207506951:web:4558183d3a4d216cacd8a2",
  measurementId: "G-DEMXV9LFST"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
export { db };