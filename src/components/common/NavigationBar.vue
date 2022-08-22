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
          Sponsors
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
        v-if="user && !user.applicationStatus"
        lg="1"
        cols="4"
        class="d-flex justify-center"
      >
        <v-btn
          depressed
          color="transparent"
          class="white--text font-weight-bold"
          @click="dialog = true"
        >
          Apply
        </v-btn>
      </v-col>
      <v-col
        v-if="user && user.applicationStatus"
        lg="1"
        cols="4"
        class="d-flex justify-center"
      >
        <v-btn
          depressed
          color="transparent"
          class="white--text font-weight-bold"
          @click="navigate('/dashboard')"
        >
          Dashboard
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
    <v-dialog v-model="dialog" hide-overlay max-width="600">
      <template v-slot:default="dialog">
        <v-card>
          <v-card-text>
            <div class="text-h5 text-center pa-6">
              Applications are closed for this year. Check back next year to
              apply for BostonHacks 2022!
            </div>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog.value = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import BostonHacksNavbarLogo from "./SVG/BostonHacksNavbarLogo.vue";
export default {
  components: { BostonHacksNavbarLogo },
  name: "NavigationBar",
  data() {
    return {
      dialog: false,
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
