const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.massAcceptEmail = functions.https.onCall(async data => {
  // Format of emailList = array of strings
  var emailList = data.emailList;
  emailList.forEach(async email => {
    const user = db.collection("users").doc(email);
    var uid = user.uid;
    const application = db.collection("applications").doc(uid);
    await user.update({
      applicationStatus: 4
    });
    await application.update({
      status: 4
    });
  });
});
