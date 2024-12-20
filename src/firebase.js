// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3HZqDPVL3XuE-JuDhJRMEwwEHxRhmlW0",
    authDomain: "form-7fcd5.firebaseapp.com",
    projectId: "form-7fcd5",
    storageBucket: "form-7fcd5.appspot.com",
    messagingSenderId: "537913259082",
    appId: "1:537913259082:web:19cb086b9cfc8a2a1162b3",
    measurementId: "G-VZB5X57EMG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);