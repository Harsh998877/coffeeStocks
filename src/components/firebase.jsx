// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkMAQMO0vxfpCHpFNpFqsLjKQcT-apCEI",
  authDomain: "coffeemazed.firebaseapp.com",
  projectId: "coffeemazed",
  storageBucket: "coffeemazed.appspot.com",
  messagingSenderId: "658621741288",
  appId: "1:658621741288:web:5a1684dc6ac3b0ef56b15d",
  databaseURL: "https://coffeemazed-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
