const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.submitApplication = functions.https.onCall(async data => {
  const mydb = db.collection("users").doc(data.uid);
  await mydb.update({
    applicationStatus: "submitted"
  });
  const applications = db.collection("applications").doc(data.uid);
  await applications.update({
    name: data.name,
    phone: data.phone,
    age: data.age,
    gender: data.gender,
    pronouns: data.pronouns,
    educationLevel: data.educationLevel,
    university: data.university,
    major: data.major,
    minor: data.minor,
    resume: data.resume,
    githubURL: data.githubURL,
    linkedinURL: data.linkedinURL,
    otherURL: data.otherURL,
    beenToHackathon: data.beenToHackathon,
    attendedBHacks: data.attendedBHacks,
    marketingData: data.marketingData,
    tAndC1: data.tAndC1,
    tAndC2: data.tAndC2
  });
  return;
});
