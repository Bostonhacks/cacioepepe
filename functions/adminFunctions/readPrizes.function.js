const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readPrizes = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const prizeDb = db.collection("admin").doc("prizesDoc");
  var allPrizes = await prizeDb.get();
  var res = [];
  allPrizes.forEach(element => {
    res.push(element.data());
  });
  return res;
});
