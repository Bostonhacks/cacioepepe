<template>
  <div>
    <v-row class="mt-n16">
      <CountdownTimer />
    </v-row>
    <v-row
      class="primary--text text-h4 font-weight-bold justify-center text-center"
      v-if="$vuetify.breakpoint.mobile"
    >
      APPLICATION STATUS: <br />
      {{ status[user.applicationStatus].toUpperCase() }}
    </v-row>
    <v-row class="mt-n16" v-else>
      <ApplicationStatus />
    </v-row>
    <v-row
      class="
        primary--text
        text-h4
        font-weight-bold
        justify-center
        text-center
        my-16
      "
      v-if="user.applicationStatus == 4"
    >
      CONFIRM YOUR ATTENDANCE
    </v-row>
    <v-row class="justify-center mb-16" v-if="user.applicationStatus == 4">
      <v-btn x-large color="primary" class="mx-2" @click="confirm()">
        Confirm
      </v-btn>
      <v-btn
        x-large
        color="primary"
        class="mx-4"
        @click="
          statuscheck = `6`;
          confirm();
        "
      >
        Decline
      </v-btn>
    </v-row>
    <v-row
      v-if="user.applicationStatus == 5"
      class="justify-center align-center mb-8"
      no-gutters
    >
      <v-col cols="12" lg="5" class="links-background">
        <div :class="$vuetify.breakpoint.mobile ? `links-mobile` : `links`">
          <v-row class="justify-space-around align-center">
            <v-col cols="6" lg="3" class="d-flex justify-center"
              ><DiscordButton
            /></v-col>
            <v-col cols="12" lg="6" class="text-h6 text-center left-line"
              >Have questions before the event? Feel free to join our Discord
              and interact with Mentors, Organizers, and other Hackers!</v-col
            >
          </v-row>
          <v-row class="mt-8 justify-space-around align-center">
            <v-col cols="6" lg="3" class="d-flex justify-center"
              ><BrambleButton
            /></v-col>
            <v-col cols="12" lg="6" class="text-h6 text-center left-line"
              >Join the opening ceremony, meet other Hackers, and speak with
              Mentors using Bramble, our online event platform</v-col
            >
          </v-row>
          <v-row class="mt-8 justify-space-around align-center">
            <v-col cols="6" lg="3" class="d-flex justify-center"
              ><DevpostButton
            /></v-col>
            <v-col cols="12" lg="6" class="text-h6 text-center left-line"
              >Once your project is finished, make sure to submit it to Devpost
              before the deadline</v-col
            >
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { db } from "@/firebase/init";
import CountdownTimer from "@/components/hacker/CountdownTimer";
import ApplicationStatus from "@/components/hacker/ApplicationStatus";
import DiscordButton from "@/components/hacker/DiscordButton";
import BrambleButton from "@/components/hacker/BrambleButton";
import DevpostButton from "@/components/hacker/DevpostButton";
export default {
  name: "HackerUI",
  components: {
    CountdownTimer,
    ApplicationStatus,
    DiscordButton,
    BrambleButton,
    DevpostButton
  },
  methods: {
    pushApplication() {
      this.$router.push("application");
    },
    async confirm() {
      const user = db.collection("users").doc(this.user.uid);
      if (this.statuscheck == "5") {
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
    ],
    statuscheck: "5"
  }),
  mounted() {
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
.links {
  background-color: transparent !important;
  color: #f7f7f7 !important;
  position: relative;
  padding: 10px 20px;
  top: -2rem;
  right: -2rem;
  background: linear-gradient(
    54.26deg,
    rgba(255, 220, 129, 0.68) -0.7%,
    rgba(239, 121, 135, 0.46) 70.5%
  );
  border-radius: 11px;
}

.links-mobile {
  background-color: transparent !important;
  color: #f7f7f7 !important;
  position: relative;
  background: linear-gradient(
    54.26deg,
    rgba(255, 220, 129, 0.68) -0.7%,
    rgba(239, 121, 135, 0.46) 70.5%
  );
  border-radius: 11px;
}

.links-background {
  margin-top: 5rem;
  display: inline-block;
  border-radius: 11px;
  background: linear-gradient(
    180deg,
    #ec602d 0%,
    rgba(236, 96, 45, 0.86) 50%,
    #ffda78 100%
  );
  overflow: visible;
}

.links-background-mobile {
  display: inline-block;
  border-radius: 11px;
  background: rgba(236, 96, 45, 0.86);
  overflow: visible;
}

.left-line {
  border-style: none none none solid;
}
</style>
