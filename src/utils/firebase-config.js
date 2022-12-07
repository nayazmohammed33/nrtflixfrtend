// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth" 

const firebaseConfig = {
  apiKey: "AIzaSyDXiIqsgO87c2P0bA3UjPOSOrAeROy9lKg",
  authDomain: "mern-netflix-b869b.firebaseapp.com",
  projectId: "mern-netflix-b869b",
  storageBucket: "mern-netflix-b869b.appspot.com",
  messagingSenderId: "613556766890",
  appId: "1:613556766890:web:c76b798c22bea41820e8d3",
  measurementId: "G-PYGQVDYKR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);