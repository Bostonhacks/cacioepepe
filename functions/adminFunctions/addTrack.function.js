const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = admin.firestore.FieldValue.arrayUnion;

module.exports.addTrack = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var track, description;
  track = data.track;
  description = data.description;

  var newTrack = {
    track: track,
    description: description
  };

  const tracksDoc = db.collection("admin").doc("tracksDoc");
  await tracksDoc
    .update({
      tracks: arrayUnion(newTrack)
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return "Completed!";
});
