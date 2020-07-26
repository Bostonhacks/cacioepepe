const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.retrieveSubmittedApplications = functions.https.onCall(
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
    const applications = db.collection("applications").where("status", "==", 1);
    var appData = await applications.get();
    var res = [];
    appData.forEach(element => {
      res.push(element.data());
    });
    return res;
  }
);
