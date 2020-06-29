const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateTrack = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var name;
  name = data.name;
  const trackDoc = db.collection("admin").doc("track");
  await trackDoc.update({
    trackName: name
  });

  return "Completed!";
});
