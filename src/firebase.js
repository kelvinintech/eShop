// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmprMdOTIxUK1zGCscmjxYtU2LGx5L-UE",
  authDomain: "eshop-6e142.firebaseapp.com",
  projectId: "eshop-6e142",
  storageBucket: "eshop-6e142.appspot.com",
  messagingSenderId: "247302156318",
  appId: "1:247302156318:web:0b56df345c98330233be0f",
  measurementId: "G-4VYGK6B7B6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
