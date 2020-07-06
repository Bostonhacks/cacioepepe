const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const mydb = db.collection("FAQ").doc(data.uid);
  await mydb.update({
    questions: data.questions,
    answers: data.answers
  });
  return "completed";
});
