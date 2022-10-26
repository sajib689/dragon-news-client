// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7DCpGXHLt5GrQ3bArwIbw5Aw-7MFgwrI",
  authDomain: "dragon-news-631a4.firebaseapp.com",
  projectId: "dragon-news-631a4",
  storageBucket: "dragon-news-631a4.appspot.com",
  messagingSenderId: "850639230660",
  appId: "1:850639230660:web:99a591396c517574c11b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;