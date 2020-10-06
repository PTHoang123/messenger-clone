import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-5K6DtUu_v7e9_1djjPcJemDBof3GPXA",
    authDomain: "messenger-clone-1106b.firebaseapp.com",
    databaseURL: "https://messenger-clone-1106b.firebaseio.com",
    projectId: "messenger-clone-1106b",
    storageBucket: "messenger-clone-1106b.appspot.com",
    messagingSenderId: "412048353201",
    appId: "1:412048353201:web:268f8e2d284e21b4c63f90",
    measurementId: "G-LLRV71CE90"
  });

  const db = firebaseApp.firestore();

  export default db;