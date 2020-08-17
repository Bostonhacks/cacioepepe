const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateEvent = functions.https.onCall(async (data, context) => {
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

  const schedDb = db.collection("admin").doc("schedules");
  let info = await schedDb.get();
  this.schedules = info.data().schedules;

  var found = false;
  for (var i = 0; i < this.schedules.length; i++) {
    if (this.schedules[i].name == data.oldName) {
      found = true;
      this.schedules[i] = {
        name: data.newName,
        location: data.newLoc,
        start: data.newStart,
        end: data.newEnd,
        description: data.newDesc,
        type: data.newType
      };
    }
  }
  if (found == false) {
    return "Schedule not found. No changes made.";
  }

  await schedDb
    .update({
      faqs: this.faqs
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "Schedule updated", code: 200 };
});
