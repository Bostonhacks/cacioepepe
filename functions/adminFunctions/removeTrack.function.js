const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.removeTrack = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var track;
  track = data.track;

  const tracksDoc = db.collection("admin").doc("tracksDoc");
  let dataa = await tracksDoc.get();
  this.tracks = dataa.data().tracks.filter(atrack => atrack.track != track);
  await tracksDoc
    .update({
      tracks: this.tracks
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return "Completed!";
});
