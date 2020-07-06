/* eslint-disable prettier/prettier */
const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.readFAQ = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  const faqs = db.collection("FAQ");
  var faqData = await faqs.get();
  var listOfFAQ = [];

  faqData.forEach((element) => {
    listOfFAQ.push(element.data());
  });
  return listOfFAQ;
});
