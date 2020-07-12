<template>
  <nav>
    <v-app-bar style="background: #80d2ff !important" elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <img
        class="mr-3"
        :src="require('@/assets/BostonHacksMark.png')"
        height="30"
      />
      <v-toolbar-title>BostonHacks</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class=" text--accent-4">
          <a class="link-style" text @click="home()">
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </a>

          <a
            class="link-style"
            v-if="this.getRoutePath && this.getRoutePath == '/'"
            text
            href="#tracks"
          >
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>Tracks and Workshops</v-list-item-title>
            </v-list-item>
          </a>

          <a
            class="link-style"
            v-if="this.getRoutePath && this.getRoutePath == '/'"
            text
            href="#schedule"
          >
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-question-answer</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>Schedule</v-list-item-title>
            </v-list-item>
          </a>

          <a
            class="link-style"
            v-if="this.getRoutePath && this.getRoutePath == '/'"
            text
            href="#FAQ"
          >
            <v-list-item>
              <!-- <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>-->

              <v-list-item-title>FAQ</v-list-item-title>
            </v-list-item>
          </a>

          <!-- <a text @click="application()" class="link-style">
            <v-list-item>
              <v-list-item-title>Applications</v-list-item-title>
            </v-list-item>
          </a>

          <a icon class="link-style">
            <v-list-item>
              <v-icon v-if="user" @click="signOut()">mdi-export-variant</v-icon>
              <v-icon v-else @click="signIn()">mdi-arrow-right</v-icon>
            </v-list-item>
          </a> -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "MobileBar",
  data() {
    return {
      drawer: false,
      group: 0
    };
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

<style>
.link-style {
  text-decoration: none;
}
</style>
