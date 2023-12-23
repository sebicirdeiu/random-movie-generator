import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQE2ls3oS76cVa5nA4gaUOT3wG_xSicVI",
  authDomain: "random-movie-generator-80c5a.firebaseapp.com",
  projectId: "random-movie-generator-80c5a",
  storageBucket: "random-movie-generator-80c5a.appspot.com",
  messagingSenderId: "509352338878",
  appId: "1:509352338878:web:7bdaf6a83efe182df385ef",
  measurementId: "G-BTQWCPPBD6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
