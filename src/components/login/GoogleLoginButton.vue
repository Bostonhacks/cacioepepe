<template>
  <v-btn block color="info white--text" @click="googleSignUp">
    {{ buttonName }}
  </v-btn>
</template>

<script>
import firebase from "firebase/app";
import store from "../../store";
import { db } from "@/firebase/init.js";

export default {
  name: "GoogleLoginButton",
  props: ["buttonName"],
  mounted() {
    firebase
      .auth()
      .getRedirectResult()
      .then(async result => {
        if (result.credential) {
          // The signed-in user info.
          var user = result.user;
          let userDbResult = await db
            .collection("users")
            .doc(user.uid)
            .get();
          if (!userDbResult.data()) {
            await db
              .collection("users")
              .doc(user.uid)
              .set({
                displayName: user.displayName,
                email: user.email,
                uid: user.uid
              });
            await store.dispatch("setUser");
          }

          this.$router.push("/");
        }
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorMessage = error.message;
        alert(errorMessage);
      });
  },
  methods: {
    googleSignUp() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().useDeviceLanguage();
      firebase.auth().signInWithRedirect(provider);
    }
  }
};
</script>
