import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore();

/**
 * Registers a new user with email and password and saves additional user data to Firestore.
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 * @param {Object} user - Additional user data to store in Firestore.
 */
export const register = async (email, password, user) => {
  try {
    // Create a new user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Store additional user data in Firestore
    const userId = userCredential.user.uid;
    const userDocRef = doc(db, "users", userId);
    await setDoc(userDocRef, user);

    // Show success toast
    toast.success("User registered successfully");
  } catch (error) {
    console.error("Registration Error:", error);
    toast.error(error.message);
  }
};

/**
 * Logs in a user with email and password and fetches user role from Firestore.
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 * @returns {Object} response - Firebase user credential object.
 */
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    // Authenticate the user
    const response = await signInWithEmailAndPassword(auth, email, password);
    const userId = response.user.uid;

    // Fetch the user's role from Firestore
    const userDocRef = doc(db, "users", userId);
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const userRole = userData.role || "unknown";
      console.log("User role:", userRole);

      // Show a success message including the role
      if (userData.role == "shopkeeper"){
        toast.success(`Logged in as ${userRole}`);
      }
    } else {
      toast.error("User data not found in Firestore");
    }
    return response;
  } catch (error) {
    console.error("Login Error:", error);
    toast.error(error.message);
  }
};
