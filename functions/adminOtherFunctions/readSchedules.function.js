const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readSchedules = functions.https.onCall(async () => {
  const eventsDb = db.collection("admin").doc("schedules");
  var allEvents = await eventsDb.get();
  return allEvents.data().events;
});
