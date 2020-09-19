const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.submitApplication = functions.https.onCall(
  async (data, context) => {
    const mydb = db.collection("users").doc(context.auth.uid);
    await mydb.update({
      applicationStatus: 1
    });
    const applications = db.collection("applications").doc(context.auth.uid);
    await applications.update({
      status: 1,
      language: data.language,
      essayAns: data.essayAns,
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      timeZone: data.timeZone,
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
  }
);
