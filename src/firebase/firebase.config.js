// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCItpgyLfa8pkVmg2_EtvtWEchg3tSnsGQ",
  authDomain: "inventory-management-ea297.firebaseapp.com",
  projectId: "inventory-management-ea297",
  storageBucket: "inventory-management-ea297.appspot.com",
  messagingSenderId: "731571477968",
  appId: "1:731571477968:web:9c60032fa47b053fa76dd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;