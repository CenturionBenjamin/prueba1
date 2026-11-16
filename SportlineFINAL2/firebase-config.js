import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLR-IKZgB0ey25GnCY7aVjFEfyUErofZA",
    authDomain: "sportline-7a058.firebaseapp.com",
    projectId: "sportline-7a058",
    storageBucket: "sportline-7a058.firebasestorage.app",
    messagingSenderId: "199909656023",
    appId: "1:199909656023:web:7c60c0e03dfee2caa6f792",
    measurementId: "G-YZX1E4J7V4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
