const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.rejectApplication = functions.https.onCall(async data => {
  const applications = db.collection("users").doc(data.uid);
  await applications.update({
    applicationStatus: "waitlisted"
  });
  return;
});
