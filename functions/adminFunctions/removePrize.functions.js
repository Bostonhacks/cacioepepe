import * as firebase from "firebase/app";

const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayRemove = firebase.firestore.FieldValue.arrayRemove;

module.exports.removePrize = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var prize;
  prize = data.prize;
  const prizeDoc = db.collection("admin").doc("prizesDoc");
  await prizeDoc.update({
    workshops: arrayRemove(prize)
  });

  return "Completed!";
});
