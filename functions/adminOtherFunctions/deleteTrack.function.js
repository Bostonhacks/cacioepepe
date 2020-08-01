const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteTrack = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  let userData = await db
    .collection("users")
    .doc(context.auth.uid)
    .get();
  if (userData.data().role != "admin") {
    return {
      message: "You are not authorized to perform this action",
      code: 401
    };
  }

  const tracksDoc = db.collection("admin").doc("tracksDoc");
  let info = await tracksDoc.get();
  this.tracks = info.data().tracks.filter(atrack => atrack.track != data.track);
  await tracksDoc
    .update({
      tracks: this.tracks
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "Track deleted", code: 200 };
});
