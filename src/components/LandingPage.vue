<template>
  <v-layout align-center justify-center>
    <v-app-bar absolute color="indigo darken-4" dark>
      <v-tabs right>
        <v-tab>Schedule</v-tab>
        <v-tab>Tracks and Workshops</v-tab>
        <v-tab>FAQ</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-container>
      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 indigo--text text--darken-4 font-weight-bold mb-3"
          >
            We're turning 5.
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h3
            class="display-1 red--text text--accent-2 font-weight-medium mb-3"
          >
            And you're invited!
          </h3>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <v-btn rounded color="deep-orange lighten-3" dark>Login</v-btn>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 indigo--text text--darken-4 font-weight-bold mb-3  text-right"
          >
            Interested in Sponsoring?
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 indigo--text text--darken-4 font-weight-light headline text-right"
          >
            We’d love to have you on board. Contact us at sponsor@bostonhacks.io
            or check out our sponsor document!
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <v-btn rounded color="deep-orange lighten-3" dark>Learn more</v-btn>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 indigo--text text--darken-4 font-weight-bold mb-3  text-left"
          >
            Tracks and Work­shops
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 red--text text--accent-2 font-weight-bold mb-3  text-left"
          >
            Next Gen
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 indigo--text text--darken-4 font-weight-light body-1  text-left"
          >
            School only prepares us for so much. In service of the next
            generation, think either about tools you wish you had to help you
            learn difficult concepts school or the skills you wish you had
            entering the real world.
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 red--text text--accent-2 font-weight-bold mb-3  text-right"
          >
            Problem for the Ages
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 indigo--text text--darken-4 font-weight-light body-1  text-right"
          >
            It's easy to think that some problems are too big to solve today.
            Instead of leaving them for the future, reflect on how we can build
            products that tackle issues that will be affecting us for
            generations to come. Examples include climate change, the refugee
            crisis, and racial & gender equity.
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 red--text text--accent-2 font-weight-bold mb-3  text-left"
          >
            Back to the Future
          </h2>
        </v-flex>
      </v-layout>

      <v-layout text-center wrap>
        <v-flex mb-4>
          <h2
            class="display-1 indigo--text text--darken-4 font-weight-light body-1 text-left"
          >
            As you get older, doing ordinary things can seem like an impossible
            task. Help your future self out by developing tools that make
            accomplishing day-to-day tasks for elderly people easier than ever.
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "landingPage",
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style></style>
