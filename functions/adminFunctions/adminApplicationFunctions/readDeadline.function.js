const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readDeadline = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  const deadlineDb = db.collection("admin").doc("regDeadline");
  var deadlineDoc = await deadlineDb.get();
  return deadlineDoc.data();
  // deadlineDb.get().then(function(doc) {
  //   if (doc.exists) {
  //     res.push(doc.data());
  //   } else {
  //     console.log("No such document!");
  //   }
  // });
  // return res;
});
