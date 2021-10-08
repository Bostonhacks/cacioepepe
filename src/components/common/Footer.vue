<template>
  <v-footer class="footer">
    <v-container>
      <v-row justify="center">
        <v-col cols="10" sm="8" md="7" lg="7">
          <v-row justify="center">
            <v-col cols="10" sm="6" md="5" lg="4" class="pa-0 verticalCenter">
              <router-link to="/" aria-label="Home" alt="Home Link">
                <BostonHacksLogoTextShadowed />
              </router-link>
            </v-col>

            <v-col cols="12" sm="6" md="7">
              <v-row class="logos" justify="center">
                <v-col>
                  <a
                    href="https://www.facebook.com/bostonhacks"
                    aria-label="Facebook"
                    alt="Facebook Link"
                  >
                    <FaceBookLogo class="socialLogo" />
                  </a>
                </v-col>
                <v-col>
                  <a
                    href="https://www.instagram.com/bostonhacks/"
                    aria-label="Instagram"
                    alt="Instagram Link"
                  >
                    <InstagramLogo class="socialLogo" />
                  </a>
                </v-col>
                <v-col>
                  <a
                    href="https://twitter.com/boston_hacks"
                    aria-label="Twitter"
                    alt="Twitter Link"
                  >
                    <TwitterLogo class="socialLogo" />
                  </a>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="12" class="text-center">
                  <p class="white--text">
                    <a
                      class="white--text"
                      href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                      >MLH Code of Conduct</a
                    >
                    |
                    <router-link
                      to="/privacy"
                      aria-label="Privacy Policy"
                      alt="Privacy Policy"
                      class="white--text"
                    >
                      Privacy Policy
                    </router-link>
                  </p>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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
.socialLogo {
  width: 70px;
  max-width: 100%;
}
.verticalCenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.basicTextShadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.footer {
  /* #683614 */
  /* position: absolute; */
  background-color: var(--v-primary-base) !important;
  bottom: 0;
  width: 100vw;
  flex-shrink: 0;
}

.logos .col {
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
</style>
