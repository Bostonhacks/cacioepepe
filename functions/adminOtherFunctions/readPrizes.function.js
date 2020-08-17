const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readPrizes = functions.https.onCall(async () => {
  const prizeDb = db.collection("admin").doc("prizesDoc");
  var allPrizes = await prizeDb.get();
  return allPrizes.data().prizes;
});
