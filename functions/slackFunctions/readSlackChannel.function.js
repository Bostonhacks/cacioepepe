const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readSlackChannel = functions.https.onCall(async context => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  const slackdb = db.collection("admin").doc("slackInfo");
  var allChannels = await slackdb.get();
  var res = [];
  allChannels.forEach(element => {
    if (element.key.toLowerCase().includes("channel")) {
      res.push(element.data());
    }
  });
  return res;
});
