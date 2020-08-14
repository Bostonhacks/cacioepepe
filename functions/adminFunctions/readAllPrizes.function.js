const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readAllPrizes = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const prizes = db.collection("prizes");
  var prizesData = await prizes.get();
  var prizesList = [];

  prizesData.forEach(element => {
    prizesList.push(element.data());
  });

  return prizesList;
});
