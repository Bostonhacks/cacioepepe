<!-- [Started, Submitted, Rejected, Waitlisted, Accepted, Confirmed, Declined, Checked In] -->
<!-- Components:
  Application Timeline
  Mentors
  Slack Channel
  Schedule
  Event Timer
  Challenges
  Link to mentor dashboard
 -->

<!-- Started
  Application Timeline & Link to begin application
  -->

<!-- Submitted
  Application Timeline & say that they've submitted
   -->

<!-- Rejected
  sad face
   -->

<!-- Waitlisted
   -->

<!-- Accepted
   Application Timeline 
   text: you have been accepted
   Event Timer
   -->

<!-- Confirmed
   Application Timeline
   Slack Channel (not all)
   Event Timer
   -->

<!-- Declined
   text: see you next year?
    -->

<!-- Checked In
  EVERYTHING -->
<template>
  <div class="sky-background pt-16">
    <CountdownTimer class="py-10" />

    <Timeline :applicationStatus="this.user.applicationStatus" />
    <grasstop class="mb-n2" />
    <!-- <object data="/assets/hacker/grassTop.svg" class="mb-n2"></object> -->
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
      <!-- Mentors-->
      <MentorList />

      <!-- Schedule -->
      <v-row>
        <v-col>
          <v-container class="justify-center pl-lg-10">
            <v-card max-width="450" class="mx-auto">
              <v-toolbar color="brown" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Schedule</v-toolbar-title>

                <v-spacer></v-spacer>
              </v-toolbar>

              <v-list subheader>
                <v-subheader>Saturday</v-subheader>

                <v-list-item v-for="daily in satschedule" :key="daily.title">
                  <v-list-item-content>
                    <v-list-item-title v-text="daily.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list subheader>
                <v-subheader>Sunday</v-subheader>

                <v-list-item v-for="daily in sunschedule" :key="daily.title">
                  <v-list-item-content>
                    <v-list-item-title v-text="daily.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-container>
        </v-col>
        <!--Links-->
        <v-col>
          <v-row>
            <v-container class="justify-center">
              <v-card max-width="450" class="mx-auto">
                <v-toolbar color="orange" dark>
                  <v-app-bar-nav-icon></v-app-bar-nav-icon>

                  <v-toolbar-title>Slack Channels</v-toolbar-title>

                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-subtitle class="pd-10"
                      >Communicate with hundreds of hackers! Reach out to learn
                      about our workshops, update with
                      announcements!</v-list-item-subtitle
                    >
                    <v-card-actions>
                      <v-list>
                        <v-list-item>
                          <v-btn block color="secondary" dark
                            >Open #general Channel</v-btn
                          >
                        </v-list-item>
                        <v-list-item>
                          <v-btn block color="secondary" dark
                            >Open #sponsor Channel</v-btn
                          >
                        </v-list-item>
                        <v-list-item>
                          <v-btn block color="secondary" dark
                            >Open #workshops Channel</v-btn
                          >
                        </v-list-item>
                      </v-list>
                    </v-card-actions>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-container>
          </v-row>
          <!-- Challenges -->
          <v-row>
            <Challenges />
          </v-row>
        </v-col>
      </v-row>
    </div>

    <div class="grass-bottom">
      <!-- <object data="/assets/hacker/grassBottom.svg"></object> -->
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
import Timeline from "./Timeline.svg.vue";
import Tree from "@/components/common/SVG/Tree.vue";
import grasstop from "./grasstop.svg.vue";
import grassbottom from "./grassbottom.svg.vue";
import MentorList from "./MentorList.vue";
// import Challenges from "./Challenges.vue";

export default {
  name: "HackerUI",
  components: {
    CountdownTimer,
    Timeline,
    Tree,
    grasstop,
    grassbottom,
    MentorList
  },
  data: () => ({
    null: "No result",
    searchM: "",
    searchC: "",
    searchItemM: [],
    searchItemC: [],
    satschedule: [
      { title: "9:00 AM - Open Ceremony" },
      { title: "10:00 AM - React Workshop" },
      { title: "11:00 AM - Vue Workshop" },
      { title: "12:00 PM - Ghidra Workshop" }
    ],
    sunschedule: [
      { title: "9:00 AM - Open Ceremony" },
      { title: "10:00 AM - React Workshop" },
      { title: "11:00 AM - Vue Workshop" },
      { title: "12:00 PM - Ghidra Workshop" }
    ],
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
    ]
  }),
  mounted() {
    if (this.user === null) {
      this.$router.push("application");
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
