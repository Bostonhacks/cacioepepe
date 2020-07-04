const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();
//updateFAQ({questions: "where do you live", answers: "idk"})
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
