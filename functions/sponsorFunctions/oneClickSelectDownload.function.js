const functions = require("firebase-functions");
const archiver = require("archiver");
const UUID = require("uuid-v4");
const os = require("os");
const fs = require("fs");

const { Storage } = require("@google-cloud/storage");
const storage = new Storage();

module.exports.oneClickSelectDownload = functions.https.onCall(
  async (data, context) => {
    // Gets list of resume pathfile in Firebase Storage
    var resumeList = data.resumeList;
    var paths = [];
    var names = [];
    resumeList.forEach(async resume => {
      var name = resume[1].split("/");
      names.push(name[2]);
      paths.push(resume[1]);
    });

    // console.log(paths);
    // console.log(names);

    const bucket = storage.bucket("bostonhacks-cacioepepe.appspot.com");

    // Creates a temporary file path
    const tempFilePath = os.tmpdir();

    // Creates a zip file
    var output = fs.createWriteStream(tempFilePath + "/Resume.zip");
    var archive = archiver("zip", {
      gzip: true,
      zlib: { level: 9 } // Sets the compression level.
    });
    archive.pipe(output);

    console.log("Zip file created.");

    // Downloads the resumes to the tempfile
    var uuid = UUID();
    for (var i = 0; i < paths.length; i++) {
      var file = bucket.file(paths[i]);
      await file.download({
        destination: tempFilePath + "/" + names[i]
      });
      // Attempting to put the files into the zip file
      archive.file(tempFilePath + "/" + names[i], { name: names[i] });
    }
    // Finalize the zip file with all the resumes inside
    await archive.finalize();

    console.log("Zip file finalized.");

    // Uploads resume back to allResumes folder in Firebase Storage
    await bucket.upload(tempFilePath + "/Resume.zip", {
      destination: "selectedResumes/" + context.auth.uid + "/" + "Resume.zip",
      metadata: {
        contentType: "application/zip",
        metadata: {
          firebaseStorageDownloadTokens: uuid
        }
      }
    });

    console.log("Zip file generated.");

    return {
      URL:
        "https://firebasestorage.googleapis.com/v0/b/" +
        bucket.name +
        "/o/" +
        "selectedResumes" +
        "%2F" +
        context.auth.uid +
        "%2F" +
        encodeURIComponent("Resume.zip") +
        "?alt=media&token=" +
        uuid,
      location: "selectedResumes/" + context.auth.uid + "/" + "Resume.zip"
    };
  }
);
