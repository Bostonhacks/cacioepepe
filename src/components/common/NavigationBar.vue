<template>
  <nav>
    <ul>
      <li v-for="bannerLink in BannerLinks" :key="bannerLink.text">
        <Banner :bannerLink="bannerLink" />
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
      </v-toolbar-items>
    </v-toolbar>-->
    <v-btn icon>
      <div v-if="user" @click="signOut()">Sign Out</div>
      <div v-else @click="signIn()">Sign In</div>
    </v-btn>
  </nav>
</template>

<script>
import Banner from "./Banner";

export default {
  components: { Banner: Banner },
  name: "NavigationBar",
  data() {
    return {
      BannerLinks: [
        {
          path: "/",
          text: "Home",
          direction: "right",
          color: "#fe735f"
        },
        {
          path: "/sponsor",
          text: "Sponsors",
          direction: "left",
          color: "#F6D374"
        },
        {
          path: "/dashboard",
          text: "Dashboard",
          direction: "right",
          color: "#0098FF"
        },
        {
          path: "/login",
          text: "Login",
          direction: "left",
          color: "#4BBC79"
        }
        // {
        //   path: "/",
        //   hash: "#FAQ",
        //   text: "FAQ",
        //   direction: "left",
        //   color: "#21998A"
        // },
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
