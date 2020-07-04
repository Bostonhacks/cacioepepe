const admin = require("firebase-admin");
const functions = require("firebase-functions");
const { v4: uuidv4 } = require("uuid");

const db = admin.firestore();

module.exports.createFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  var uid = uuidv4();
  const faq = db.collection("FAQ").doc(uid);

  // createFAQ({questions: "What's your name?", answers: "BostonHacks"})
  await faq.set({
    uid: uid,
    questions: data.questions,
    answers: data.answers
  });

  return "Completed!";
});
