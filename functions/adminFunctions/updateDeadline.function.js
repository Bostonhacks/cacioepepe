const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateDeadline = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    const deadlineDb = db.collection("admin").doc("regDeadline");
    await deadlineDb.update({
      startTime: data.startTime,
      finishTime: data.finishTime
    });

    return "Completed!";
  }
);
