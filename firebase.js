import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore import
import { getAnalytics, isSupported } from "firebase/analytics"; // Analytics import
import { getStorage } from "firebase/storage"; // Firebase Storage import

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaBv4MlBn4t3r1ht-LYlEB6VjcAYfghGg",
  authDomain: "singularitymelroy.firebaseapp.com",
  projectId: "singularitymelroy",
  storageBucket: "singularitymelroy.appspot.com",
  messagingSenderId: "181541334473",
  appId: "1:181541334473:web:189efdcbb94f987f928c18",
  measurementId: "G-542KEMYZMY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
const db = getFirestore(app); // Firestore initialization

// Initialize Firebase Storage
const storage = getStorage(app); // Firebase Storage initialization

// Initialize Analytics if supported
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  } else {
    console.warn("Firebase Analytics is not supported on this device/browser.");
  }
});

// Export auth, googleProvider, db, and storage
export { auth, googleProvider, db, storage };
