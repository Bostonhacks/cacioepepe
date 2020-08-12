const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readAllDevpost = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const postDb = db.collection("admin").doc("devpostDoc");
  var allPosts = await postDb.get();
  var res = [];
  allPosts.forEach(element => {
    res.push(element.data());
  });
  return res;
});
