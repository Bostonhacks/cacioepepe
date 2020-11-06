const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const { WebClient } = require("@slack/web-api");

module.exports.populateSlackComponent = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    const slackInfo = db.collection("admin").doc("slackInfo");
    var token = await slackInfo.get().then(doc => {
      return doc.data().slackToken;
    });
    var inviteLink = await slackInfo.get().then(doc => {
      return doc.data().slackInviteLink;
    });
    const web = new WebClient(token);
    if (!data.userAdded) {
      return { "Invite Link": inviteLink };
    } else {
      var teamId = await web.auth.test({ token: token }).then(response => {
        return response["team_id"];
      });
      var channelLinks = {};
      data.channels.forEach(element => {
        channelLinks[element] =
          "https://slack.com/app_redirect?team=" +
          teamId +
          "&channel=" +
          element;
      });
      return channelLinks;
    }
  }
);
