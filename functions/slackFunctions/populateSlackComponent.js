const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const { WebClient } = require("@slack/web-api");

module.exports.checkUser = functions.https.onCall(async data => {
  const slackInfo = db.collection("admin").doc("slackInfo");
  const token = slackInfo.get().then(doc => {
    doc.data().slackToken;
  });
  const inviteLink = slackInfo.get().then(doc => {
    doc.data().inviteLink;
  });
  const web = new WebClient(token);
  if (!data.userAdded) {
    return [inviteLink];
  } else {
    web.conversations.list({ token: token }).then(result => {
      var teamId = web.auth.test({ token: token })["team_id"];
      var channelLinks = [];
      const channels = result["channels"];
      for (var i = 0; i < channels.length; i++) {
        if (data.channel.indexOf(channels[i]["id"]) != 1) {
          channelLinks.push([
            "slack://channel?team=" + teamId + "&id=" + channels[i]["id"],
            channels[i]["name"]
          ]);
        }
      }
      return channelLinks;
    });
  }
});
