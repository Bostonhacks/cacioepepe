const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readTracks = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const trackDb = db.collection("admin").doc("trackDoc");
  var allTracks = await trackDb.get();
  var res = [];
  allTracks.forEach(element => {
    res.push(element.data());
  });
  return res;
});
