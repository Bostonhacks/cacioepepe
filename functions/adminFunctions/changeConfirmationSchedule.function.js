const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.changeConfirmationSchedule = functions.https.onCall(
  async (data, context) => {
    if (!context.auth)
      return { message: "Authentication Required!", code: 401 };

    var startDate = data.startDate;
    var closeDate = data.closeDate;
    const application = db.collection("admin").doc("confirmationSchedule");
    await application.update({
      open: startDate,
      close: closeDate
    });
    return;
  }
);
