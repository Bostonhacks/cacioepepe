const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updatePrize = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  let userData = await db.collection("users").get();
  if (userData.data().role != "admin") {
    return {
      message: "You are not authorized to perform this action",
      code: 401
    };
  }

  const prizesDb = db.collection("admin").doc("prizeDoc");
  let info = await prizesDb.get();
  this.prizes = info.data().prizes;

  var found = false;
  for (var i = 0; i < this.prizes.length; i++) {
    if (this.prizes[i].name == data.oldName) {
      found = true;
      this.prizes[i] = {
        name: data.newName,
        prize: data.newPrize,
        description: data.newDesc
      };
    }
  }
  if (found == false) {
    return "Name not found. No changes made.";
  }

  await prizesDb
    .update({
      prizes: this.prizes
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "Prize updated", code: 200 };
});
