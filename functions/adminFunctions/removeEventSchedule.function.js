const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.removeEventSchedule = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    var title;
    title = data.title;
    const eventSched = db.collection("admin").doc("schedules");

    let dataa = await eventSched.get();
    this.events = dataa
      .data()
      .events.filter(schedule => schedule.title != title);
    await eventSched
      .update({
        events: this.events
      })
      .catch(function(error) {
        console.error("Error: ", error);
      });

    return "Completed!";
  }
);
