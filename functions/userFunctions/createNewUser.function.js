const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.createNewUser = functions.https.onCall(async (data, context) => {
  const mydb = db.collection("users").doc(context.auth.uid);
  await mydb.set({
    displayName: data.displayName,
    email: data.email,
    uid: context.auth.uid,
    role: "user"
  });
  return;
});
