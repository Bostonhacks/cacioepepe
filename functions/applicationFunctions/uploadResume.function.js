const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");
const UUID = require("uuid-v4");

module.exports.uploadResume = functions.https.onCall(async data => {
  const storage = new Storage();
  const bucket = storage.bucket("bostonhacks-cacioepepe.appspot.com");
  var uuid = UUID();
  var fileBuffer = new Buffer(data.file, "base64");
  var file = bucket.file(
    "resumes/" + data.uid + "/" + data.displayName + "_Resume.pdf"
  );
  await file.save(fileBuffer, {
    metadata: {
      contentType: data.type,
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
      "resumes%2F" +
      data.uid +
      "%2F" +
      encodeURIComponent(data.displayName + "_Resume.pdf") +
      "?alt=media&token=" +
      uuid,
    location: "resumes/" + data.uid + "/" + data.displayName + "_Resume.pdf"
  };
});
