const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.acceptVolunteer = functions.https.onCall(async data => {
  const user = db.collection("users").doc(data.uid);
  const application = db.collection("mentors").doc(data.uid);
  await user.update({
    applicationStatus: 4
  });
  await application.update({
    status: 4
  });
  return;
});
