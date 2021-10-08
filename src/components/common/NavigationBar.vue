<template>
  <v-app-bar app elevate-on-scroll elevation="1" color="var(--v-primary-base)">
    <v-row class="align-center">
      <v-col lg="1" cols="3" class="d-flex justify-center">
        <BostonHacksNavbarLogo />
      </v-col>
      <v-col
        v-for="button in buttons"
        :key="button.text"
        lg="1"
        cols="3"
        class="d-flex justify-center"
      >
        <v-btn
          depressed
          color="var(--v-primary-base)"
          class="white--text font-weight-bold"
          @click="navigate(button.url)"
        >
          {{ button.text }}
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
        },
        {
          text: "Log In",
          url: "/login"
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
