import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGOoYdWhAt5XVlNZdJ8UzrEt8zvbtHtbE",
  authDomain: "letsbuy-ecommerce.firebaseapp.com",
  projectId: "letsbuy-ecommerce",
  storageBucket: "letsbuy-ecommerce.appspot.com",
  messagingSenderId: "428025716512",
  appId: "1:428025716512:web:f1ca4fb26e9899fd1a8145",
  measurementId: "G-H51L2N98EL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };