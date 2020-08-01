const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.acceptApplicant = functions.https.onCall(
  async (data, context) => {
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

    const user = db.collection("users").doc(data.uid);
    const application = db.collection("applications").doc(data.uid);
    await user.update({
      applicationStatus: 4
    });
    await application.update({
      status: 4
    });
    return;
  }
);
