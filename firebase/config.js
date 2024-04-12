const { initializeApp } = require('firebase/app')
const { getFirestore } = require('firebase/firestore')

// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBViTNFKVyCeCjpN1A2kLFa5WrCBqU5zbE",
  authDomain: "fir-b4ab8.firebaseapp.com",
  projectId: "fir-b4ab8",
  storageBucket: "fir-b4ab8.appspot.com",
  messagingSenderId: "834243258098",
  appId: "1:834243258098:web:1ff4cfd3ecdf2be3a2926b",
  measurementId: "G-ESVTV87FWY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


module.exports = db

