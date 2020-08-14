const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readWifiDetails = functions.https.onCall(async () => {
  const wifiDetails = db.collection("wifiDetails");
  var wifiData = await wifiDetails.get();
  var res = [];

  wifiData.forEach(element => {
    res.push(element.data());
  });
  return res;
});
