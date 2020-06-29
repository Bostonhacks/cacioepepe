import * as firebase from "firebase/app";

const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

module.exports.addPrize = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var prize;
  prize = data.prize;
  const prizeDoc = db.collection("admin").doc("prizesDoc");
  await prizeDoc.update({
    prizes: arrayUnion(prize)
  });

  return "Completed!";
});
