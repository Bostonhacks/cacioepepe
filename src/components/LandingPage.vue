<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12>
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          ></v-img>
        </v-flex>
        <v-flex mb-4>
          <h2
            class="display-1 indigo--text text--darken-4 font-weight-bold mb-3"
          >
            We're turning 5.
          </h2>
        </v-flex>
        <v-flex mb-4>
          <h3
            class="display-1 red--text text--accent-2 font-weight-medium mb-3"
          >
            And you're invited!
          </h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

"display-2 font-weight-bold mb-3"

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
