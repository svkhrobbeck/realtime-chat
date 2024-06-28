import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCjIgYo9WX2SRE7-jGwbiYe6BcEpnFPNuI",
  authDomain: "realtime-chat-ca371.firebaseapp.com",
  projectId: "realtime-chat-ca371",
  storageBucket: "realtime-chat-ca371.appspot.com",
  messagingSenderId: "829056449874",
  appId: "1:829056449874:web:ff750ef9ea4dfbe9f80e8b",
  measurementId: "G-FLEEQZKY6G",
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
