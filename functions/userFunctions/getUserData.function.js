const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.getUserData = functions.https.onCall(async data => {
  const mydb = db.collection("users").doc(data.uid);
  var userData = await mydb.get();
  return userData.data();
});
