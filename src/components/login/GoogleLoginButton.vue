<template>
  <v-btn block color="info white--text" @click="googleSignUp">
    Google Sign up
  </v-btn>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "GoogleLoginButton",
  methods: {
    async googleSignUp() {
      console.log("button click new");
      var provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
      firebase.auth().useDeviceLanguage();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          console.log(user.uid);
          console.log(token);
          this.$router.push("/finishsignup");
        });
      // .catch(function(error) {
      //   // Handle Errors here.
      //   // var errorCode = error.code;
      //   // var errorMessage = error.message;
      //   // The email of the user's account used.
      //   // var email = error.email;
      //   // The firebase.auth.AuthCredential type that was used.
      //   // var credential = error.credential;
      //   // ...
      // });
    }
  }
};
</script>
