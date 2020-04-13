<template>
  <v-layout align-center justify-center>
    <v-app-bar absolute color="indigo darken-4" dark>
      <v-tabs right>
        <v-tab>Schedule</v-tab>
        <v-tab>Tracks and Workshops</v-tab>
        <v-tab>FAQ</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-container>
      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 indigo--text text--darken-4 font-weight-bold mb-3"
          >
            We're turning 5.
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h3
            class="display-1 red--text text--accent-2 font-weight-medium mb-3"
          >
            And you're invited!
          </h3>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <v-btn rounded color="deep-orange lighten-3" dark>Login</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "landingPage",
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style></style>
