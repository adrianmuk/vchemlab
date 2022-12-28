// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMZg-ek-GpRCBE-K0JfzPyGN_Pjx_tVZ8",
  authDomain: "vchemlab-d09a7.firebaseapp.com",
  projectId: "vchemlab-d09a7",
  storageBucket: "vchemlab-d09a7.appspot.com",
  messagingSenderId: "250537289367",
  appId: "1:250537289367:web:9d95bbf350c182e89a6bd2",
  measurementId: "G-Y44PHTJ6RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Login with Email and password function
const logInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return true
    } catch (error) {
      return {error: error.message}
    }
  };

// Function for signing up
const registerWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email:user.email,  
      });
      
      return true
    } catch (error) {
      return {error: error.message}
    }
  };

// Function for password reset
const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

// Function for signOut
const logOut = async() => {
     try {
      await signOut(auth)
      return true
    } catch (error) {
      return false
    }
    };

// Exporting our functions
export {
  auth,
  db,
  //signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logOut,
};
