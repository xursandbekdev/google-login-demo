// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAp0zTiZ7rZV0MtFkmfEzp7GHa0E5zoJVM",
    authDomain: "register-demo-ece61.firebaseapp.com",
    projectId: "register-demo-ece61",
    storageBucket: "register-demo-ece61.appspot.com",
    messagingSenderId: "866128663180",
    appId: "1:866128663180:web:ac851b1d099087a86a21a9",
    measurementId: "G-S0LK39K87P"

};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };
