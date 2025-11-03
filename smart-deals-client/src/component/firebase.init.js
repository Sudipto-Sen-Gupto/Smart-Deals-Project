
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjBnqOZrRfVqlK0H0aHTgi9pBMwt6nf5s",
  authDomain: "smart-deals-project-82394.firebaseapp.com",
  projectId: "smart-deals-project-82394",
  storageBucket: "smart-deals-project-82394.firebasestorage.app",
  messagingSenderId: "657750304409",
  appId: "1:657750304409:web:e9131b5be3e2133d943a08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)