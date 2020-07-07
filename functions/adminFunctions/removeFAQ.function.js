const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.removeFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  var question;
  question = data.question;
  const FAQdoc = db.collection("admin").doc("FAQs");

  let dataa = await FAQdoc.get();
  this.faqs = dataa.data().faqs.filter(faq => faq.q != question);
  await FAQdoc.update({
    faqs: this.faqs
  }).catch(function(error) {
    console.error("Error: ", error);
  });

  return "Completed!";
});
