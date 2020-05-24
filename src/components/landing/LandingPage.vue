<template>
  <v-layout class="d-inline">
    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col"></div>
          <div class="col-3 col-sm-2 col-lg-1">
            <a
              id="mlh-trust-badge"
              rel="noreferrer"
              href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2020-season&amp;utm_content=gray"
              target="_blank"
            >
              <img
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-gray.svg"
                alt="Major League Hacking 2020 Hackathon Season"
                contain
                height="100px"
                width="150px"
              />
            </a>
          </div>
        </div>
      </div>
    </header>

    <v-container>
      <v-row>
        <v-spacer></v-spacer>

        <v-col cols="6">
          <p class="display-1 indigo--text text--darken-4 font-weight-bold">
            We're turning 6.
            <br />And you're invited!
          </p>
          <p>Registration is now closed! Click the link below to log in.</p>
          <v-btn rounded color="deep-orange lighten-3" dark @click="login()"
            >Login</v-btn
          >
        </v-col>
        <v-col cols="5">
          <img src="@/assets/pinata.svg" contain height="200px" width="250px" />
        </v-col>

        <v-spacer></v-spacer>
      </v-row>

      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="7" justify="end">
          <p
            class="display-1 indigo--text text--darken-4 font-weight-bold mb-3 text-right"
          >
            Interested in Sponsoring?
          </p>
          <p
            class="display-1 indigo--text text--darken-4 font-weight-light headline text-right"
          >
            We’d love to have you on board. Contact us at sponsor@bostonhacks.io
            or check out our sponsor document!
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn rounded color="deep-orange lighten-3" dark @click="sponsor()"
          >Learn more</v-btn
        >
      </v-row>

      <div id="schedule">
        <v-row>
          <h1 class="indigo--text text--darken-4 font-weight-bold">
            Event Schedule
          </h1>
        </v-row>
        <v-row>
          <v-col cols="6">
            <p class="text--darken-4 font-weight-bold">
              7:00 AM Check In
              <br />8:00 AM Breakfast <br />9:00 AM Open Ceremony
            </p>
          </v-col>
          <v-col cols="6">
            <p class="text--darken-4 font-weight-bold">
              7:00 AM Check In
              <br />8:00 AM Breakfast <br />9:00 AM Open Ceremony
            </p>
          </v-col>
        </v-row>
      </div>

      <div id="tracks">
        <v-row>
          <h1 class="indigo--text text--darken-4 font-weight-bold">
            Tracks and Work­shops
          </h1>
          <v-row>
            <v-col cols="7" justify="start">
              <h2 class="display-1 red--text text--accent-2 font-weight-bold">
                Conservation for Society
              </h2>
              <p
                class="display-1 indigo--text text--darken-4 font-weight-light body-1"
              >
                Scientists continue to release research about the effects humans
                have on varying types of pollution. What can be done to
                facilitate research, increase awareness, lessen our carbon
                footprint, and in general just leave earth in a better state
                than we found it?
              </p>
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-col cols="6">
              <h2 class="display-1 red--text text--accent-2 font-weight-bold">
                Smart Home
              </h2>
              <p
                class="display-1 indigo--text text--darken-4 font-weight-light body-1"
              >
                Quarantine has us realizing that the home is not as efficient
                and optimized as it could be. How can we incorporate software
                and hardware to create a more comprehensive experience at home?
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6" justify="end">
              <h2 class="display-1 red--text text--accent-2 font-weight-bold">
                Fit-Tech
              </h2>
              <p
                class="display-1 indigo--text text--darken-4 font-weight-light body-1"
              >
                Current fitness tech encourages people to stay indoors (Peloton,
                online classes), or simply tracks data and provides analytics.
                How can we revamp fitness with technology that makes exercise
                more interactive and engaging, giving people more excuses to
                enjoy the outdoors?
              </p>
            </v-col>
          </v-row>
        </v-row>
      </div>
    </v-container>
  </v-layout>
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
</style>
