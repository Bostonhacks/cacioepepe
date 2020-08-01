const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateFAQ = functions.https.onCall(async (data, context) => {
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

  const faqDb = db.collection("admin").doc("FAQs");
  let info = await faqDb.get();
  this.faqs = info.data().faqs;

  var found = false;
  for (var i = 0; i < this.faqs.length; i++) {
    if (this.faqs[i].q == data.oldQ) {
      found = true;
      this.faqs[i] = {
        q: data.newQ,
        a: data.newA
      };
    }
  }
  if (found == false) {
    return "Question not found. No changes made.";
  }

  await faqDb
    .update({
      faqs: this.faqs
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "FAQ updated", code: 200 };
});
