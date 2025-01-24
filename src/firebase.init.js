// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdF7FCufW4q2qZbs8py43raTV93C2aLVM",
  authDomain: "bitevote-a7a25.firebaseapp.com",
  projectId: "bitevote-a7a25",
  storageBucket: "bitevote-a7a25.firebasestorage.app",
  messagingSenderId: "544181393584",
  appId: "1:544181393584:web:20b0baf3d9fe539e6fc375"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);