const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readAllEvents = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const events = db.collection("events");
  var eventsData = await events.get();
  var res = [];

  eventsData.forEach(element => {
    res.push(element.data());
  });

  return res;
});
