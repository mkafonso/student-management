import React, { createContext } from "react";

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// import configs
import firebaseConfig from "../config/firebase";

const FirebaseContext = createContext();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const Firebase = {};

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
