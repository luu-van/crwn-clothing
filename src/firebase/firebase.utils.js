import firebase from 'firebase/compat/app'; /*for ver 9*/
import 'firebase/compat/firestore'; /*for ver 9*/
import 'firebase/compat/auth'; /*for ver 9*/

const config = {
    apiKey: "AIzaSyCIERO0LhkhjjCXIlZjTpQl7xZKISSIS8c",
    authDomain: "crwn-clothing-fce05.firebaseapp.com",
    projectId: "crwn-clothing-fce05",
    storageBucket: "crwn-clothing-fce05.appspot.com",
    messagingSenderId: "861259726723",
    appId: "1:861259726723:web:f8871c22da293c2f0f40b6",
    measurementId: "G-7DBLDJKFSP"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;