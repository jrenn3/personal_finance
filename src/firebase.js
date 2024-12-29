// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; TBD DO I NEED?
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXOiAAapIGfkjS32UuJhEXUdTd1lTPNyg",
  authDomain: "personal-finance-tools.firebaseapp.com",
  databaseURL: "https://personal-finance-tools-default-rtdb.firebaseio.com",
  projectId: "personal-finance-tools",
  storageBucket: "personal-finance-tools.firebasestorage.app",
  messagingSenderId: "56459400629",
  appId: "1:56459400629:web:e10edb4cc19c9a9064b5fc",
  measurementId: "G-7N0Q2SRMFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const analytics = getAnalytics(app); TBD DO I NEED?

export default database;