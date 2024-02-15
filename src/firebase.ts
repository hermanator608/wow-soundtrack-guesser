// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAM_6G3w6cK0ojldBsx__A4S1YnW3BHUo",
  authDomain: "wow-soundtrack-guesser.firebaseapp.com",
  projectId: "wow-soundtrack-guesser",
  storageBucket: "wow-soundtrack-guesser.appspot.com",
  messagingSenderId: "158882467224",
  appId: "1:158882467224:web:7793274971ed5955b8efed",
  measurementId: "G-CRR5C4Y2XB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);