import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// NOT Secret Keys
const firebaseConfig = {
  apiKey: "AIzaSyBAM_6G3w6cK0ojldBsx__A4S1YnW3BHUo",
  authDomain: "wow-soundtrack-guesser.firebaseapp.com",
  projectId: "wow-soundtrack-guesser",
  storageBucket: "wow-soundtrack-guesser.appspot.com",
  messagingSenderId: "158882467224",
  appId: "1:158882467224:web:7793274971ed5955b8efed",
  measurementId: "G-CRR5C4Y2XB"
};

export const initializeFirebase = async (): Promise<void> => {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}

