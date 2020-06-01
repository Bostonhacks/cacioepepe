const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateEvent = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const mydb = db.collection("events").doc(data.uid);
  await mydb.update({
    title: data.title,
    location: data.location,
    startTime: data.startTime,
    finishTime: data.finishTime,
    description: data.description,
    type: data.type
  });
  return;
});
