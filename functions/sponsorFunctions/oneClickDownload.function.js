const admin = require("firebase-admin");
const functions = require("firebase-functions");
const archiver = require("archiver");
const UUID = require("uuid-v4");
const path = require("path");
const os = require("os");
const fs = require("fs");

const db = admin.firestore();

const { Storage } = require("@google-cloud/storage");

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const storage = new Storage();

module.exports.oneClickDownload = functions.https.onCall(async data => {
  // Gets list of resume pathfile in Firebase Storage
  const applications = db.collection("applications").where("status", ">", 0);
  var userData = await applications.get();
  var paths = [];
  var names = [];
  userData.forEach(element => {
    var name = element.data().resume[1].split("/");
    names.push(name[2]);
    paths.push(element.data().resume[1]);
  });

  const storage = new Storage();
  const bucket = storage.bucket("bostonhacks-cacioepepe.appspot.com");

  // Creates a temporary file path
  const tempFilePath = path.join(os.tmpdir(), "testing");

  var output = fs.createWriteStream("./testing.zip");
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
      destination: tempFilePath
    });
    // Attempting to put the files into the zip file
    await archive.file(names[i], { name: names[i] });
    archive.file(tempFilePath + "/" + names[i], {name: names[i]})

  }

  console.log("done");

  await bucket.upload("testing.zip", {
    destination: "allResumes/" + "testing.zip",
    metadata: {
      contentType: "application/zip",
      metadata: {
        firebaseStorageDownloadTokens: uuid
      }
    }
  });

  return fs.unlinkSync(tempFilePath);
});
