import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbTlOLptY7vtHsjTVBMGRgB-Jq9eFGev4",
  authDomain: "barighar4sellnrent.firebaseapp.com",
  projectId: "barighar4sellnrent",
  storageBucket: "barighar4sellnrent.appspot.com",
  messagingSenderId: "470952456590",
  appId: "1:470952456590:web:2cd81be099807b694034df",
  measurementId: "G-74NJ3T0G96"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
