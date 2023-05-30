// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyB0C0AfQMwzz3OPHQu_uiuLVrWpdUye_lM",
  authDomain: "notes-b2937.firebaseapp.com",
  projectId: "notes-b2937",
  storageBucket: "notes-b2937.appspot.com",
  messagingSenderId: "1063419849913",
  appId: "1:1063419849913:web:1081344e7752ef3561bf68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db,"notes")