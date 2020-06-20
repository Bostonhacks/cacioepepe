const admin = require("firebase-admin");
const functions = require("firebase-functions");
var QRCode = require("qrcode");

const db = admin.firestore();

module.exports.generateQRCode = functions.https.onCall(async (_, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }
  const docRef = db.collection("users").doc(context.auth.uid);
  var uid = await docRef.get().then(doc => {
    return doc.data().uid;
  });

  return QRCode.toString(uid, { type: "svg" }, function(err, url) {
    return url;
  });
});
