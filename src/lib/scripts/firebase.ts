import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiXrpvUEkxx3VbK7A8KAL-V3cc03BpNm0",
  authDomain: "mardaxtech-portfolio.firebaseapp.com",
  projectId: "mardaxtech-portfolio",
  storageBucket: "mardaxtech-portfolio.appspot.com",
  messagingSenderId: "185536442992",
  appId: "1:185536442992:web:6de49bce35c40b358d7ab5",
  measurementId: "G-L3E2RL9TNY"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
// const analytics = getAnalytics(app);

export { app, firestore }