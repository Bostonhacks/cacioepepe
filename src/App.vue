<template>
  <v-app id="app">
    <!-- <navigationBar v-if="this.getRoutePath && this.getRoutePath !== '/live'" /> -->
    <!-- <mobileBar
      v-if="this.getRoutePath && this.getRoutePath !== '/live'"
      class="forMob"
    />-->
    <navigationBar />

    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
    <footerRow />
  </v-app>
</template>

<script>
import store from "@/store/index.js";
import navigationBar from "@/components/common/NavigationBar.vue";
// import mobileBar from "@/components/common/MobileBar.vue";
import footerRow from "@/components/common/Footer.vue";
export default {
  name: "App",
  store,
  components: {
    navigationBar,
    // mobileBar,
    footerRow
  },
  data() {
    return {};
  },
  computed: {
    getRoutePath() {
      return this.$route.path;
    }
  },
  methods: {
    // home() {
    //   this.$router.push("/");
    // }
  }
};
</script>

<style>
#app {
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-image: url("/assets/landingPage/bostonHacksLoadingLogo.svg");
  background-position: center calc(50vh - 75px);
  background-size: 150px;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>
