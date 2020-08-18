<template>
  <nav>
    <ul>
      <li
        v-for="bannerLink in filteredBannerLinks"
        :key="bannerLink.text + bannerLink.path"
      >
        <button :alt="bannerLink.text" @click="bannerLink.action">
          <Banner :bannerLink="bannerLink" />
        </button>
      </li>
    </ul>
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
          // specify a condition to conditionally render a flag!
          condition: () => true,
          text: "Home",
          direction: "right",
          color: "#fe735f",
          action: () => this.navigate("/")
        },
        {
          condition: () => true,
          text: "Sponsors",
          direction: "left",
          color: "#F6D374",
          action: () => this.navigate("/sponsor")
        },
        {
          // condition: () => false,
          condition: () => this.user,
          text: "Dashboard",
          direction: "right",
          color: "#0098FF",
          action: () => this.navigate("/dashboard")
        },
        {
          // condition: () => false,
          condition: () => !this.user,
          text: "Log In",
          direction: "left",
          color: "#4BBC79",
          action: () => {
            this.navigate("/login");
          }
        },
        {
          condition: () => this.user,
          text: "Log Out",
          direction: "left",
          color: "#4BBC79",
          action: () => this.logOut()
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
