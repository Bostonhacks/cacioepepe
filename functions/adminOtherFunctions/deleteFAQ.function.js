const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!!", code: 401 };
  }
  let userData = await db.collection("users").get();
  if (userData.data().role != "admin") {
    return {
      message: "You are not authorized to perform this action",
      code: 401
    };
  }

  const faqDb = db.collection("admin").doc("FAQs");
  let info = await faqDb.get();
  this.faqs = info.data().faqs.filter(faq => faq.q != data.question);
  await faqDb
    .update({
      faqs: this.faqs
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "FAQ deleted", code: 200 };
});
