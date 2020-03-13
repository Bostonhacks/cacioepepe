const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.waitlistApplicant = functions.https.onCall(async data => {
  const user = db.collection("users").doc(data.uid);
  const application = db.collection("applications").doc(data.uid);
  await user.update({
    applicationStatus: 3
  });
  await application.update({
    status: 3
  });
  return;
});
