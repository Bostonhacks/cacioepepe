import * as firebase from "firebase/app";

const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = firebase.firestore.FieldValue.arrayUnion;

module.exports.addFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var question, answer;
  question = data.question;
  answer = data.answer;
  const doc = db.collection("admin").doc("FAQs");
  await doc.update({
    questions: arrayUnion(question),
    answers: arrayUnion(answer)
  });

  return "Completed!";
});
