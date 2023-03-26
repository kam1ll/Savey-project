// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyAG2-nkEeAm-9V2IGW0PENQRl2rVTxn0Kc",
    authDomain: "savey-73d53.firebaseapp.com",
    projectId: "savey-73d53",
    storageBucket: "savey-73d53.appspot.com",
    messagingSenderId: "363042399167",
    appId: "1:363042399167:web:81def1fe7ed77d1db4770a",
    measurementId: "G-51BCYHFX7T"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
