import * as firebase from "firebase/app";

const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayRemove = firebase.firestore.FieldValue.arrayRemove;

module.exports.removeFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var question, answer;
  question = data.question;
  answer = data.answer;
  const doc = db.collection("admin").doc("FAQs");
  await doc.update({
    questions: arrayRemove(question),
    answers: arrayRemove(answer)
  });

  return "Completed!";
});
