<template>
  <div>
    <div id="home" z-index="100" class="mb-n1">
      <v-row justify="end" no-gutters>
        <a
          id="mlh-trust-badge"
          rel="noreferrer"
          href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2020-season&amp;utm_content=gray"
          target="_blank"
          class="pr-3"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-gray.svg"
            alt="Major League Hacking 2020 Hackathon Season"
            width="90rem"
          />
        </a>
      </v-row>
      <v-container>
        <v-row justify="space-between" class="mx-md-n8">
          <v-col cols="3">
            <img
              src="/assets/landingPage/cloud1.svg"
              alt="cloud1"
              width="275rem"
              style=" top: -5rem; position: relative"
              class="d-none d-sm-flex ml-sm-4"
            />
          </v-col>
          <v-col cols="3">
            <img
              src="/assets/landingPage/cloud1.svg"
              alt="cloud1"
              width="275rem"
              class="d-none d-md-flex"
              style="top: 10rem; position: relative"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row justify="center">
          <h2 class="header-title">
            We're turning 6.
            <br />And you're invited <br />to our virtual hackathon!
          </h2>
        </v-row>
        <v-row justify="center">
          <v-btn rounded depressed disabled @click="login()"
            >Login (Coming Soon)</v-btn
          >
        </v-row>
      </v-container>
      <v-container>
        <v-row
          class="mt-0 mt-md-n16 mb-n1 switchOnSmall"
          no-gutters
          justify="center"
          align="center"
        >
          <v-col cols="12" sm="4" class="mt-0">
            <object
              data="/assets/landingPage/feliz.svg"
              alt="pinata"
              class="mt-0 mt-sm-n16"
              style="max-height: 80vh"
              z-index="100"
            />
          </v-col>

          <v-col cols="10" offset-sm="0" sm="5">
            <div>
              <div>
                <h2
                  style="font-size: 1.5rem; text-align: center; color: white; font-weight: bold"
                >
                  Interested in Sponsoring?
                </h2>
                <h2
                  style="font-size: 1.25rem; text-align: center; color: white; font-weight: normal"
                >
                  We’d love to have you on board. Contact us at
                  <a href="mailto:sponsor@bostonhacks.io"
                    >sponsor@bostonhacks.io</a
                  >
                  or check out our sponsor document!
                </h2>
                <v-row justify="center">
                  <v-btn depressed rounded disabled @click="sponsor()"
                    >Learn More (Coming Soon)</v-btn
                  >
                </v-row>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <object
        data="/assets/landingPage/wave.svg"
        z-index="10"
        class="d-block mt-n16"
      ></object>
    </div>

    <div id="tracks" style="margin-top: 0; padding-top: 0;">
      <v-container>
        <v-row style="height: 0">
          <v-col cols="3">
            <img
              src="/assets/landingPage/cloud2.svg"
              alt="Blue Cloud"
              style="position: relative; top: -4rem;"
            />
          </v-col>
        </v-row>
        <v-row no-gutters justify="space-between" style="height: 0">
          <v-col cols="2" sm="4" lg="3" xl="2">
            <img
              src="/assets/landingPage/hotair1.svg"
              alt="Red Hot Air Balloon"
              style="top: 5rem; position: relative;"
            />
          </v-col>
          <v-col cols="3" lg="2">
            <img
              src="/assets/landingPage/hotair2.svg"
              alt="Green Hot Air Balloon"
              style="position: relative; top: -10rem"
            />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <h2
              style="color: black; text-align: center; font-weight: bold; font-size: 2rem; margin-bottom: 4em"
            >
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
          <v-col cols="3">
            <img
              src="/assets/landingPage/cloud2.svg"
              alt="cloud2"
              style="position: relative; top: 0rem; "
            />
          </v-col>
          <v-col cols="3">
            <img
              src="/assets/landingPage/cloud2.svg"
              alt="cloud2"
              style=" position: relative; top: -20rem; "
              class="d-none d-md-block"
            />
          </v-col>
        </v-row>
      </v-container>
      <object
        data="/assets/landingPage/wave2.svg"
        z-index="10"
        class="d-block mt-n16 mb-n1 pt-8"
      ></object>
    </div>

    <div id="schedule">
      <v-container>
        <v-row>
          <v-col>
            <img
              src="/assets/landingPage/tree.svg"
              alt="tree"
              style="position: relative; margin-top: -13rem"
            />
          </v-col>
          <v-col>
            <img
              src="/assets/landingPage/tree.svg"
              alt="tree"
              style="position: relative; margin-top: -5rem; "
            />
          </v-col>
          <v-col cols="5">
            <img
              src="/assets/landingPage/windmill.svg"
              alt="windmill"
              style="margin-top: -28rem"
            />
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
            <img
              src="/assets/landingPage/tree.svg"
              alt="tree"
              style="position: relative;  top: -13rem;"
              class="tree"
              id="t3"
            />
          </v-col>
          <v-col>
            <img
              src="/assets/landingPage/tree.svg"
              alt="tree"
              style="position: relative;  top: 1rem;"
              class="tree"
              id="t4"
            />
          </v-col>
          <v-col cols="5">
            <img
              src="/assets/landingPage/pond.svg"
              alt="tree"
              style=" margin-top: 2rem"
              id="pond"
            />
          </v-col>
        </v-row>
      </v-container>

      <object
        data="/assets/landingPage/wave3.svg"
        z-index="10"
        class="d-block mt-n16 mb-n1"
      ></object>
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
    </div>
  </div>
</template>

<script>
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
}

#schedule {
  background: #53d186;
}

#FAQ {
  background: #e6c8bc;
}

.header-title {
  font-size: 2rem;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-top: -3rem;
}

.qna {
  padding: 1.5rem;
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
</style>
