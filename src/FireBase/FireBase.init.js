// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
  apiKey: "AIzaSyB-AhDapKSTQuCR6xcO1WLSQmHF1j5vK84",
  authDomain: "playpulse-b8a0d.firebaseapp.com",
  projectId: "playpulse-b8a0d",
  storageBucket: "playpulse-b8a0d.firebasestorage.app",
  messagingSenderId: "271587197620",
  appId: "1:271587197620:web:7530d30102edf309044de1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
