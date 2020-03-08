const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.createApplication = functions.https.onCall(async data => {
  const mydb = db.collection("users").doc(data.uid);
  await mydb.update({
    applicationStatus: "started"
  });
  const applications = db.collection("applications").doc(data.uid);
  await applications.set({
    rawAppData: null,
    name: null,
    phone: null,
    age: null,
    gender: null,
    prounouns: null,
    educationLevel: null,
    university: null,
    major: null,
    minor: null,
    resume: null,
    githubURL: null,
    linkedinURL: null,
    otherURL: null,
    beenToHackathon: null,
    attendedBHacks: null,
    marketingData: null,
    tAndC1: null,
    tAndC2: null
  });
  return;
});
