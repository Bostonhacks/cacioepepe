const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.loadApplication = functions.https.onCall(
  async (data, context) => {
    const applications = db.collection("applications").doc(context.auth.uid);
    var userData = await applications.get();
    return userData.data();
  }
);
