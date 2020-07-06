const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.submitVolunteerApplication = functions.https.onCall(
  async data => {
    const mydb = db.collection("volunteers");
    await mydb.add({
      first: data.first,
      last: data.last,
      phone: data.phone,
      gender: data.gender,
      pronoun: data.pronoun,
      educationLevel: data.educationLevel,
      university: data.university,
      email: data.email,
      preEvent: data.preEvent,
      postEvent: data.postEvent,
      tablingEvent: data.tablingEvent,
      eventVolunteer: data.eventVolunteer,
      picturePermission: data.picturePermission,
      tAandC: data.tAandC
    });
    return;
  }
);
