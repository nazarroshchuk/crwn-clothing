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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // do query ( .doc(), .get() ) - is request we make to firestore to give us something from the database
    // firestore returns us two types of objects: references and snapshots.
    // firestore will always return us these objects, even if nothing exists at from that query
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get() // all data regarding userRef

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user', error.messages);
        }
    }
    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const  provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
