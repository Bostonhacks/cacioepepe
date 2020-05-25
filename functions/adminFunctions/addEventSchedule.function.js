const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.addEventSchedule = functions.https.onCall(async data => {
  // https://firebase.google.com/docs/database/ios/lists-of-data#append_to_a_list_of_data
  // Will consider rewriting function utilizing above

  // Front End should send the data needed --> Backend parses data and reorganizes as an event object
  var title = data.title;
  var location = data.location;
  var startTime = data.startTime;
  var finishTime = data.finishTime;
  var description = data.description;
  // I think there should be a unique key for an event so we can edit or remove events easily.
  // var key = event key;

  // Creating new Event object
  var newEvent = {
    title: title,
    location: location,
    startTime: startTime,
    finishTime: finishTime,
    description: description
    // key: key
  };

  // Access DB to get data of events
  const eventSchedule = db.collection("admin").doc("eventSchedule");
  var userData = await eventSchedule.get();
  var events = userData.data().schedule;

  // Append new event into the array
  events.push(newEvent);

  // Sort events based on startTime
  events.sort((a, b) => a.startTime > b.startTime);

  await eventSchedule.update({
    schedule: events
  });
  return;
});
