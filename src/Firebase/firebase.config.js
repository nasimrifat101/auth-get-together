// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1biohAEX-xmzqXpum4bXJNgu4lQ47hbI",
  authDomain: "auth-get-together.firebaseapp.com",
  projectId: "auth-get-together",
  storageBucket: "auth-get-together.appspot.com",
  messagingSenderId: "242109133698",
  appId: "1:242109133698:web:ce976851ed4375c2d6959b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
