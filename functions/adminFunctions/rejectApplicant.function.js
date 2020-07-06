const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.rejectApplicant = functions.https.onCall(async data => {
  const user = db.collection("users").doc(data.uid);
  const application = db.collection("applications").doc(data.uid);
  await user.update({
    applicationStatus: 2
  });
  await application.update({
    status: 2
  });
  return;
});
