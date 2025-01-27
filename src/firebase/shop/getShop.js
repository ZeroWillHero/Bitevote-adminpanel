import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase.init";

const getShop = async (uid) => {
    try {
        const userRef = doc(db, "users", uid);
        const shopsRef = collection(db, "shops");
        const q = query(shopsRef, where("userRef", "==", userRef));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            throw new Error("Shop not found");
        }

        const shopDoc = querySnapshot.docs[0];
        
        // Store the shopId in localStorage
        localStorage.setItem("shopId", shopDoc.id);

        return shopDoc.data();
    } catch (error) {
        console.error("Error getting shop: ", error);
        throw error;
    }
};

export default getShop;