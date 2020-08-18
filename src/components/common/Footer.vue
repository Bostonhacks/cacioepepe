<template>
  <v-footer style="background: transparent">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" md="1" class="pa-0 verticalCenter">
          <router-link to="/" alt="Home Link" class="text-left">
            <BostonHacksLogoTextShadowed class="max-height-75" />
          </router-link>
        </v-col>
        <v-col cols="12" sm="3" md="2" offset-md="1">
          <v-row class="logos">
            <v-col cols="4">
              <a
                href="https://www.facebook.com/bostonhacks"
                alt="Facebook Link"
              >
                <FaceBookLogo class="max-height-75" />
              </a>
            </v-col>
            <v-col cols="4">
              <a
                href="https://www.instagram.com/bostonhacks/"
                alt="Instagram Link"
              >
                <InstagramLogo class="max-height-75" />
              </a>
            </v-col>
            <v-col cols="4">
              <a href="https://twitter.com/boston_hacks" alt="Twitter Link">
                <TwitterLogo class="max-height-75" />
              </a>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          sm="5"
          offset-sm="0"
          offset-md="3"
          class="text-center text-md-right verticalCenter"
        >
          <a class="email basicTextShadow" href="mailto:contact@bostonhacks.io"
            >contact@bostonhacks.io</a
          >
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import BostonHacksLogoTextShadowed from "@/components/common/SVG/BostonHacksLogoTextShadowed";
import FaceBookLogo from "@/components/common/SVG/FaceBookLogo";
import InstagramLogo from "@/components/common/SVG/InstagramLogo";
import TwitterLogo from "@/components/common/SVG/TwitterLogo";

export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push("/");
    }
  },
  components: {
    BostonHacksLogoTextShadowed: BostonHacksLogoTextShadowed,
    FaceBookLogo: FaceBookLogo,
    InstagramLogo: InstagramLogo,
    TwitterLogo: TwitterLogo
  }
};
</script>

<style scoped>
.email {
  color: white;
  /* font-size: 1.5em; */
}
.max-height-75 {
  max-height: 45px;
}
.verticalCenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.basicTextShadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
}
</style>
