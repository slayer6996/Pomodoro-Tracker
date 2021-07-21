import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDKEpNjne7OCi_dkuzsQPJhoC7e7GzCBA8",
    authDomain: "upticsproductivity.firebaseapp.com",
    projectId: "upticsproductivity",
    storageBucket: "upticsproductivity.appspot.com",
    messagingSenderId: "980268783314",
    appId: "1:980268783314:web:d873888dc7efcc8a743f0b",
    measurementId: "G-J2L9ZZDXPK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase