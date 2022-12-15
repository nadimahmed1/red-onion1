// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIyhBKrLlp0qZERLxe_eidcfBGhCfL7Lw",
    authDomain: "red-onion1-f8819.firebaseapp.com",
    projectId: "red-onion1-f8819",
    storageBucket: "red-onion1-f8819.appspot.com",
    messagingSenderId: "523865112942",
    appId: "1:523865112942:web:2810e6d6c272f45fca017f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)