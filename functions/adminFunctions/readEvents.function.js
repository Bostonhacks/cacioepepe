const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readEvents = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const eventsDb = db.collection("admin").doc("schedules");
  var allEvents = await eventsDb.get();
  var res = [];
  allEvents.forEach(element => {
    res.push(element.data());
  });
  return res;
});
