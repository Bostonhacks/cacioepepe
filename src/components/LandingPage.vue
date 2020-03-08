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
          <h1 class="display-2 font-weight-bold mb-3">Welcome to Cacioepepe</h1>
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
