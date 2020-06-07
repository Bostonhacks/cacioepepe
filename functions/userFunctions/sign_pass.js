const openssl = require("async-openssl");
const fs = require("fs-extra");
const crypto = require("crypto");
const archiver = require("archiver");

class SignPass {
  constructor(
    pass_url,
    certificate_url,
    certificate_password,
    wwdr_intermediate_certificate_path
  ) {
    this.pass_url =
      pass_url[pass_url.length - 1] == "/" ? pass_url : pass_url + "/";
    this.certificate_url = certificate_url;
    this.certificate_password = certificate_password;
    this.wwdr_intermediate_certificate_path = wwdr_intermediate_certificate_path;
  }

  async sign_pass_and_upload(writeStream) {
    // remove any manifest.json, signature, DS_store
    await this.clean_up_pass_folder();

    // assume the folder is in the basic state
    await this.generate_json_manifest();

    await this.sign_manifest();

    this.write_to_stream(writeStream);
  }

  write_to_stream(writeStream) {
    var archive = archiver("zip", {
      zlib: { level: 9 }
    });

    archive.pipe(writeStream);
    archive.directory(this.pass_url, false);

    archive.finalize();
  }

  async clean_up_pass_folder() {
    let promise_manifest = new Promise((res, rej) => {
      fs.unlink(this.pass_url + "manifest.json", err => {
        res();
      });
    });
    let promise_DS_store = new Promise((res, rej) => {
      fs.unlink(this.pass_url + ".DS_Store", err => {
        res();
      });
    });
    let promise_signature = new Promise((res, rej) => {
      fs.unlink(this.pass_url + "signature", err => {
        res();
      });
    });

    await Promise.all([promise_signature, promise_manifest, promise_DS_store]);
  }

  async generate_json_manifest() {
    let files = fs.readdirSync(this.pass_url);
    let manifest = {};
    let promise_list = [];
    files.forEach(file => {
      let file_path = this.pass_url + file;
      let promise = new Promise((res, rej) => {
        fs.readFile(file_path, (err, data) => {
          let sha1 = crypto
            .createHash("sha1")
            .update(data)
            .digest("hex");
          manifest[file] = sha1;
          res();
        });
      });
      promise_list.push(promise);
    });
    await Promise.all(promise_list);
    fs.writeFileSync(this.pass_url + "manifest.json", JSON.stringify(manifest));
  }

  // only here for documentation purpose. The cert files should already be included in the openssl folder
  async process_certs() {
    // input: AppleWWDRCA.cer and PassSigning.p12
    let promise1 = openssl(
      `x509 -inform DER -in ${__dirname}/openssl/${this.wwdr_intermediate_certificate_path} -out ${__dirname}/openssl/WWDR.pem`
    );
    let promise2 = openssl(
      `pkcs12 -in ${__dirname}/openssl/${this.certificate_url} -nocerts -out ${__dirname}/openssl/passkey.pem -passin pass:${this.certificate_password} -passout pass:${this.certificate_password}`
    );
    let promise3 = openssl(
      `pkcs12 -in ${__dirname}/openssl/${this.certificate_url} -clcerts -nokeys -out ${__dirname}/openssl/passcertificate.pem -passin pass:${this.certificate_password}`
    );

    await Promise.all([promise1, promise2, promise3]);
  }

  // only here for documentation purpose. The cert files should already be included in the openssl folder
  async need_certs() {
    let promiseWWDR = new Promise((res, rej) => {
      fs.access("WWDR.pem", fs.constants.F_OK, err => {
        if (err) {
          res(true);
        } else {
          res(false);
        }
      });
    });

    let promiseCert = new Promise((res, rej) => {
      fs.access("passcertificate.pem", fs.constants.F_OK, err => {
        if (err) {
          res(true);
        } else {
          res(false);
        }
      });
    });

    let promiseKey = new Promise((res, rej) => {
      fs.access("passkey.pem", fs.constants.F_OK, err => {
        if (err) {
          res(true);
        } else {
          res(false);
        }
      });
    });

    let values = await Promise.all([promiseWWDR, promiseCert, promiseKey]);
    return values.some(el => el);
  }

  async sign_manifest() {
    await openssl(
      `smime -binary -sign -certfile ${__dirname}/openssl/WWDR.pem -signer ${__dirname}/openssl/passcertificate.pem -inkey ${__dirname}/openssl/passkey.pem -in ${this.pass_url}manifest.json -out ${this.pass_url}signature -outform DER -passin pass:${this.certificate_password}`
    );
  }
}

module.exports = SignPass;
