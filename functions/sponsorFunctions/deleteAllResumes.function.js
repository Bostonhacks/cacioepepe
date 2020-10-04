const functions = require("firebase-functions");
const { Storage } = require("@google-cloud/storage");
const storage = new Storage();

module.exports.deleteAllResumes = functions
  .runWith({ timeoutSeconds: 540, memory: "2GB" })
  .https.onCall(async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    const bucket = storage.bucket("bostonhacks-cacioepepe.appspot.com");
    var path = "allResumes/" + context.auth.uid + "/" + "Resume.zip";

    // Deletes all resumes based on file path + user's uid
    await bucket.file(path).delete();

    return {
      message: "All resumes deleted.",
      code: 200
    };
  });
