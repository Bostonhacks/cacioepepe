<template>
  <v-app-bar class="navbar" app elevate-on-scroll color="#FBDF94">
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
          color="transparent"
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
          text: "Sign In",
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

<style scoped>
.navbar {
  background: linear-gradient(
    128.47deg,
    #ffa767 7.86%,
    rgba(255, 217, 116, 0.13) 79.44%
  );
}
</style>
