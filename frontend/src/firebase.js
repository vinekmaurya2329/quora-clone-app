// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRQWpeNEEkBl4GeXBksp8eo0-unwdL9Bo",
  authDomain: "quora-clone-mern-3d354.firebaseapp.com",
  projectId: "quora-clone-mern-3d354",
  storageBucket: "quora-clone-mern-3d354.appspot.com",
  messagingSenderId: "599207996936",
  appId: "1:599207996936:web:dfb37e1184d6b956722bbd",
  measurementId: "G-RNKGLDPKB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider()

export {auth , provider};