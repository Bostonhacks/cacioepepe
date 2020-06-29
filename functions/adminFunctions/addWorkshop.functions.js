import * as firebase from "firebase/app";

const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

module.exports.addWorkshop = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var workshop;
  workshop = data.workshop;
  const wrkshpDoc = db.collection("admin").doc("workshopDoc");
  await wrkshpDoc.update({
    workshops: arrayUnion(workshop)
  });

  return "Completed!";
});
