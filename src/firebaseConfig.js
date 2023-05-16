import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdv6vByHHTgVICzxnqWPduUHf0swTBinI",
  authDomain: "clone-ba666.firebaseapp.com",
  projectId: "clone-ba666",
  storageBucket: "clone-ba666.appspot.com",
  messagingSenderId: "755868624800",
  appId: "1:755868624800:web:4e338de512ad6fc2d226c5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
