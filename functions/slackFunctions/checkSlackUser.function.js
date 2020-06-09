const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const { WebClient } = require("@slack/web-api");

module.exports.checkUser = functions.https.onCall(async uid => {
  const slackInfo = db.collection("admin").doc("slackInfo");
  const userEmail = db.collection("user").doc(uid);
  userEmail.get().then(doc => {
    doc.data().email;
  });
  const token = slackInfo.get().then(doc => {
    doc.data().slackToken;
  });

  const web = new WebClient(token);

  web.users.lookupByEmail({ token: token, email: userEmail }).then(result => {
    return result["ok"];
  });
});
