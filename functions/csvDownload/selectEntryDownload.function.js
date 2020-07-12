const functions = require("firebase-functions");
const UUID = require("uuid-v4");
const os = require("os");
const fs = require("fs");

const converter = require("json-2-csv");

const { Storage } = require("@google-cloud/storage");
const storage = new Storage();

module.exports.selectEntryDownload = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    var selectedEntries = data.entryList;
    var uuid = UUID();
    //   var paths = [];
    var info = []; // initializing csv

    selectedEntries.forEach(element => {
      var toPush = element;
      toPush.resume = element.resume[0];
      info.push(toPush);
    });
    var csv = await converter.json2csvAsync(info); // converting json to csv
    console.log(info);
    console.log(csv);

    const bucket = storage.bucket("bostonhacks-cacioepepe.appspot.com");

    // Creates a temporary file path
    const tempFilePath = os.tmpdir();
    fs.writeFile(tempFilePath + "/selectedApplicantInfo.csv", csv, function(
      err
    ) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
    await bucket.upload(tempFilePath + "/selectedApplicantInfo.csv", {
      destination:
        "selectedApplicantInfo/" + context.auth.uid + "/selectedApplicants.csv",
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
        "selectedApplicantInfo" +
        "%2F" +
        context.auth.uid +
        "%2F" +
        encodeURIComponent("selectedApplicants.csv") +
        "?alt=media&token=" +
        uuid,
      location:
        "selectedApplicantInfo/" +
        context.auth.uid +
        "/" +
        "selectedApplicants.csv"
    };
  }
);
