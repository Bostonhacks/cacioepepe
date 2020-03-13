const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.retrieveConfirmedApplications = functions.https.onCall(async data => {
  const applications = db.collection("applications").where("status", "==", 5);
  var userData = await applications.get();
  var res = [];
  userData.forEach(element => {
    res.push(element.data());
  });
  return res;
});
