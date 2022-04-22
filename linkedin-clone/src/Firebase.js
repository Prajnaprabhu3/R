import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCL55bTlwtlXVjQzbpi23iJqOnjiYrZQfA",
    authDomain: "linkedin-clone-a9e6f.firebaseapp.com",
    projectId: "linkedin-clone-a9e6f",
    storageBucket: "linkedin-clone-a9e6f.appspot.com",
    messagingSenderId: "687380745298",
    appId: "1:687380745298:web:d264b244fc30a3b0b1638b"
};

// This line of code connects eevrything
const firebaseApp = firebase.initializeApp(firebaseConfig);

// database
const db = firebase.firestore();

// auth 
const auth = firebase.auth();

export { db, auth };