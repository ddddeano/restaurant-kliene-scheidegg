import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";

export const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCZ7q4chu_nYEWQsu2cS5aX5QTxb9N4jqg",
        authDomain: "restaurant-scheidegg.firebaseapp.com",
        projectId: "restaurant-scheidegg",
        storageBucket: "restaurant-scheidegg.appspot.com",
        messagingSenderId: "449818851344",
        appId: "1:449818851344:web:01a36c8c1665e01c1df295"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);

    return {
        firebaseApp,
        firestore,
    }
}