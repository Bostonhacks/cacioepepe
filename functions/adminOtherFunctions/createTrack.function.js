const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = admin.firestore.FieldValue.arrayUnion;

module.exports.createTrack = functions.https.onCall(async (data, context) => {
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

  var newTrack = {
    track: data.track,
    description: data.description
  };

  const tracksDb = db.collection("admin").doc("tracksDoc");
  await tracksDb
    .update({
      tracks: arrayUnion(newTrack)
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "New track created", code: 201 };
});
