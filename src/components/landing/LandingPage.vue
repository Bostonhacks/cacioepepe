<template>
  <main>
    <div id="home" z-index="100" class="mb-n1 pt-16">
      <v-row class="py-9"></v-row>
      <v-container class="mt-5">
        <v-row justify="space-between" class="mx-md-n8 mb-n16">
          <v-col cols="3" class="pa-0">
            <Cloud9
              type="light"
              style=" position: relative"
              class="d-none d-sm-flex ml-sm-4 mt-n16"
            />
          </v-col>
          <v-col cols="3">
            <Cloud9
              type="light"
              style=" position: relative"
              class="d-none d-sm-flex ml-sm-4 mt-16 pt-16"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-n16">
        <v-row class="mt-n16 switchOnSmall">
          <v-col
            cols="5"
            offset="3"
            sm="3"
            offset-sm="2"
            class="mt-n16 d-flex align-content-end flex-column"
          >
            <object
              data="/assets/landingPage/feliz.svg"
              alt="pinata"
              class="mt-5"
              style="max-height: 80vh; z-index: 100"
              :z-index="1000"
            />
          </v-col>
          <v-col
            cols="8"
            offset="2"
            sm="4"
            offset-sm="0"
            class="text-center white--text basicTextShadow"
          >
            <BostonHacksLogoTextShadowed class="mb-5" />
            <h2>Come hack with us!</h2>
            <h2 class="mb-5">November 14-15th, 2020</h2>
            <v-btn
              rounded
              depressed
              x-large
              @click="() => this.$router.push('/login')"
              class="text-center ma-5"
              >Login</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row
          class="mt-0 mb-15 switchOnSmall"
          no-gutters
          justify="center"
          align="center"
        >
          <v-col cols="12" offset-sm="0" sm="5">
            <v-row justify="center" class="basicTextShadow">
              <h2
                style="font-size: 1.5rem; text-align: center; color: white; font-weight: bold"
              >
                Interested in Sponsoring?
              </h2>
              <p
                style="font-size: 1.25rem; text-align: center; color: white; font-weight: normal"
              >
                We’d love to have you on board. Contact us at
                <a class="white--text" href="mailto:sponsor@bostonhacks.io"
                  >sponsor@bostonhacks.io</a
                >
                or check out our sponsor document!
              </p>
            </v-row>
            <br />
            <v-row justify="center">
              <v-btn depressed rounded @click="sponsor()">Learn more</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <Wave z-index="10" class="d-block mt-n16" />
    </div>

    <div
      id="tracks"
      style="margin-top: 0; padding-top: 0; text-shadow: 1px 1px 0.5px rgba(0,0,0,.2);"
    >
      <v-container>
        <v-row style="height: 0">
          <v-col cols="3" class="pa-0">
            <Cloud9
              alt="Blue Cloud"
              type="dark"
              style="position: relative; top: -4rem;"
            />
          </v-col>
        </v-row>
        <v-row no-gutters justify="space-between" style="height: 0">
          <v-col cols="2" sm="4" lg="3" xl="2">
            <RedHotAirBalloon
              class="mt-0 mt-15-sm"
              style="position: relative;"
            />
          </v-col>
          <v-col cols="3" lg="2" style="position: relative;" class="mt-n16">
            <div class="mt-n16" style="position: relative">
              <GreenHotAirBalloon class="mt-n16" style="position: relative; " />
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <h2 class="text-center mb-4 mb-sm-16 pb-xl-16 pt-xl-4 sectionTitle">
              Tracks
            </h2>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="12" sm="6" md="5" xl="4">
            <div>
              <h2>Conservation for Society</h2>
              <p>
                Scientists continue to release research about the effects humans
                have on varying types of pollution. What can be done to
                facilitate research, increase awareness, lessen our carbon
                footprint, and in general just leave earth in a better state
                than we found it?
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="5" xl="4">
            <h2>Smart Home</h2>
            <p>
              Quarantine has us realizing that the home is not as efficient and
              optimized as it could be. How can we incorporate software and
              hardware to create a more comprehensive experience at home?
            </p>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="12" sm="6" md="5" xl="4">
            <h2>Fit-Tech</h2>
            <p>
              Current fitness tech encourages people to stay indoors (Peloton,
              online classes), or simply tracks data and provides analytics. How
              can we revamp fitness with technology that makes exercise more
              interactive and engaging, giving people more excuses to enjoy the
              outdoors?
            </p>
          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="3" class="pa-0">
            <Cloud9
              type="dark"
              alt="Blue Cloud"
              style="position: relative; top: 0rem;"
            />
          </v-col>
          <v-col cols="3" class="pa-0">
            <Cloud9
              type="dark"
              style=" position: relative; top: -20rem; "
              class="d-none d-md-block"
            />
          </v-col>
        </v-row>
      </v-container>

      <Wave2 z-index="10" class="d-block mt-n16 mb-n1 pt-8" />
    </div>

    <div id="schedule" class="basicTextShadow">
      <v-container>
        <v-row>
          <v-col>
            <Tree style="position: relative; margin-top: -13rem" />
          </v-col>
          <v-col>
            <Tree style="position: relative; margin-top: -5rem; " />
          </v-col>
          <v-col cols="5">
            <Windmill style="margin-top: -28rem" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <h2
              class="display-1 text-center"
              style="color: white; font-weight: bold; "
            >
              Schedule
            </h2>
            <br />
            <div style="min-height: 20em">
              <div class="text-center" style="color: white">To Be Decided!</div>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <Tree style="position: relative;  top: -13rem;" />
          </v-col>
          <v-col>
            <Tree style="position: relative;  top: 1rem;" />
          </v-col>
          <v-col cols="5"></v-col>
        </v-row>
      </v-container>

      <Wave4 z-index="10" class="d-block mt-n16 mb-n1" />
    </div>

    <div id="FAQ" class="pb-16">
      <h2
        class="display-1 pt-15"
        style="color: black; text-align: center; font-weight: bold"
      >
        Frequently Asked Questions
      </h2>
      <v-container class="pb-16">
        <v-row>
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>What is BostonHacks?</h2>
              <p>
                BostonHacks is a 36-hour event where students from different
                backgrounds gather together to use technology to create cool
                projects. Come to BostonHacks to expand your knowledge and
                skills, make new friends, win prizes and network with recruiters
                from our corporate sponsors!
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>When and where is BostonHacks?</h2>
              <p>
                BostonHacks is a virtual 36-hour hackathon on November 14-15th,
                2020.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>Who can attend?</h2>
              <p>
                All students including undergraduate, graduate and high school
                students with any background, all across the world are welcome!
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>Do I need experience?</h2>
              <p>
                No experience is necessary. We will have plenty of mentors and
                resources available, along with several workshops targeted for
                beginners. Come learn and experience your first hackathon at
                BostonHacks!
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>Does it cost anything?</h2>
              <p>
                BostonHacks is 100% free. You don’t have to spend a dime!
                Unfortunately, we won’t be providing any travel reimbursements
                this year.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>Can we form teams?</h2>
              <p>
                Of course you can! We encourage people to work in teams of up to
                5 people. You may opt-in to team formation through our Slack
                Channel which will match you with an ideal team. You can work
                alone, but it won’t be the same.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2 style="font-size: 1.5rem; color:  black; font-weight: bold">
                Are there any rules?
              </h2>
              <p>
                We want to ensure a positive experience for all participants. We
                encourage you to read the Code of Conduct.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>What do I need to bring?</h2>
              <p>
                Remember it’s an overnight event! You should bring your laptop,
                phone, chargers.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>What if I have a different question?</h2>
              <p>
                We’re here for you! Shoot us an email at contact@bostonhacks.io,
                or a message on any of our social media platforms.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <River />

      <Wave3 z-index="10" class="d-block mt-n16 mb-n1" />
    </div>
  </main>
</template>

<script>
import Wave from "@/components/common/SVG/Wave";
import Wave2 from "@/components/common/SVG/Wave2";
import Wave3 from "@/components/common/SVG/Wave3";
import Wave4 from "@/components/common/SVG/Wave4";
import Cloud9 from "@/components/common/SVG/Cloud9";
import Tree from "@/components/common/SVG/Tree";
import Windmill from "@/components/common/SVG/Windmill";
import RedHotAirBalloon from "@/components/common/SVG/RedHotAirBalloon";
import GreenHotAirBalloon from "@/components/common/SVG/GreenHotAirBalloon";
import BostonHacksLogoTextShadowed from "@/components/common/SVG/BostonHacksLogoTextShadowed";
import River from "@/components/common/SVG/River";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    sponsor() {
      this.$router.push("/sponsor");
    }
  },
  components: {
    Wave: Wave,
    Wave2: Wave2,
    Wave3: Wave3,
    Wave4: Wave4,
    Cloud9: Cloud9,
    Tree: Tree,
    Windmill: Windmill,
    RedHotAirBalloon: RedHotAirBalloon,
    GreenHotAirBalloon: GreenHotAirBalloon,
    BostonHacksLogoTextShadowed: BostonHacksLogoTextShadowed,
    River: River
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

#home {
  background: #80d2ff;
}

#tracks {
  background: #aee2ff;
  color: #1e75af;
}

#schedule {
  background: #53d186;
}

#FAQ {
  background: #4cc07a;
}

.header-title {
  font-size: 2rem;
  text-align: center;
  color: white;
  font-weight: bold;
}

.qna h2 {
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
}
.qna p {
  font-size: 1.25rem;
  color: black;
  font-weight: normal;
}

@media only screen and (max-width: 600px) {
  .switchOnSmall {
    flex-direction: column-reverse;
  }
}

.mt-n20em {
  margin-top: -20em;
}

.basicTextShadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.sectionTitle {
  font-weight: bold;
  font-size: 2.5rem;
}
</style>
