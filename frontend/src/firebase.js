// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCAOxZCCUYyUAOSzvSjde37MIpJD5DHLTU",
    authDomain: "whatsapp-mern-8862b.firebaseapp.com",
    projectId: "whatsapp-mern-8862b",
    storageBucket: "whatsapp-mern-8862b.appspot.com",
    messagingSenderId: "718823021699",
    appId: "1:718823021699:web:1a802852a8ec4adab80fb6",
    measurementId: "G-QD06KGLTZN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;