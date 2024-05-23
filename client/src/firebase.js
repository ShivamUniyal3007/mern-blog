// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-16912.firebaseapp.com",
  projectId: "mern-blog-16912",
  storageBucket: "mern-blog-16912.appspot.com",
  messagingSenderId: "955169843061",
  appId: "1:955169843061:web:026f8c467a18852505d53c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);