// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBirxJnooXD1WsJBuPn3zEa3oj-Pu9zeEM",
  authDomain: "insta-v1-6ed84.firebaseapp.com",
  projectId: "insta-v1-6ed84",
  storageBucket: "insta-v1-6ed84.appspot.com",
  messagingSenderId: "154975437062",
  appId: "1:154975437062:web:005222265cd9c858dede87",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
