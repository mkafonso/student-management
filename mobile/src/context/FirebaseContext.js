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

const Firebase = {
  getCurrentUser: () => {
    return firebase.auth().currentUser;
  },

  createUser: async (user) => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      const uid = Firebase.getCurrentUser().uid;

      let profilePhotoUrl = "default";

      await db.collection("estudantes").doc(uid).set({
        username: user.username,
        email: user.email,
        profilePhotoUrl,
      });

      if (user.profilePhoto) {
        profilePhotoUrl = await Firebase.uploadProfilePhoto(user.profilePhoto);
      }

      delete user.password;

      return { ...user, profilePhotoUrl, uid };
    } catch (error) {
      console.log("error @createUser: ", error);
    }
  },

  uploadProfilePhoto: async (uri) => {
    const uid = Firebase.getCurrentUser().uid;

    try {
      const photo = await Firebase.getBlob(uri);

      const imageRef = firebase.storage().ref("profilePhotos").child(uid);

      await imageRef.put(photo);

      const url = await imageRef.getDownloadURL();

      await db.collection("estudantes").doc(uid).update({
        profilePhotoUrl: url,
      });

      return url;
    } catch (error) {
      console.log("error @uploadProfilePhoto: ", error);
    }
  },

  getBlob: async (uri) => {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onerror = () => {
        reject(new TypeError("Problema na conexão :( "));
      };

      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  },

  getUserInfo: async (uid) => {
    try {
      const user = await db.collection("estudantes").doc(uid).get();

      if (user.exists) {
        return user.data();
      }
    } catch (error) {
      console.log("error @getUserInfo: ", error);
    }
  },

  logout: async () => {
    try {
      await firebase.auth().signOut();

      return true;
    } catch (error) {
      console.log("error @logout: ", error);
    }

    return false;
  },
};

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={Firebase}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseContext, FirebaseProvider };
