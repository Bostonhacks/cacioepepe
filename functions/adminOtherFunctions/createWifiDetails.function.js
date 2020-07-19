const admin = require("firebase-admin");
const functions = require("firebase-functions");
const { v4: uuidv4 } = require("uuid");

const db = admin.firestore();

module.exports.createWifiDetails = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    var uid = uuidv4();
    const file = db.collection("wifiDetails").doc(uid);

    await file.set({
      uid: uid,
      name: data.name,
      password: data.password
    });

    return "Completed!";
  }
);
