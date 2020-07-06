const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updatePrize = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  var name, details;
  name = data.name;
  details = data.details;
  const prizeDoc = db.collection("prizes").doc(data.uid);
  await prizeDoc.update({
    prizeName: name,
    prizeDetail: details
  });

  return "complete";
});
