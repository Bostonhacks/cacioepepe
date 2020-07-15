<template>
  <div>
    <v-toolbar style="background: #80d2ff !important" elevation="0">
      <img
        class="mr-3"
        :src="require('@/assets/BostonHacksMark.png')"
        height="30"
      />
      <v-toolbar-title>BostonHacks</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="home()">Home</v-btn>
        <v-btn
          v-if="this.getRoutePath && this.getRoutePath == '/'"
          text
          href="#schedule"
          >Schedule</v-btn
        >
        <v-btn
          v-if="this.getRoutePath && this.getRoutePath == '/'"
          text
          href="#tracks"
          >Tracks</v-btn
        >
        <v-btn
          v-if="this.getRoutePath && this.getRoutePath == '/'"
          text
          href="#FAQ"
          >FAQ</v-btn
        >
        <v-btn text @click="application()">Application</v-btn>
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
    },
    getRoutePath() {
      return this.$route.path;
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
    },
    application() {
      this.$router.push("/application");
    }
  }
};
</script>
