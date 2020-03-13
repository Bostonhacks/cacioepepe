const admin = require("firebase-admin");
const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");

const db = admin.firestore();

module.exports.deleteResume = functions.https.onCall(async data => {
  const storage = new Storage();
  const bucket = storage.bucket("bostonhacks-cacioepepe.appspot.com");
  const application = db.collection("applications").doc(data.uid);
  var file = bucket.file(data.location);
  await file.delete();
  await application.update({
    resume: null
  });
  return;
});
