const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteSchedule = functions.https.onCall(
  async (data, context) => {
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

    const schedsDb = db.collection("admin").doc("schedules");
    let info = await schedsDb.get();
    this.events = info
      .data()
      .events.filter(schedule => schedule.title != data.title);
    await schedsDb
      .update({
        events: this.events
      })
      .catch(function(error) {
        console.error("Error: ", error);
      });

    return { message: "Schedule deleted", code: 200 };
  }
);
