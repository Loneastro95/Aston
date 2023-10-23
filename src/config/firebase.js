// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyD0CEJEZvIYp-2fAn-3MHe5gEiA2DVKrMo",
  authDomain: "hotel-6c26d.firebaseapp.com",
  projectId: "hotel-6c26d",
  storageBucket: "hotel-6c26d.appspot.com",
  messagingSenderId: "252724321988",
  appId: "1:252724321988:web:4e1f2b4480def577517391",
  measurementId: "G-TBRSJ1KJXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage}