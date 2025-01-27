import { toast } from "react-toastify";
import { db } from "../../firebase.init";
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";

export const createShop = async (shopData) => {
    try {
        const uid = localStorage.getItem("uid");
        if (!uid) throw new Error("User UID not found in localStorage");

        // Check if a shop with the same email or UID already exists
        const shopsRef = collection(db, "shops");
        const q = query(shopsRef, where("userRef", "==", doc(db, "users", uid)), where("email", "==", shopData.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            throw new Error("A shop with this email or UID already exists");
        }

        const userRef = doc(db, "users", uid);
        const shopRef = doc(shopsRef);

        await setDoc(shopRef, {
            ...shopData,
            userRef,
            createdAt: new Date().toISOString(),
        });

        console.log("Shop created with ID: ", shopRef.id);
        // set shopid in localstorage 
        localStorage.setItem("shopId", shopRef.id);
        toast.success("Shop created successfully");
    } catch (error) {
        console.error("Error creating shop: ", error);
        toast.error("Error creating shop: " + error.message);
    }
};