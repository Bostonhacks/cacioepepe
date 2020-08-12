const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteDevpost = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const postDb = db.collection("admin").doc("devpostDoc");
  let info = await postDb.get();
  this.devposts = info.data().devposts.filter(post => post.name != data.name);
  await postDb
    .update({
      devposts: this.devposts
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "Devpost deleted", code: 200 };
});
