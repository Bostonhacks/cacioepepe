const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updatePrize = functions.https.onCall(async (data, context) => {
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

  const tracksDb = db.collection("admin").doc("tracksDoc");
  let info = await tracksDb.get();
  this.tracks = info.data().tracks;

  var found = false;
  for (var i = 0; i < this.tracks.length; i++) {
    if (this.tracks[i].track == data.oldT) {
      found = true;
      this.tracks[i] = {
        track: data.newT,
        description: data.newD
      };
    }
  }

  if (found == false) {
    return "Track not found. No changes made.";
  }
  await tracksDb
    .update({
      tracks: this.tracks
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "Track updated", code: 200 };
});
