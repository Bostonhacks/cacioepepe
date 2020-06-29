import * as firebase from "firebase/app";

const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayRemove = firebase.firestore.FieldValue.arrayRemove;

module.exports.removeWorkshop = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    var workshop;
    workshop = data.workshop;
    const wrkshpDoc = db.collection("admin").doc("workshopDoc");
    await wrkshpDoc.update({
      workshops: arrayRemove(workshop)
    });

    return "Completed!";
  }
);
