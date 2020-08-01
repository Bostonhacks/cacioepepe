/* eslint-disable prettier/prettier */
const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readWifiDetails = functions.https.onCall(
  async _ => {
    const wifiDetails = db.collection("wifiDetails");
    var wifiData = await wifiDetails.get();
    var listOfData = [];

    wifiData.forEach((element) => {
      listOfData.push(element.data());
    });
    return listOfData;
  }
);
