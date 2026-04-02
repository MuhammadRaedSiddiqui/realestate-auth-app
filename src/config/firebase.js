import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAjjOHEcBd7KdmfQREF9LbFgBq1wzCn4fI",
  authDomain: "real-estate-app-9446f.firebaseapp.com",
  projectId: "real-estate-app-9446f",
  storageBucket: "real-estate-app-9446f.firebasestorage.app",
  messagingSenderId: "164716838231",
  appId: "1:164716838231:web:6ede335c30ee21e5295212",
  measurementId: "G-5Z37S994GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);
