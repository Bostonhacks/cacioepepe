const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.createWifiDetails = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    let userData = await db
      .collection("users")
      .doc(context.auth.uid)
      .get();
    if (userData.data().role != "admin") {
      return {
        message: "You are not authorized to perform this action",
        code: 401
      };
    }

    const wifiDoc = db.collection("admin").doc("wifiDetails");
    await wifiDoc.set({
      wifiName: data.name,
      wifiPassword: data.password
    });

    return { message: "Wifi details created", code: 201 };
  }
);
