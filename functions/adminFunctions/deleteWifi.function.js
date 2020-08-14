const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

module.exports.deleteWifi = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  const wifiDb = db.collection("admin").doc("wifiDetails");
  let info = await wifiDb.get();
  this.wifis = info.data().wifis.filter(wifi => wifi.name != data.name);
  await wifiDb
    .update({
      wifis: this.wifis
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "Wifi deleted", code: 200 };
});
