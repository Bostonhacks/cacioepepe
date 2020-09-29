const admin = require("firebase-admin");
const functions = require("firebase-functions");
const archiver = require("archiver");
const UUID = require("uuid-v4");
const os = require("os");
const fs = require("fs");

const db = admin.firestore();

const { Storage } = require("@google-cloud/storage");
const storage = new Storage();

module.exports.oneClickDownload = functions
  .runWith({ timeoutSeconds: 540, memory: "2GB" })
  .https.onCall(async (_, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }
    // Gets list of resume pathfile in Firebase Storage
    const applications = db
      .collection("applications")
      .where("status", "in", [4, 5, 7]);
    var userData = await applications.get();
    var paths = [];
    var names = [];
    userData.forEach(element => {
      if (element.data.resume != null) {
        var name = element.data().resume[1].split("/");
        names.push(name[2]);
        paths.push(element.data().resume[1]);
      }
    });

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

    // Uploads resume back to allResumes folder in Firebase Storage
    await bucket.upload(tempFilePath + "/Resume.zip", {
      destination: "allResumes/" + context.auth.uid + "/" + "Resume.zip",
      metadata: {
        contentType: "application/zip",
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
        "allResumes" +
        "%2F" +
        context.auth.uid +
        "%2F" +
        encodeURIComponent("Resume.zip") +
        "?alt=media&token=" +
        uuid,
      location: "allResumes/" + context.auth.uid + "/" + "Resume.zip"
    };
  });
