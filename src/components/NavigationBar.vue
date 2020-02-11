<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Cacioepepe</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="home()">Home</v-btn>
        <v-btn icon>
          <v-icon v-if="user" @click="signOut()">mdi-export-variant</v-icon>
          <v-icon v-else @click="signIn()">mdi-arrow-right</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async signOut() {
      await this.$store.dispatch("logOut");
      this.$router.push("/");
    },
    signIn() {
      this.$router.push("/login");
    },
    home() {
      this.$router.push("/");
    }
  }
};
</script>
