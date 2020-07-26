const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.massAcceptMentor = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    let userData = await db.collection("users").get();
    if (userData.data().role != "admin") {
      return {
        message: "You are not authorized to perform this action",
        code: 401
      };
    }
    // Format of UIDList = array of strings
    var UIDList = data.UIDList;
    UIDList.forEach(async uid => {
      const user = db.collection("users").doc(uid);
      const application = db.collection("mentors").doc(uid);
      await user.update({
        applicationStatus: 4
      });
      await application.update({
        status: 4
      });
    });
  }
);
