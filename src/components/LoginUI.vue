<template>
  <v-layout align-center justify-center>
    <v-card width="400px">
      <v-card-title class="justify-center">
        <h3>Log in</h3>
      </v-card-title>
      <v-card-text>
        <div id="firebaseui-auth-container"></div>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
import { authUI, authUIConfig } from "../firebase/init";
export default {
  name: "AuthUI",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    authUI.start("#firebaseui-auth-container", authUIConfig);
  }
};
</script>
