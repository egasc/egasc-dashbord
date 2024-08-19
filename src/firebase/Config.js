import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAwF9oqOTy9lacxM-3M5i6dd6P33N_yA1s",
  authDomain: "egasc-web.firebaseapp.com",
  projectId: "egasc-web",
  storageBucket: "egasc-web.appspot.com",
  messagingSenderId: "117434684095",
  appId: "1:117434684095:web:1ad5f206786f152ea0ec0a",
  measurementId: "G-XNGYQHKEQF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export {app,auth}


