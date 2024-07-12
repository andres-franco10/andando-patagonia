// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSP5_V5-qWPIXbEAThS2s0bDZ7pw0oDak",
  authDomain: "andandopatagonia-ecommerce.firebaseapp.com",
  projectId: "andandopatagonia-ecommerce",
  storageBucket: "andandopatagonia-ecommerce.appspot.com",
  messagingSenderId: "324727128637",
  appId: "1:324727128637:web:4a7a0d712b4e3889e3a054"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// productos.forEach((prod) => {
//   addDoc(collection(db, "productos"), prod)
//     .then((elem) => console.log(`se agregó el producto id ${elem.id}`))
//     .catch((error) => console.log(error));
// });