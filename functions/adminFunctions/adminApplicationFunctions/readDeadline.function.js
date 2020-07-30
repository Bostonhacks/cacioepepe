const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readDeadline = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const deadlineDb = db.collection("admin").doc("regDeadline");
  var deadline = await deadlineDb.get();
  var res = [];
  deadline.forEach(element => {
    res.push(element.data());
  });
  return res;
});
