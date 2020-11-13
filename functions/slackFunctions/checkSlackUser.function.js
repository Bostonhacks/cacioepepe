const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const { WebClient } = require("@slack/web-api");

module.exports.checkSlackUser = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    const slackInfo = db.collection("admin").doc("slackInfo");

    var userEmail = data.email;
    var userdata = await slackInfo.get();
    const token = userdata.data().slackToken;

    const web = new WebClient(token);
    return await web.users
      .lookupByEmail({ token: token, email: userEmail })
      .then(result => {
        return result["ok"];
      })
      .catch(err => {
        return err["ok"];
      });
  }
);
