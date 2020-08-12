const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateDevpost = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const postDb = db.collection("admin").doc("devpostDoc");
  let info = await postDb.get();
  this.devposts = info.data().devposts;

  var found = false;
  for (var i = 0; i < this.devposts.length; i++) {
    if (this.devposts[i].name == data.oldName) {
      found = true;
      this.devposts[i] = {
        name: data.newName,
        detail: name.newDetail
      };
    }
  }
  if (found == false) {
    return "Devpost not found. No changes made.";
  }

  await postDb
    .update({
      devposts: this.devposts
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "Devpost updated", code: 200 };
});
