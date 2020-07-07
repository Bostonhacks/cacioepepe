const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = admin.firestore.FieldValue.arrayUnion;

module.exports.addFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var q, a;
  q = data.question;
  a = data.answer;

  var newFAQ = {
    q: q,
    a: a
  };

  const FAQdoc = db.collection("admin").doc("FAQs");
  await FAQdoc.update({
    faqs: arrayUnion(newFAQ)
  }).catch(function(error) {
    console.error("Error: ", error);
  });

  return "Completed!";
});
