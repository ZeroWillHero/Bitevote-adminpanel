import { toast } from "react-toastify";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; 



const db = getFirestore();
export const register = async (email, password,user) => {
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // add FireStore 
    const docRef = doc(db, "users", userCredential.user.uid);
    await setDoc(docRef, user);
    toast.success("User registered successfully");
  }catch(error){
    console.log(error);
    toast.error(error.message);
  }
};

export const loginWithEmailAndPassword = async (email, password) => {

  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    toast.success("User logged in successfully");
    return response;

  } catch (error) {
    toast.error(error.message);
  }


}
