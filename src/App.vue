<template>
  <v-app>
    <navigationBar
      v-if="this.getRoutePath && this.getRoutePath !== '/live'"
      class="forDesk"
    />
    <mobileBar
      v-if="this.getRoutePath && this.getRoutePath !== '/live'"
      class="forMob"
    />
    <router-view />
  </v-app>
</template>

<script>
import store from "@/store/index.js";
import navigationBar from "@/components/common/NavigationBar.vue";
import mobileBar from "@/components/common/MobileBar.vue";
export default {
  name: "App",
  store,
  components: {
    navigationBar,
    mobileBar
  },
  data() {
    return {};
  },
  computed: {
    getRoutePath() {
      return this.$route.path;
    }
  }
};
</script>

<style>
.forDesk {
  display: block;
}

.forMob {
  display: none;
}

@media (max-width: 72rem) {
  .forDesk {
    display: none;
  }

  .forMob {
    display: block;
  }
}
</style>
