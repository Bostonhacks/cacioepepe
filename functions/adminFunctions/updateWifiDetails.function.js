const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateWifiDetails = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    const wifiDoc = db.collection("admin").doc("wifiDetails");
    await wifiDoc.update({
      wifiName: data.name,
      wifiPassword: data.password
    });

    return "Completed!";
  }
);
