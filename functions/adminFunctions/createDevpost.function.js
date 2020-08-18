const admin = require("firebase-admin");
const functions = require("firebase-functions");

const db = admin.firestore();

const arrayUnion = admin.firestore.FieldValue.arrayUnion;

module.exports.createDevpost = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    return { message: "Authentication Required!", code: 401 };
  }

  var newPost = {
    name: data.name,
    detail: data.detail
  };

  const postDb = db.collection("admin").doc("devpostDoc");
  await postDb
    .update({
      devposts: arrayUnion(newPost)
    })
    .catch(function(error) {
      console.error("Error: ", error);
    });

  return { message: "New prize created", code: 201 };
});

// createDevpost(name: "Hello", detail: "123")
