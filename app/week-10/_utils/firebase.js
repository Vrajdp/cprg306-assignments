// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcQWyDXbnrEtz4p2Arvn6IWlEV0Qc3kIM",
  authDomain: "cprg306-assignments-fea57.firebaseapp.com",
  projectId: "cprg306-assignments-fea57",
  storageBucket: "cprg306-assignments-fea57.appspot.com",
  messagingSenderId: "56997773647",
  appId: "1:56997773647:web:f92e93e0abf9d4f0d9053a",
  measurementId: "G-E4V5TQ6NWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
