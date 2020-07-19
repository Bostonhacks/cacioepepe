const admin = require("firebase-admin");
const functions = require("firebase-functions");
const { v4: uuidv4 } = require("uuid");

const db = admin.firestore();

module.exports.createEvent = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  var uid = uuidv4();
  const events = db.collection("events").doc(uid);

  await events.set({
    uid: uid,
    title: data.title,
    location: data.location,
    startTime: data.startTime,
    finishTime: data.finishTime,
    description: data.description,
    type: data.type
  });

  return;
});
