const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.uploadSlackInfo = functions.https.onCall(async data => {
  const slackdb = db.collection("admin").doc("slackInfo");
  await slackdb.set({
    slackToken: data.token,
    slackInviteLink: data.invitelink
  });
  return;
});
