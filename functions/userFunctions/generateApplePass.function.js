const admin = require("firebase-admin");
const functions = require("firebase-functions");
const SignPass = require("./sign_pass.js");
const fs = require("fs-extra");
const os = require("os");

const { Storage } = require("@google-cloud/storage");
const bucketName = "bostonhacks-cacioepepe.appspot.com";

const db = admin.firestore();

module.exports.generateApplePass = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      return { message: "Authentication Required!", code: 401 };
    }

    // get ID
    let userID = context.auth.uid;

    let tmpdir = os.tmpdir() + "/";
    await fs.copy(__dirname + "/Event.pass/", tmpdir);

    // update new uid in pass
    var json = JSON.parse(fs.readFileSync(tmpdir + "pass.json").toString());
    json.barcode.message = userID;
    json.serialNumber = userID;
    fs.writeFileSync(tmpdir + "pass.json", JSON.stringify(json));

    // create bucket write stream
    const storage = new Storage();
    let filename = `apple_pass/${userID}.pkpass`;
    let file = storage.bucket(bucketName).file(filename);
    let fileWriteStream = file.createWriteStream();

    // sign the pass and upload
    let signer = new SignPass(
      tmpdir,
      "PassSigning.p12",
      "BostonHacks",
      "AppleWWDRCA.cer"
    );
    await signer.sign_pass_and_upload(fileWriteStream);

    // make file public
    await file.makePublic();

    // update pass url in db
    const userRef = db.collection("users").doc(userID);
    let pass_url = `http://storage.googleapis.com/${bucketName}/${filename}`;
    userRef.update({ apple_pass_url: pass_url });

    return pass_url;
  }
);
