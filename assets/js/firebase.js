import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
getFirestore,
collection,
addDoc,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyBxi9jixmJPGWodjLaNlY3oXeHvOGzQtlc",

authDomain: "grizzly-6c924.firebaseapp.com",

projectId: "grizzly-6c924",

storageBucket: "grizzly-6c924.firebasestorage.app",

messagingSenderId: "1098522296641",

appId: "1:1098522296641:web:1fac71feda4e7ad9a8e1c0",

measurementId: "G-GPLGFK68VD"

};

const app =
initializeApp(firebaseConfig);

export const auth =
getAuth(app);

export const provider =
new GoogleAuthProvider();

export const db =
getFirestore(app);

export {
signInWithPopup,
onAuthStateChanged,
signOut,
collection,
addDoc,
getDocs
};
