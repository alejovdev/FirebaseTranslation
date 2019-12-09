import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  // YOUR FIREBASE CONFIG HERE
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
