// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ-ngsgSPgtZIEQ9AttWZQcmnLeoAVAtE",
    authDomain: "ecommerce-cambiocambio.firebaseapp.com",
    projectId: "ecommerce-cambiocambio",
    storageBucket: "ecommerce-cambiocambio.appspot.com",
    messagingSenderId: "995083653411",
    appId: "1:995083653411:web:464b1e8bbc67adddcd7c96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const initFirebase = () => app