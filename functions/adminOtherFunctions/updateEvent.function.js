const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateEvent = functions.https.onCall(async (data, context) => {
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

  const mydb = db.collection("admin").doc("schedules");
  const info = await mydb.get();
  this.events = info.data().events;
  this.events[data.index] = {
    name: data.name,
    location: data.location,
    start: data.start,
    end: data.end,
    description: data.description,
    type: data.type
  };
  await mydb.update({
    events: this.events
  });

  return { message: "Schedule updated", code: 200 };
});
