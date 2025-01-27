import { toast } from "react-toastify";
import { db } from "../../firebase.init";
import { collection, doc, setDoc } from 'firebase/firestore';

export const addFoods = async (data) => {
    const uid = localStorage.getItem('uid');
    const shopId = localStorage.getItem('shopId');

    try {
        // Reference the top-level "foods" collection
        const foodsRef = collection(db, 'foods');
        const foodRef = doc(foodsRef); // Create a new document with a generated ID

        await setDoc(foodRef, {
            ...data,
            createdAt: new Date().toISOString(),
            shopRef: doc(db, 'shops', shopId), // Reference to the shop
            addedBy: doc(db, 'users', uid),    // Reference to the user who added the food
        });

        console.log('Food added with ID: ', foodRef.id);
        toast.success('Food added successfully');
    } catch (error) {
        console.error('Error adding food: ', error);
        toast.error('Error adding food: ' + error.message);
    }
};
