<template>
  <v-app>
    <navigationBar v-if="this.getRoutePath && this.getRoutePath !== '/live'" />

    <router-view />
  </v-app>
</template>

<script>
import store from "@/store/index.js";
import navigationBar from "@/components/NavigationBar.vue";
export default {
  name: "App",
  store,
  components: {
    navigationBar
  },
  data() {
    return {};
  },
  computed: {
    getRoutePath() {
      //console.log(this.$route.path);
      return this.$route.path;
    }
  }
};
</script>
