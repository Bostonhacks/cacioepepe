const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.submitMentorApplication = functions.https.onCall(async data => {
  const mydb = db.collection("mentor");
  await mydb.add({
    first: data.first,
    last: data.last,
    phone: data.phone,
    gender: data.gender,
    pronoun: data.pronoun,
    educationLevel: data.educationLevel,
    university: data.university,
    email: data.email,
    picturePermission: data.picturePermission,
    tAandC: data.tAandC
  });
  return;
});
