// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMgWml7AtBpyQOiD9_B_cWppsZWx4ramg",
  authDomain: "sprint8-4c578.firebaseapp.com",
  projectId: "sprint8-4c578",
  storageBucket: "sprint8-4c578.appspot.com",
  messagingSenderId: "1098827627651",
  appId: "1:1098827627651:web:2ad9996060b475f5a96fb6",
  measurementId: "G-Y3D4GZR5CY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getDatabase(app);
const auth = getAuth(app);


