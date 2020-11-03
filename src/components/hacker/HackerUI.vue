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
          <div
            class="display-3 font-weight-bold"
            v-if="this.user.applicationStatus === 5"
          >
            <v-row class="pb-5 display-1 font-weight-bold">
              You are confirmed to attend BostonHacks! We will update details
              soon!
            </v-row>
          </div>
        </v-row>
        <v-row class="justify-center text-align-center">
          <div class="display-1" v-if="this.user.applicationStatus === 4">
            <v-form class="justify-center">
              <label>Confirmation</label>
              <v-radio-group v-model="statuscheck" class="pl-5">
                <v-radio
                  label="Yes, I'm going to BostonHacks!"
                  value="5"
                ></v-radio>
                <v-radio label="No, sorry I can't attend." value="6"></v-radio>
              </v-radio-group>
              <v-btn
                v-on:click="confirm()"
                rounded
                x-large
                class="red--text pa-8 display-1 font-weight-bold"
                style="text-transform: none !important"
              >
                Submit
              </v-btn>
            </v-form>
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
import { db } from "@/firebase/init";
import CountdownTimer from "./CountdownTimer";
import Timeline from "./Timeline/Timeline.svg.vue";
import Tree from "@/components/common/SVG/Tree.vue";
import grasstop from "./grasstop.svg.vue";
import grassbottom from "./grassbottom.svg.vue";
import footertop from "./footertop.svg.vue";
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
    footertop,
    MentorList,
    Schedule,
    SlackChannels,
    Challenges,
    Timeline
  },
  methods: {
    pushApplication() {
      this.$router.push("application");
    },
    async confirm() {
      const user = db.collection("users").doc(this.user.uid);
      if (this.statuscheck === "5") {
        await user.update({
          applicationStatus: 5
        });
      } else {
        await user.update({
          applicationStatus: 6
        });
      }
      this.$router.go();
    }
  },
  data: () => ({
    statuscheck: null,
    contentLoaded: false,
    null: "No result",
    searchM: "",
    searchC: "",
    searchItemM: [],
    searchItemC: [],
    mentorList: [
      { header: "Mentor List" },
      {
        value: "Twilio",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Twillio",
        description:
          "<span class='text--primary'>God of Everything</span> &mdash; Vue, Firebase"
      },
      { divider: true, inset: true },
      {
        value: "RStudio",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "RStudio",
        description:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },
      {
        value: "stickermule",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "stickermule",
        description:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      }
    ],
    challengeList: [
      { header: "Challenge List" },
      {
        value: "Twillio",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Twillio",
        description:
          "<span class='text--primary'>God of Everything</span> &mdash; Vue, Firebase"
      },
      { divider: true, inset: true },
      {
        value: "RStudio",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "RStudio",
        description:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },
      {
        value: "stickermule",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: "stickermule",
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
