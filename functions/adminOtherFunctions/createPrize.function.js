const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = admin.firestore.FieldValue.arrayUnion;

module.exports.createPrize = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  let userData = await db
    .collection("users")
    .doc(context.auth.uid)
    .get();
  if (userData.data().role != "admin") {
    return {
      message: "You are not authorized to perform this action",
      code: 401
    };
  }

  // add image
  var newPrize = {
    name: data.name,
    prize: data.prize,
    description: data.description
  };

  const prizesDb = db.collection("admin").doc("prizesDoc");
  await prizesDb
    .update({
      prizes: arrayUnion(newPrize)
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "New prize created", code: 201 };
});
