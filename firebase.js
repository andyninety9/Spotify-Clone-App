// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzLLbZj8KEQj7w-1lFjNtbqcQ2lmjhu20",
    authDomain: "spotify-clone-app-55d51.firebaseapp.com",
    projectId: "spotify-clone-app-55d51",
    storageBucket: "spotify-clone-app-55d51.appspot.com",
    messagingSenderId: "255901474302",
    appId: "1:255901474302:web:480e89f64c5dc1c63ab4af",
    measurementId: "G-KWMECWG224",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
