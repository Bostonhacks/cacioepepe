const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = admin.firestore.FieldValue.arrayUnion;

module.exports.createWifiDetails = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    var newWifi = {
      name: data.name,
      password: data.password
    };
    const wifiDb = db.collection("admin").doc("wifiDetails");

    await wifiDb
      .update({
        wifis: arrayUnion(newWifi)
      })
      .catch(function(error) {
        console.error("Error: ", error);
      });

    return { message: "New wifi created", code: 201 };
  }
);
