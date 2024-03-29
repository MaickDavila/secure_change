import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY || "",
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN || "",
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID || "",
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET || "",
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID || "",
  appId: import.meta.env.VITE_APP_FIREBASE_APPID || "",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
