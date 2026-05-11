import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC99I1FphPe1MEgoanmopRINKB2bdZUnNo",
  authDomain: "budget-app-c8a1e.firebaseapp.com",
  projectId: "budget-app-c8a1e",
  storageBucket: "budget-app-c8a1e.firebasestorage.app",
  messagingSenderId: "888042716563",
  appId: "1:888042716563:web:97a19d0e31da7158177c66",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
