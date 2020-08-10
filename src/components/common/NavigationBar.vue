<template>
  <nav>
    <ul>
      <!-- <li v-for="bannerLink in BannerLinks" :key="bannerLink.text">
        <Banner :bannerLink="bannerLink" />
      </li>-->
      <li>
        <router-link to="/">home</router-link>
      </li>
      <li>
        <router-link to="/application">application</router-link>
      </li>
      <li>
        <router-link
          @click="() => this.$router.push('/')"
          :to="{ name: 'home', hash: '#tracks' }"
          >tracks</router-link
        >
      </li>
    </ul>
    <!-- <v-toolbar style="background: rgba(0,0,0,0) !important" elevation="0">
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
          href="#tracks"
          >Tracks</v-btn
        >
        <v-btn
          v-if="this.getRoutePath && this.getRoutePath == '/'"
          text
          href="#schedule"
          >Schedule</v-btn
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
    </v-toolbar>-->
  </nav>
</template>

<script>
// import Banner from "./Banner";

export default {
  // components: { Banner: Banner },
  name: "NavigationBar",
  data() {
    return {
      BannerLinks: [
        {
          action: () => this.$router.push("/").catch(() => {}),
          text: "Home",
          direction: "right",
          color: "#fe735f"
        },
        {
          action: () => this.$router.push("#tracks").catch(() => {}),
          text: "Tracks",
          direction: "left",
          color: "#F6D374"
        },
        {
          action: () => this.$router.push("#schedule").catch(() => {}),
          text: "Schedule",
          direction: "right",
          color: "#4BBC79"
        },
        {
          action: () => this.$router.push("#faq").catch(() => {}),
          text: "FAQ",
          direction: "left",
          color: "#0098FF"
        },
        {
          action: () => this.$router.push("/application").catch(() => {}),
          text: "Application",
          direction: "right",
          color: "#21998A"
        }
      ]
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
    }
    // ,
    // signIn() {
    //   this.$router.push("/login");
    // },
    // home() {
    //   this.$router.push("/");
    // },
    // application() {
    //   this.$router.push("/application");
    // }
  }
};
</script>

<style scoped>
nav {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 10000;
}
ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0 !important;
}
</style>
