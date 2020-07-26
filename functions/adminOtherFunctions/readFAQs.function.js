const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readFAQs = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const faqsDb = db.collection("admin").doc("FAQs");
  var allFaqs = await faqsDb.get();
  return allFaqs.data().faqs;
});
