//<-------------->irebase------------------------->
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDMgWml7AtBpyQOiD9_B_cWppsZWx4ramg",
    authDomain: "sprint8-4c578.firebaseapp.com",
    projectId: "sprint8-4c578",
    storageBucket: "sprint8-4c578.appspot.com",
    messagingSenderId: "1098827627651",
    appId: "1:1098827627651:web:2ad9996060b475f5a96fb6",
    measurementId: "G-Y3D4GZR5CY"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const auth = getAuth(app);
export { auth };