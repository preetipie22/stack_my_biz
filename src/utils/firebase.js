// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn4ByVIffwoq12b6uThBJabIraRkhsICE",
  authDomain: "my-app-74e67.firebaseapp.com",
  projectId: "my-app-74e67",
  storageBucket: "my-app-74e67.appspot.com",
  messagingSenderId: "138398196757",
  appId: "1:138398196757:web:f2c372aa928a147ab51a1c",
  measurementId: "G-PSVRL8WLL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);