// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSG32QLiY9LBFW0MTQyBKo-Q0GQMRcTDY",
  authDomain: "travel2024project.firebaseapp.com",
  projectId: "travel2024project",
  storageBucket: "travel2024project.appspot.com",
  messagingSenderId: "813196072092",
  appId: "1:813196072092:web:99e0b568e0fcd78dff0959",
  measurementId: "G-T69S4VL1E2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
