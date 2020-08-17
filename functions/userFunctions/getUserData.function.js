const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.getUserData = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const mydb = db.collection("users").doc(context.auth.uid);
  var userData = await mydb.get();
  return userData.data();
});
