<template>
  <v-btn block color="info white--text" @click="googleSignUp">
    Google Sign up
  </v-btn>
</template>

<script>
import firebase from "firebase/app";
import store from "../../store";

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
        .then(async result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          console.log(user.uid);
          console.log(token);

          await store.dispatch("setUser");

          this.$router.push("/finishsignup");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log(errorCode);
          alert(errorMessage);
        });
    }
  }
};
</script>
