<!-- [Started, Submitted, Rejected, Waitlisted, Accepted, Confirmed, Declined, Checked In] -->
<template>
  <div class="white--text sky-background pt-16">
    <CountdownTimer class="py-10" v-if="this.user.applicationStatus == 7" />
    <!-- <Timeline :applicationStatus="this.user.applicationStatus" /> -->
    <v-row class=" flex-column align-center display-3 font-weight-bold">
      <v-col cols="8">
        <v-row class="justify-center">
          <div>
            Application Status: {{ status[this.user.applicationStatus] }}
          </div>
          <div class="display-1" v-if="this.user.applicationStatus == 0">
            To complete your application, click
            <button
              class="text-decoration-underline"
              v-on:click="pushApplication()"
            >
              here
            </button>
          </div>
          <div class="display-1" v-if="this.user.applicationStatus == 1">
            You're all set! We'll let you know as soon as there's an update to
            your application.
          </div>
        </v-row>
      </v-col>
    </v-row>
    <grasstop class="mb-n2" />
    <div class="grass-background">
      <v-row no-gutters class="justify-space-between">
        <v-col sm="4" md="2"> <Tree /> </v-col
        ><v-col sm="4" md="2">
          <Tree id="tree2" />
        </v-col>
        <v-col v-if="!this.$vuetify.breakpoint.mobile" sm="4" md="2">
          <Tree id="tree3" />
        </v-col>
      </v-row>
      <div v-if="this.user.applicationStatus == 7">
        <MentorList />
        <v-row>
          <v-col>
            <Schedule />
          </v-col>
          <v-col>
            <v-row>
              <SlackChannels />
            </v-row>
            <v-row>
              <Challenges />
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="grass-bottom">
      <grassbottom />
      <v-row class="justify-center">
        <h3 class="display-2 header text-center">
          <!-- Thank you to sponsors (?) -->
        </h3>
      </v-row>
    </div>
  </div>
</template>

<script>
// import { functions } from "@/firebase/init";
// import store from "@/store/index";
import CountdownTimer from "./CountdownTimer";
// import Timeline from "./Timeline.svg.vue";
import Tree from "@/components/common/SVG/Tree.vue";
import grasstop from "./grasstop.svg.vue";
import grassbottom from "./grassbottom.svg.vue";
import MentorList from "./MentorList.vue";
import Schedule from "./Schedule.vue";
import SlackChannels from "./SlackChannels.vue";
import Challenges from "./Challenges.vue";

export default {
  name: "HackerUI",
  components: {
    CountdownTimer,
    Tree,
    grasstop,
    grassbottom,
    MentorList,
    Schedule,
    SlackChannels,
    Challenges
  },
  methods: {
    pushApplication() {
      this.$router.push("application");
    }
  },
  data: () => ({
    null: "No result",
    searchM: "",
    searchC: "",
    searchItemM: [],
    searchItemC: [],
    mentorList: [
      { header: "Mentor List" },
      {
        value: "Rishab Bishab",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Rishab Bishab",
        description:
          "<span class='text--primary'>God of Everything</span> &mdash; Vue, Firebase"
      },
      { divider: true, inset: true },
      {
        value: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        description:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      }
    ],
    challengeList: [
      { header: "Challenge List" },
      {
        value: "Rishab Bishab",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Rishab Bishab",
        description:
          "<span class='text--primary'>God of Everything</span> &mdash; Vue, Firebase"
      },
      { divider: true, inset: true },
      {
        value: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        description:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      }
    ],
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
    if (this.user === null) {
      this.pushApplication();
    }
    this.user.applicationStatus = 0;
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
.sky-background {
  background-color: #80d2ff;
}
.grass-background {
  background-color: #53d186;
}
.grass-bottom {
  background-color: #4cbf7b;
}
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
