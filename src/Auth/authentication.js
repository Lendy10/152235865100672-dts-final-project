// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAohg4JhtAvxWp-QAcPC2u60JiEhJ2-Huk",
    authDomain: "dts-project-25f4c.firebaseapp.com",
    projectId: "dts-project-25f4c",
    storageBucket: "dts-project-25f4c.appspot.com",
    messagingSenderId: "304725521836",
    appId: "1:304725521836:web:5d82df3b008d2e8abcf609",
    measurementId: "G-XMG5BZTHWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const register = async (email, password) => {
    // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
    } catch (err) {
        console.log(err);
    }
};

// Fungsi untuk Login
const login = async (email, password) => {
    // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
    } catch (err) {
        console.log(err);
    }
};

// Fungsi untuk reset Password
const resetPassword = async (email) => {
    // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (err) {
        console.log(err);
    }
};

// Fungsi untuk sign out
const logout = async () => {
    // Dokumentasi: https://firebase.google.com/docs/auth/web/password-auth#next_steps
    try {
        await signOut(auth);
    } catch (err) {
        console.log(err);
    }
};

// Export function
export {
    auth,
    register,
    login,
    resetPassword,
    logout,
};
