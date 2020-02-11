<template>
  <v-app>
    <navigationBar />
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
  }
};
</script>
