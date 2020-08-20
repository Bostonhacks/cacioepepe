<template>
  <v-app id="app">
    <navigationBar />

    <transition name="slide" mode="out-in">
      <router-view />
    </transition>
    <Footer />

    <!-- 
      because "svg don't care", we can create a filter for 
      drop shadows on SVG elements once, and use it by ID everywhere
      as long as that filter exists in another SVG on the page
    -->
    <svg width="0" height="0">
      <filter
        id="basicDropShadow"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="linearRGB"
      >
        <feOffset dx="2" dy="2" in="SourceAlpha" result="offset" />
        <feGaussianBlur stdDeviation="2 2" in="offset" result="blur" />
        <feFlood flood-color="#172841" flood-opacity="0.7" result="flood" />
        <feComposite in="flood" in2="blur" operator="in" result="composite" />
        <feMerge result="merge">
          <feMergeNode in="composite" result="mergeNode" />
          <feMergeNode in="SourceGraphic" result="mergeNode1" />
        </feMerge>
      </filter>
    </svg>
  </v-app>
</template>

<script>
import store from "@/store/index.js";
import navigationBar from "@/components/common/NavigationBar.vue";
// import mobileBar from "@/components/common/MobileBar.vue";
import Footer from "@/components/common/Footer.vue";
export default {
  name: "App",
  store,
  components: {
    navigationBar,
    Footer
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

.pt-70px {
  padding-top: 70px;
}
</style>
