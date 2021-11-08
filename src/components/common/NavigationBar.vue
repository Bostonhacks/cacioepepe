<template>
  <v-app-bar class="navbar" app elevate-on-scroll color="#FBDF94">
    <v-row class="align-center">
      <v-col
        lg="1"
        cols="3"
        class="d-flex justify-center"
        v-if="!$vuetify.breakpoint.mobile"
      >
        <BostonHacksNavbarLogo />
      </v-col>
      <v-col
        lg="1"
        cols="4"
        class="d-flex justify-center"
        v-if="!($vuetify.breakpoint.mobile && getRoutePath == `/sponsor`)"
      >
        <v-btn
          depressed
          color="transparent"
          class="white--text font-weight-bold"
          @click="navigate('/sponsor')"
        >
          Sponsor
        </v-btn>
      </v-col>
      <v-col lg="1" cols="4" class="d-flex justify-center" v-else>
        <v-btn
          depressed
          color="transparent"
          class="white--text font-weight-bold"
          @click="navigate('/')"
        >
          Home
        </v-btn>
      </v-col>
      <v-col
        v-if="user && (user.applicationStatus == 0 || !user.applicationStatus)"
        lg="1"
        cols="4"
        class="d-flex justify-center"
      >
        <v-btn
          depressed
          color="transparent"
          class="white--text font-weight-bold"
          @click="navigate('/application')"
        >
          Apply
        </v-btn>
      </v-col>
      <v-col v-if="!user" lg="1" cols="4" class="d-flex justify-center">
        <v-btn
          depressed
          color="transparent"
          class="white--text font-weight-bold"
          @click="navigate('/login')"
        >
          Log in
        </v-btn>
      </v-col>
      <v-col v-else lg="1" cols="4" class="d-flex justify-center">
        <v-btn
          depressed
          color="transparent"
          class="white--text font-weight-bold"
          @click="logOut()"
        >
          Log out
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import BostonHacksNavbarLogo from "./SVG/BostonHacksNavbarLogo.vue";
export default {
  components: { BostonHacksNavbarLogo },
  name: "NavigationBar",
  data() {
    return {
      buttons: [
        {
          text: "Menu",
          url: "/"
        },
        {
          text: "Sponsors",
          url: "/sponsor"
        }
      ]
    };
  },
  mounted() {
    console.log(this.getRoutePath);
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    getRoutePath() {
      return this.$route.path;
    },
    filteredBannerLinks() {
      return this.BannerLinks.filter(BannerLink => BannerLink.condition());
    }
  },
  methods: {
    async logOut() {
      await this.$store.dispatch("logOut");
      this.navigate("/");
    },
    navigate(url) {
      window.scrollTo(0, 0);
      this.$router.push(`${url}`).catch(() => {});
    }
  }
};
</script>

<style scoped>
.navbar {
  background: linear-gradient(
    128.47deg,
    #ffa767 7.86%,
    rgba(255, 217, 116, 0.13) 79.44%
  );
}
</style>
