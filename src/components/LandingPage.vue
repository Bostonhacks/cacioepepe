<template>
  <v-layout class="d-inline">
    <v-app-bar absolute color="indigo darken-4" dark>
      <v-tabs right>
        <v-tab>Schedule</v-tab>
        <v-tab>Tracks and Workshops</v-tab>
        <v-tab>FAQ</v-tab>
      </v-tabs>
    </v-app-bar>

    <header>
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 col-sm-4 col-lg-3 align-self-center">
            <img
              src="https://bostonhacks.io/images/logoColor.png"
              class="img-fluid"
              alt="Boston Hacks Logo"
              id="logoTop"
            />
          </div>
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
              />
            </a>
          </div>
        </div>
      </div>
    </header>

    <v-container>
      <v-row>
        <v-col cols="7">
          <p class="display-1 indigo--text text--darken-4 font-weight-bold">
            We're turning 5.
          </p>
          <p class="display-1 indigo--text text--darken-4 font-weight-bold">
            And you're invited!
          </p>
          <p>Registration is now closed! Click the link below to log in.</p>
          <v-btn rounded color="deep-orange lighten-3" dark>Login</v-btn>
        </v-col>
        <v-col cols="5">
          <img src="https://bostonhacks.io/images/pinata.svg" />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" justify="end">
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
          <v-btn rounded color="deep-orange lighten-3" dark>Learn more</v-btn>
        </v-col>
      </v-row>

      <v-col>
        <v-row>
          <div>
            <h1>Event Schedule</h1>
          </div>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-row cols="12" v-for="event in today" :key="event.time">
              <v-col cols="4">
                <h1>{{ event.time }}</h1>
              </v-col>
              <v-col cols="8">
                <h1>{{ event.event }}</h1>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6">
            <v-row cols="12" v-for="event in today" :key="event.time">
              <v-col cols="4">
                <h1>{{ event.time }}</h1>
              </v-col>
              <v-col cols="8">
                <h1>{{ event.event }}</h1>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-row>
        <h1 class="indigo--text text--darken-4 font-weight-bold">
          Tracks and Work­shops
        </h1>
        <v-row>
          <v-col cols="7" justify="start">
            <h2 class="display-1 red--text text--accent-2 font-weight-bold">
              Next Gen
            </h2>
            <p
              class="display-1 indigo--text text--darken-4 font-weight-light body-1"
            >
              School only prepares us for so much. In service of the next
              generation, think either about tools you wish you had to help you
              learn difficult concepts school or the skills you wish you had
              entering the real world.
            </p>
          </v-col>
          <v-col cols="5">
            <img
              class="col-md-6 offset-md-3 col-lg-6 offset-lg-0 d-flex justify-content-center"
              src="https://bostonhacks.io/images/balloons.svg"
            />
          </v-col>
        </v-row>

        <v-row justify="end">
          <v-col cols="6">
            <h2 class="display-1 red--text text--accent-2 font-weight-bold">
              Problem for the Ages
            </h2>
            <p
              class="display-1 indigo--text text--darken-4 font-weight-light body-1"
            >
              It's easy to think that some problems are too big to solve today.
              Instead of leaving them for the future, reflect on how we can
              build products that tackle issues that will be affecting us for
              generations to come. Examples include climate change, the refugee
              crisis, and racial & gender equity.
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" justify="end">
            <h2 class="display-1 red--text text--accent-2 font-weight-bold">
              Back to the Future
            </h2>
            <p
              class="display-1 indigo--text text--darken-4 font-weight-light body-1"
            >
              As you get older, doing ordinary things can seem like an
              impossible task. Help your future self out by developing tools
              that make accomplishing day-to-day tasks for elderly people easier
              than ever.
            </p>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "landingPage",
  data() {
    return {
      today: [
        {
          time: "1PM",
          event: "Lunch"
        },
        {
          time: "2PM",
          event: "Dinner"
        }
      ]
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style></style>
