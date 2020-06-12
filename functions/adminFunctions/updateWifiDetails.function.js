const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();
// updateWifiDetails({name: "A", password: "12"})
module.exports.updateWifiDetails = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    var name, password;
    name = data.name;
    password = data.password;
    const wifiDoc = db.collection("admin").doc("wifiDetails");
    await wifiDoc.update({
      wifiName: name,
      wifiPassword: password
    });

    return "Completed!";
  }
);
