<template>
  <v-btn
    @click="googleSignUp"
    class="pa-5 darkBlue white--text"
    style="text-transform: none; width: 95%;"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="d32spg0z8haa8jv6qrtqd03hfw9xosx"
      role="img"
      viewBox="0 0 24 24"
      class="icon mr-2"
      style="width: 0.9rem;"
    >
      <title id="d32spg0z8haa8jv6qrtqd03hfw9xosx">Google icon</title>
      <path
        fill="white"
        d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
      ></path>
    </svg>
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
                uid: user.uid,
                role: "hacker" // hardcoded until we use finish signup
              });
            await store.dispatch("getUser");
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
