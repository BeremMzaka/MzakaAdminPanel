import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQrGw0DKuGRetrRhny6-LsYeqGAiMQeiQ",
  authDomain: "mazaka-8c1a7.firebaseapp.com",
  databaseURL: "https://mazaka-8c1a7-default-rtdb.firebaseio.com",
  projectId: "mazaka-8c1a7",
  storageBucket: "mazaka-8c1a7.appspot.com",
  messagingSenderId: "899280288791",
  appId: "1:899280288791:web:ceca05d719d32eb9b8b052"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
