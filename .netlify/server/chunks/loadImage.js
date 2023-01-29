import { initializeApp } from "firebase/app";
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
const firestore = getFirestore(app);
async function loadImage(src) {
  return "https://firebasestorage.googleapis.com/v0/b/mardaxtech-portfolio.appspot.com/o/" + src.replaceAll("/", "%2F") + "?alt=media";
}
export {
  firestore as f,
  loadImage as l
};
