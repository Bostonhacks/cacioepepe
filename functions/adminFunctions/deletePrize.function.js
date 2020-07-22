const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deletePrize = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const prizeDb = db.collection("admin").doc("prizesDoc");
  let info = await prizeDb.get();
  this.prizes = info.data().prizes.filter(prize => prize.name != data.name);
  await prizeDb
    .update({
      prizes: this.prizes
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "Prize deleted", code: 200 };
});
