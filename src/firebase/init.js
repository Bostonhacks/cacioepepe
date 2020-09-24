import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBGE2R4SS_JZ3vXDPt-q8rJ6kjfE3u-iPE",
  authDomain: "auth.bostonhacks.io",
  databaseURL: "https://bostonhacks-cacioepepe.firebaseio.com",
  projectId: "bostonhacks-cacioepepe",
  storageBucket: "bostonhacks-cacioepepe.appspot.com",
  messagingSenderId: "1038640085828",
  appId: "1:1038640085828:web:b67be175e6c1dbea5e3511",
  measurementId: "G-CG8BYCR2PN"
};

const app = firebase.initializeApp(config);
const auth = firebase.auth();
const functions = firebase.functions();
const db = firebase.firestore();

const arrayUnion = array => firebase.firestore.FieldValue.arrayUnion(array);

export default app;
export { auth, functions, db, arrayUnion };
