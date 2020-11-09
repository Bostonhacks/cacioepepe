<!--
background wierd -> DONE
trees add -> 
not sure how to change the card design -> DONE
slack display wierd -- Jane -> No idea how to fix cause i can't look at it 
avatars for companies ->
change avatar for mentors (sample blank svg for now?) ->
-->
<template>
  <div class="white--text blue mt-n14">
    <CountdownTimer v-if="this.user.applicationStatus === 7" />
    <v-row justify="center">
      <v-col
        cols="12"
        sm="10"
        md="8"
        xl="6"
        v-if="this.user.applicationStatus != 7"
      >
        <Timeline :applicationStatus="this.user.applicationStatus" />
      </v-col>
    </v-row>
    <v-row
      class="flex-column align-center display-3 font-weight-bold  text-center"
    >
      <v-col cols="8">
        <v-row class="justify-center text-align-center">
          <div class="pb-10" v-if="this.user.applicationStatus != 7">
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
              soon.
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
    <lightgrasstop class="mb-n2" />
    <div id="grasstop">
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
      <v-row v-if="this.user.applicationStatus === 7" class="justify-center">
        <v-col cols="12" md="6">
          <MentorList />
        </v-col>
      </v-row>
    </div>
    <div class="white--text green">
      <lightgrassbottom />
      <v-row class="justify-center">
        <v-col cols="12" md="6">
          <CalendarTwoDay />
        </v-col>
      </v-row>
    </div>
    <div class="white--text green darken-1">
      <grassbottom />
      <v-row class="justify-center">
        <v-col cols="12" md="6">
          <SlackChannels />
        </v-col>
      </v-row>
      <River />
      <v-row class="justify-center">
        <v-col cols="12" md="6">
          <Challenges />
        </v-col>
      </v-row>
    </div>

    <div class="green darken-1 mb-n4">
      <footertop />
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/init";
import CountdownTimer from "@/components/hacker/CountdownTimer";
import Timeline from "@/components/common/Timeline/Timeline.svg.vue";
import Tree from "@/components/common/SVG/Tree.vue";
import grassbottom from "@/components/common/grassbottom.svg.vue";
import River from "@/components/common/SVG/River";
import footertop from "@/components/common/footertop.svg.vue";
import MentorList from "./MentorList.vue";
import SlackChannels from "./SlackChannels.vue";
import Challenges from "./Challenges.vue";
import lightgrasstop from "./lightgrasstop.svg";
import lightgrassbottom from "./lightgrassbottom.svg";
import CalendarTwoDay from "@/components/admin/CalendarTwoDay";
export default {
  name: "HackerUI",
  components: {
    River,
    CountdownTimer,
    Tree,
    grassbottom,
    footertop,
    MentorList,
    SlackChannels,
    Challenges,
    Timeline,
    lightgrasstop,
    lightgrassbottom,
    CalendarTwoDay
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
    console.log(this.user);
    this.user.applicationStatus = 7;
    if ((this.user == null) | (this.user.applicationStatus == null)) {
      this.pushApplication();
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    mentor() {
      return this.$store.state.mentor;
    }
  }
};
</script>

<style scoped>
.green-base {
  background: var(--v-green-base);
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
#grasstop {
  background-color: #53d186;
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
