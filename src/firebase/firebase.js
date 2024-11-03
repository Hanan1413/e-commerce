// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3lDia9lZy1AH9gQjz5XeN8dMu5rnY18I",
  authDomain: "e-ecommerceapp.firebaseapp.com",
  projectId: "e-ecommerceapp",
  storageBucket: "e-ecommerceapp.appspot.com",
  messagingSenderId: "5296863747",
  appId: "1:5296863747:web:9a69ca05113cfd17efec36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db };