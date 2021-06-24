import firebase from "firebase";

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCymU-aQMHMt-YsNQRxvfFNzCFYUcoqLKw",
    authDomain: "letmeask-nlw6-61f9a.firebaseapp.com",
    databaseURL: "https://letmeask-nlw6-61f9a-default-rtdb.firebaseio.com",
    projectId: "letmeask-nlw6-61f9a",
    storageBucket: "letmeask-nlw6-61f9a.appspot.com",
    messagingSenderId: "620028413868",
    appId: "1:620028413868:web:f9a2e46e63365b16af9c09"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();
