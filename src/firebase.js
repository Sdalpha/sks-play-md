// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

// var firebaseApp = firebase.initializeApp({
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional

//   apiKey: "AIzaSyBP0QZdDwAX90e-g_JzfkqLOrDtbDVy-x0",
//   authDomain: "sks-play-md-contact-form.firebaseapp.com",
//   projectId: "sks-play-md-contact-form",
//   storageBucket: "sks-play-md-contact-form.appspot.com",
//   messagingSenderId: "1046004574777",
//   appId: "1:1046004574777:web:5a8cb19df273d69de7fbe8",
//   measurementId: "G-YSP79M3PVW",
// });

// var db = firebaseApp.firestore;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP0QZdDwAX90e-g_JzfkqLOrDtbDVy-x0",
  authDomain: "sks-play-md-contact-form.firebaseapp.com",
  projectId: "sks-play-md-contact-form",
  storageBucket: "sks-play-md-contact-form.appspot.com",
  messagingSenderId: "1046004574777",
  appId: "1:1046004574777:web:5a8cb19df273d69de7fbe8",
  measurementId: "G-YSP79M3PVW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
