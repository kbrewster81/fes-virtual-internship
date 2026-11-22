// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9I5Nu6_6Ylnz5Vmf9T07ZQiGsYvR3ACk",
  authDomain: "advanced-virtual-interns-e51f5.firebaseapp.com",
  projectId: "advanced-virtual-interns-e51f5",
  storageBucket: "advanced-virtual-interns-e51f5.firebasestorage.app",
  messagingSenderId: "915789345537",
  appId: "1:915789345537:web:a1b91a1417c15f36152100",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const initFirebase = () => {
  return app;
};
