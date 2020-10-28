<!-- [Started, Submitted, Rejected, Waitlisted, Accepted, Confirmed, Declined, Checked In] -->
<template>
  <div class="white--text blue mt-n14">
    <CountdownTimer class="py-10" v-if="this.user.applicationStatus === 7" />
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" xl="6">
        <Timeline :applicationStatus="this.user.applicationStatus" />
      </v-col>
    </v-row>
    <v-row
      class="flex-column align-center display-3 font-weight-bold  text-center"
    >
      <v-col cols="8">
        <v-row class="justify-center text-align-center">
          <div class="pb-10" v-if="this.user.applicationStatus">
            Application Status: {{ status[this.user.applicationStatus] }}
          </div>
          <div
            class="display-3 font-weight-bold"
            v-if="this.user.applicationStatus === 0"
          >
            <v-row class="pb-5">
              Your application is not complete!
            </v-row>
            <v-row class="justify-center pt-5">
              <v-btn
                rounded
                x-large
                class="red--text pa-8 display-1 font-weight-bold"
                style="text-transform: none !important"
                v-on:click="pushApplication()"
              >
                Go to Application
              </v-btn>
            </v-row>
          </div>
          <div class="display-1" v-if="this.user.applicationStatus === 1">
            You're all set! We'll let you know as soon as there's an update to
            your application.
          </div>
        </v-row>
      </v-col>
    </v-row>
    <grasstop class="mb-n2" />
    <div class="green">
      <v-row no-gutters class="justify-space-between">
        <v-col sm="4" md="2">
          <Tree />
        </v-col>
        <v-col sm="4" md="2">
          <Tree id="tree2" />
        </v-col>
        <v-col v-if="!this.$vuetify.breakpoint.mobile" sm="4" md="2">
          <Tree id="tree3" />
        </v-col>
      </v-row>
      <div v-if="this.user.applicationStatus === 7">
        <v-row>
          <v-col>
            <Schedule />
          </v-col>
          <v-col>
            <SlackChannels />
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="green darken-1">
      <grassbottom />
      <v-row class="justify-center">
        <h3 class="display-2 header text-center">
          <!-- Thank you to sponsors (?) -->
        </h3>
      </v-row>
    </div>
    <div class="green darken-1 mb-n4">
      <footertop />
    </div>
  </div>
</template>

<script>
import CountdownTimer from "@/components/common/CountdownTimer";
import Timeline from "@/components/common/Timeline/Timeline.svg.vue";
import Tree from "@/components/common/SVG/Tree.vue";
import grasstop from "@/components/common/grasstop.svg.vue";
import grassbottom from "@/components/common/grassbottom.svg.vue";
import footertop from "@/components/common/footertop.svg.vue";
import Schedule from "@/components/common/Schedule.vue";
import SlackChannels from "./SlackChannels.vue";

export default {
  name: "MentorDashboard",
  components: {
    CountdownTimer,
    Tree,
    grasstop,
    grassbottom,
    footertop,
    Schedule,
    SlackChannels,
    Timeline
  },
  methods: {
    pushApplication() {
      this.$router.push("application");
    }
  },
  data: () => ({
    contentLoaded: false,
    null: "No result",
    searchM: "",
    searchC: "",
    searchItemM: [],
    searchItemC: [],
    status: [
      "Started",
      "Submitted",
      "Rejected",
      "Waitlisted",
      "Accepted",
      "Confirmed",
      "Declined",
      "Checked In"
    ]
  }),
  mounted() {
    if ((this.user == null) | (this.user.applicationStatus == null)) {
      this.pushApplication();
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
#tree1 {
  position: relative;
  top: -10rem;
}
#tree2 {
  position: relative;
  top: -12rem;
  left: -30rem;
}
#tree3 {
  position: relative;
  top: -15rem;
  left: -10rem;
}
@media only screen and (max-width: 900px) {
  #tree3 {
    left: -5rem;
  }
  #tree1 {
    top: -5rem;
  }
  #tree2 {
    left: 0rem;
    top: -7rem;
  }
}
</style>
