// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBAWG0M_KGZ7GZMnYoVfBT8rDpFY7rgIvY",
    authDomain: "final-f6428.firebaseapp.com",
    projectId: "final-f6428",
    storageBucket: "final-f6428.appspot.com",
    messagingSenderId: "570393646568",
    appId: "1:570393646568:web:8f451ccf0ec8e8a10ac05d",
    measurementId: "G-8FXFQB7JDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth