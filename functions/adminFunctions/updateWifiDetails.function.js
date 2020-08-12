const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.updateWifiDetails = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    const wifiDb = db.collection("admin").doc("wifiDetails");
    let info = await wifiDb.get();
    this.wifis = info.data().wifis;

    var found = false;
    for (var i = 0; i < this.wifis.length; i++) {
      if (this.wifis[i].name == data.oldName) {
        found = true;
        this.wifis[i] = {
          name: data.newName,
          password: data.newPassword
        };
      }
    }
    if (found == false) {
      return "Wifi not found. No changes made.";
    }

    await wifiDb
      .update({
        wifis: this.wifis
      })
      .catch(function(error) {
        console.error("Error: ", error);
      });

    return { message: "Wifi updated", code: 200 };
  }
);
