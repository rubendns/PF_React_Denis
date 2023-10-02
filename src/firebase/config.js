import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBZ-ngsgSPgtZIEQ9AttWZQcmnLeoAVAtE",
    authDomain: "ecommerce-cambiocambio.firebaseapp.com",
    projectId: "ecommerce-cambiocambio",
    storageBucket: "ecommerce-cambiocambio.appspot.com",
    messagingSenderId: "995083653411",
    appId: "1:995083653411:web:464b1e8bbc67adddcd7c96"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app