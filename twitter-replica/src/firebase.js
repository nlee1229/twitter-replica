import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKRc5rsben1JQH64-fACaVsFKmbgg9rHI",
    authDomain: "twitter-replica-97edc.firebaseapp.com",
    projectId: "twitter-replica-97edc",
    storageBucket: "twitter-replica-97edc.appspot.com",
    messagingSenderId: "199192119048",
    appId: "1:199192119048:web:341a068815c2012b09cebd",
    measurementId: "G-G1RX0W8FTJ"
  };

  // firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;