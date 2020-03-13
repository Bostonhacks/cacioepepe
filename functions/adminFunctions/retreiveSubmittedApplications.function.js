const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.retrieveSubmittedApplicants = functions.https.onCall(async data => {
  const applications = db.collection("applications").where("status", "==", "submitted");
  var userData = await applications.get();
  return userData.data();
});
