import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfohoKHdk2PZxGeTWlhPaEE0l8fACErXA",
  authDomain: "magazine-dca38.firebaseapp.com",
  projectId: "magazine-dca38",
  storageBucket: "magazine-dca38.appspot.com",
  messagingSenderId: "197765550464",
  appId: "1:197765550464:web:dd8cd17004582528edf165",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
