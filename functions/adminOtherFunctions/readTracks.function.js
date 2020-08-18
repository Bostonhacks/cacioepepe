const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readTracks = functions.https.onCall(async () => {
  const trackDb = db.collection("admin").doc("trackDoc");
  var allTracks = await trackDb.get();
  return allTracks.data().tracks;
});
