const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.uploadSlackInfo = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    const slackdb = db.collection("admin").doc("slackInfo");
    await slackdb.set({
      slackToken: data.token,
      slackInviteLink: data.invitelink,
      hackerChannels: data.hackerChannels,
      sponsorChannels: data.sponsorChannels,
      adminChannels: data.adminChannels,
      volunteerChannels: data.volunteerChannels,
      mentorChannels: data.mentorChannels
    });
    return;
  }
);
