const admin = require("firebase-admin");
const functions = require("firebase-functions");
const UUID = require("uuid-v4");
const os = require("os");
const fs = require("fs");

const converter = require("json-2-csv");

const db = admin.firestore();

const { Storage } = require("@google-cloud/storage");
const storage = new Storage();

module.exports.entryDownload = functions
  .runWith({ timeoutSeconds: 540, memory: "2GB" })
  .https.onCall(async (_, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    console.log("authenticated");
    const applications = db
      .collection("applications")
      .where("status", "in", [4, 5, 7]);
    var appData = await applications.get();
    console.log("hit");
    var uuid = UUID();
    //   var paths = [];
    var info = []; // initializing csv
    console.log("pushing");
    appData.forEach(element => {
      var toPush = element.data();
      if (toPush.resume != null) {
        toPush.resume = element.data().resume[0];
      } else {
        toPush.resume = null;
      }
      info.push(toPush);
    });
    var csv = await converter.json2csvAsync(info); // converting json to csv

    const bucket = storage.bucket("bostonhacks-cacioepepe.appspot.com");

    // Creates a temporary file path
    const tempFilePath = os.tmpdir();
    fs.writeFile(tempFilePath + "/allApplicantInfo.csv", csv, function(err) {
      if (err) throw err;
    });
    await bucket.upload(tempFilePath + "/allApplicantInfo.csv", {
      destination: "applicantInfo/" + context.auth.uid + "/applicants.csv",
      metadata: {
        contentType: "text/csv",
        metadata: {
          firebaseStorageDownloadTokens: uuid
        }
      }
    });

    return {
      URL:
        "https://firebasestorage.googleapis.com/v0/b/" +
        bucket.name +
        "/o/" +
        "applicantInfo" +
        "%2F" +
        context.auth.uid +
        "%2F" +
        encodeURIComponent("applicants.csv") +
        "?alt=media&token=" +
        uuid,
      location: "applicantInfo/" + context.auth.uid + "/" + "applicants.csv"
    };
  });
