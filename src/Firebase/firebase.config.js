import { initializeApp } from 'firebase/app';
import firebaseConfig from "./firebase.init";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
};

export default initializeFirebase;