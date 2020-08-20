<template>
  <main class="pt-70px">
    <v-row
      class="pb-16 px-5 justify-center align-center"
      style="min-height: calc(100vh - 180px)"
    >
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="justify-center">
            <h3>Log in</h3>
          </v-card-title>
          <v-card-text>
            <div id="firebaseui-auth-container"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>

<script>
import { authUI, authUIConfig } from "@/firebase/init";
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
