import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCvwCu1446aoGXqQQJFA9MpvVaYm7mLHi0",
    authDomain: "com2-db.firebaseapp.com",
    databaseURL: "https://com2-db.firebaseio.com",
    projectId: "com2-db",
    storageBucket: "com2-db.appspot.com",
    messagingSenderId: "78427215542",
    appId: "1:78427215542:web:3a479aa981c11298053817",
    measurementId: "G-QTQ71Y76T6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;