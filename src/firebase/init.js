import firebase from "firebase/app";
const firebaseui = require("firebaseui");
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyBGE2R4SS_JZ3vXDPt-q8rJ6kjfE3u-iPE",
  authDomain: "bostonhacks-cacioepepe.firebaseapp.com",
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

const authUI = new firebaseui.auth.AuthUI(auth);

const authUIConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      customParameters: {
        prompt: "select_account"
      }
    }
  ]
};

export default app;
export { auth, authUI, authUIConfig, functions };
