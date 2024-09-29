// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNKOEn0uicTtBGrCecYLRz28AXaabewBY",
  authDomain: "podcast-app-react-recording.firebaseapp.com",
  projectId: "podcast-app-react-recording",
  storageBucket: "podcast-app-react-recording.appspot.com",
  messagingSenderId: "385162395579",
  appId: "1:385162395579:web:8aff2283871692178b8e9e",
  measurementId: "G-9CT1ECYB0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };