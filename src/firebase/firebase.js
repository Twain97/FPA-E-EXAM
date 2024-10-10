import { initializeApp } from "firebase/app";
import "firebase/firestore"
import { getFirestore } from "firebase/firestore";
import {getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA8jYL0_YD1f8lxP4Sv9RXbXckYcB3zUzw",
  authDomain: "mtc-database-7a3f4.firebaseapp.com",
  projectId: "mtc-database-7a3f4",
  storageBucket: "mtc-database-7a3f4.appspot.com",
  messagingSenderId: "210230014480",
  appId: "1:210230014480:web:a1d2942088a3e35accd095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}