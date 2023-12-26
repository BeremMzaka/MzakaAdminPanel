import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "@firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA0qneQNfuD2dfSvI1aEBc9kWVcIITYtLk",
  authDomain: "mzaka-76a35.firebaseapp.com",
  databaseURL: "https://mzaka-76a35-default-rtdb.firebaseio.com",
  projectId: "mzaka-76a35",
  storageBucket: "mzaka-76a35.appspot.com",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
