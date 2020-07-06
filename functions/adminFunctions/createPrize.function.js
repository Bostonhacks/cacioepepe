const admin = require("firebase-admin");
const functions = require("firebase-functions");
const { v4: uuidv4 } = require("uuid");

const db = admin.firestore();

module.exports.createPrize = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  var uid = uuidv4();
  const file = db.collection("prizes").doc(uid);

  await file.set({
    uid: uid,
    prizeName: data.prizeName,
    prizeDetail: data.prizeDetail //such as sponsor name, award details
  });

  return "Completed!";
});
