const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateEvent = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  const mydb = db
    .collection("admin")
    .doc("schedules")
    .doc(data.uid);
  await mydb.update({
    title: data.title,
    location: data.location,
    start: data.startTime,
    end: data.finishTime,
    description: data.description,
    type: data.type
  });
  return;
});
