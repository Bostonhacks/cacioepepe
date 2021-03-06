const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = admin.firestore.FieldValue.arrayUnion;

module.exports.createSchedule = functions.https.onCall(
  async (data, context) => {
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

    // https://firebase.google.com/docs/database/ios/lists-of-data#append_to_a_list_of_data
    // Will consider rewriting function utilizing above

    // Front End should send the data needed --> Backend parses data and reorganizes as an event object
    var name = data.name;
    var location = data.location;
    var start = data.start;
    var end = data.end;
    var description = data.description;
    var type = data.type;
    // I think there should be a unique key for an event so we can edit or remove events easily.
    // var key = event key;

    // Creating new Event object
    var newEvent = {
      name: name,
      location: location,
      start: start,
      end: end,
      description: description,
      type: type
      // key: key
    };

    // Access DB to get data of events
    const eventSchedule = db.collection("admin").doc("schedules");
    // var userData = await eventSchedule.get();
    // var events = userData.data().schedule;
    let info = await eventSchedule.get();
    this.schedules = info.data().events;
    if (this.schedules.length == 0) {
      eventSchedule.set({
        events: [newEvent]
      });
    } else {
      // Append new event into the array
      await eventSchedule
        .update({
          events: arrayUnion(newEvent)
        })
        .catch(function(error) {
          console.error("Error: ", error);
        });
    }
    // Sort events based on startTime
    // events.sort((a, b) => a.startTime > b.startTime);
    // events.orderByValue(startTime);

    // await eventSchedule.update({
    //   schedule: events
    // });
    return { message: "New schedule created", code: 201 };
  }
);
