const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readWifiDetails = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const wifiDb = db.collection("admin").doc("wifiDetails");
  var wifiData = await wifiDb.get();
  var res = [];

  wifiData.forEach(element => {
    res.push(element.data());
  });
  return res;
});
