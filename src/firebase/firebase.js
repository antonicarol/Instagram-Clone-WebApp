import firebase from "firebase";

const firebaseApp= firebase.initializeApp( {
    apiKey: "AIzaSyBvpp2y4SSQEWUutsAJnouY0gTV0wbYCL8",
    authDomain: "instagram-clone-ca422.firebaseapp.com",
    databaseURL: "https://instagram-clone-ca422.firebaseio.com",
    projectId: "instagram-clone-ca422",
    storageBucket: "instagram-clone-ca422.appspot.com",
    messagingSenderId: "64306480526",
    appId: "1:64306480526:web:3574896aa6a72db4d890df"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};
