const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.createNewSponsor = functions.https.onCall(async data => {
  const mydb = db.collection("users").doc(data.uid);
  await mydb.set({
    displayName: data.displayName,
    email: data.email,
    uid: data.uid,
    role: "sponsor"
  });
  return;
});
