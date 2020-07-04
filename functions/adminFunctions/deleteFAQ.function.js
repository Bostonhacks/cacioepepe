const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const file = db.collection("FAQ").doc(data.uid);
  await file.delete();
  return;
});
