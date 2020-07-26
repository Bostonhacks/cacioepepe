const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateEvent = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  let userData = await db.collection("users").get();
  if (userData.data().role != "admin") {
    return {
      message: "You are not authorized to perform this action",
      code: 401
    };
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

  return { message: "Schedule updated", code: 200 };
});
