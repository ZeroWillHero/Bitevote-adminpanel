import { getAuth } from "firebase/auth";
import { app } from "../firebase.init";
import { toast } from "react-toastify";

const auth = getAuth(app);

export const registerWithEmailAndPassword = async ( email, password ) => {
    auth.CreateUserWithEmailAndPassword(auth,email, password)
    .then(() => {
        console.log('User created');
        toast.success('User created');
    }).catch((error) => {
        console.error(error);
        toast.error(error.message);
    });
};

export const loginWithEmailAndPassword = async (auth, email, password ) => {
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log('User logged in');
        toast.success('User logged in');
    }).catch((error) => {
        console.error(error);
        toast.error(error.message);
    });
}
