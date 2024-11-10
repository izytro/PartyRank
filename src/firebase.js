import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

const config = {
  apiKey: "AIzaSyCsY0xkZSUyxRBdvVkn9ATn8cwbJ4kzN7g",
  authDomain: "hackathon-80d6c.firebaseapp.com",
  projectId: "hackathon-80d6c",
  storageBucket: "hackathon-80d6c.appspot.com",
  messagingSenderId: "888023368742",
  appId: "1:888023368742:web:6ed959d18729fcc85252e7",
};

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const storageRef = ref(storage);
export {
  db,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  storage,
  storageRef,
};
