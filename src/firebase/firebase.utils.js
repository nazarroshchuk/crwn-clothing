import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';




const config = {
    apiKey: "AIzaSyBdhTPn3ij-aF8gC2jm8oFXNnEBzQ9Xl-w",
    authDomain: "crwn-clothing-e0fc9.firebaseapp.com",
    projectId: "crwn-clothing-e0fc9",
    storageBucket: "crwn-clothing-e0fc9.appspot.com",
    messagingSenderId: "1055119973059",
    appId: "1:1055119973059:web:a11eb5c1bd063f688e6076",
    measurementId: "G-RC63XGQF8V"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
