const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.removePrize = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var name;
  name = data.name;
  const prizeDoc = db.collection("admin").doc("prizesDoc");

  let dataa = await prizeDoc.get();
  this.prizes = dataa.data().prizes.filter(prize => prize.name != name);
  await prizeDoc
    .update({
      prizes: this.prizes
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return "Completed!";
});
