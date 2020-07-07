const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = admin.firestore.FieldValue.arrayUnion;

module.exports.addPrize = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  // add image
  var name, prize, description;
  name = data.name;
  prize = data.prize;
  description = data.description;

  var newPrize = {
    name: name,
    prize: prize,
    description: description
  };

  const prizeDoc = db.collection("admin").doc("prizesDoc");
  await prizeDoc
    .update({
      prizes: arrayUnion(newPrize)
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return "Completed!";
});
