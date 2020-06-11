const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const { WebClient } = require("@slack/web-api");

module.exports.checkSlackUser = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  const slackInfo = db.collection("admin").doc("slackAPIToken");
  const docRef = db.collection("users").doc(context.auth.uid);
  var userEmail = await docRef.get().then(doc => {
    return doc.data().email;
  });
  const token = await slackInfo.get().then(doc => {
    return doc.data().slackToken;
  });

  const web = new WebClient(token);

  return await web.users
    .lookupByEmail({ token: token, email: userEmail })
    .then(result => {
      return result["ok"];
    });
});
