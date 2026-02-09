import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotes-62fcf.firebaseapp.com",
  projectId: "examnotes-62fcf",
  storageBucket: "examnotes-62fcf.firebasestorage.app",
  messagingSenderId: "458708458265",
  appId: "1:458708458265:web:a7657372a855fe99fa0388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}