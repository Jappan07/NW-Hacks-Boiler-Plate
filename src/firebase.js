import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA3OrFPadhRpAHNPAweA0CdOAskHHQFhzs",
    authDomain: "nwhacks-3cdee.firebaseapp.com",
    projectId: "nwhacks-3cdee",
    storageBucket: "nwhacks-3cdee.appspot.com",
    messagingSenderId: "506629040828",
    appId: "1:506629040828:web:8d00e44b63b1013c90feb9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };