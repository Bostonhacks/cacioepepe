const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.createDeadline = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    var startTime = data.startTime;
    var finishTime = data.finishTime;

    var newDeadline = {
      startTime: startTime,
      finishTime: finishTime
    };

    const deadlineDoc = db.collection("admin").doc("regDeadline");

    // Append new event into the array
    await deadlineDoc
      .set({
        events: newDeadline
      })
      .catch(function(error) {
        console.error("Error: ", error);
      });

    return { message: "New schedule created", code: 201 };
  }
);
