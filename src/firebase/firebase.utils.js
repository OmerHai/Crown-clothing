import firebase from 'firebase/app';
import 'firebase/firestore'; /* This is import for the data base option */
import 'firebase/auth'; /* This is import for the auth option */

/* This is file for initilize and working with firebase */

const config = {
    apiKey: "AIzaSyAUTuWqDicEsN-EEdw5Km4IBCedPZf6-S0",
    authDomain: "crwn-db-cc3c1.firebaseapp.com",
    databaseURL: "https://crwn-db-cc3c1.firebaseio.com",
    projectId: "crwn-db-cc3c1",
    storageBucket: "crwn-db-cc3c1.appspot.com",
    messagingSenderId: "695164643716",
    appId: "1:695164643716:web:d76f4627cf7e606bc855d1",
    measurementId: "G-XGVPP8SE1Y"
};

/* FUnction that save the user sign in from google to our database */
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message)

        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); /* This allow as to use google to sign in(it can be akso github and facebook etc) */
provider.setCustomParameters({ prompt: 'select_account' }); /* This is open new window for sign in with google */
export const SignInWithGoogle = () => auth.signInWithPopup(provider);/* Make the sign in with google component */

export default firebase;