import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxvTaV9521tZkagwCltBOgkvyx_9TZKXY",
  authDomain: "database-a990f.firebaseapp.com",
  projectId: "database-a990f",
  storageBucket: "database-a990f.appspot.com",
  messagingSenderId: "267282498534",
  appId: "1:267282498534:web:09996633a59362951a8c27",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// signin with Google Account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;