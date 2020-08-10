<template>
  <v-footer style=" background: #e6c8bc;">
    <v-container class="footerFlex">
      <a class="bhacksLogo" @click="home()">
        <img src="../../assets/footer.svg" alt />
      </a>
      <div class="socialMedia">
        <a href="https://www.facebook.com/bostonhacks">
          <img src="../../assets/fb.svg" alt class="icon" />
        </a>
        <a href="https://www.instagram.com/bostonhacks/">
          <img
            src="../../assets/insta.svg"
            alt
            class="icon"
            style="margin-bottom: -.2rem"
          />
        </a>
        <a href="https://twitter.com/boston_hacks">
          <img src="../../assets/twitter.svg" alt class="icon" />
        </a>
      </div>
      <a href="contact@bostonhacks.io" class="email">contact@bostonhacks.io</a>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.footerFlex {
  display: flex;
}

.socialMedia {
  margin-left: 2rem;
}

.icon {
  margin: 0 0.5rem;
}

.email {
  margin-left: auto;
  text-decoration: none;
  color: white !important;
  font-size: 1.5rem;
  height: 2rem;
  margin-top: 0.5rem;
}

@media (max-width: 48rem) {
  .footerFlex {
    flex-direction: column;
  }

  .bhacksLogo,
  .socialMedia,
  .email {
    margin: 0.25rem auto;
  }
}
</style>
