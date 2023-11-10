// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcxGS9FLpI1Mvw-miQqOblO8LOYjcq_pE",
  authDomain: "software-component-cataloguing.firebaseapp.com",
  projectId: "software-component-cataloguing",
  storageBucket: "software-component-cataloguing.appspot.com",
  messagingSenderId: "508255768886",
  appId: "1:508255768886:web:b4a17f2c7ce4baefb1e397",
  measurementId: "G-FMLG2Q1KJZ",
};

export const componentStorageName = "components";
export const usersStorageName = "users";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
