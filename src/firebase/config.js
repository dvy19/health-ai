// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnhWx1NY8UlJzYy-EP5w4JcJmUuzfM_IE",
  authDomain: "health-ai-c7ce9.firebaseapp.com",
  projectId: "health-ai-c7ce9",
  storageBucket: "health-ai-c7ce9.firebasestorage.app",
  messagingSenderId: "135524568781",
  appId: "1:135524568781:web:948afdb4829a4449d8e384"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)