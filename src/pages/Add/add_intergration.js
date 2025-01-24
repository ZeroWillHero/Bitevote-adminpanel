import { app } from './../../firebase.init';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const db = getFirestore(app);

const addData = async (data) => {
    try {
        const docRef = await addDoc();
    }
}