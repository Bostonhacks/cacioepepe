const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readSlackChannel = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    const slackdb = db.collection("admin").doc("slackInfo");
    var allChannels = await slackdb.get().then(doc => {
      return doc.data();
    });
    var res = [];
    console.log(allChannels);
    for (const key in allChannels) {
      if (key.toLowerCase().includes(data.role + "channel")) {
        res.push(allChannels[key]);
      }
      // now key and value are the property name and value
    }
    // allChannels.forEach(element => {
    //   if (element.key.toLowerCase().includes(data.role+"channel")) {
    //     res.push(element.data());
    //   }
    // });
    return res;
  }
);
