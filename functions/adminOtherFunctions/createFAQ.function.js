const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = admin.firestore.FieldValue.arrayUnion;

module.exports.createFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  var newFAQ = {
    q: data.question,
    a: data.answer
  };

  const faqDb = db.collection("admin").doc("FAQs");
  await faqDb
    .update({
      faqs: arrayUnion(newFAQ)
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "New FAQ created", code: 201 };
});
