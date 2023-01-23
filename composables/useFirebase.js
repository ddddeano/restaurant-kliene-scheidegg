import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const useFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCZ7q4chu_nYEWQsu2cS5aX5QTxb9N4jqg",
        authDomain: "restaurant-scheidegg.firebaseapp.com",
        projectId: "restaurant-scheidegg",
        storageBucket: "restaurant-scheidegg.appspot.com",
        messagingSenderId: "449818851344",
        appId: "1:449818851344:web:611f1dc6dfa4f1bf1df295"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);

    return {
        firebaseApp,
        firestore,
    }
}