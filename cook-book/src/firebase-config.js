// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKLfydVXSb8QfzDqSl4ofOBYurAJSq3U8",
    authDomain: "cook-book-7cc65.firebaseapp.com",
    projectId: "cook-book-7cc65",
    storageBucket: "cook-book-7cc65.appspot.com",
    messagingSenderId: "1073295942962",
    appId: "1:1073295942962:web:8d130b19423d00810da32b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };