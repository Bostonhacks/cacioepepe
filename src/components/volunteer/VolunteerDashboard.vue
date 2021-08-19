<!-- [Started, Submitted, Rejected, Waitlisted, Accepted, Confirmed, Declined, Checked In] -->
<template>
  <div>
    Volunteer Dashboard
    <CountdownTimer />
    <Schedule />
    <SlackComponent />
    <Timeline />
  </div>
</template>

<script>
import CountdownTimer from "@/components/common/CountdownTimer";
import Timeline from "@/components/common/Timeline/Timeline.svg.vue";
import Schedule from "@/components/common/Schedule.vue";
import SlackComponent from "@/components/common/SlackComponent.vue";

export default {
  name: "VolunteerDashboard",
  components: {
    CountdownTimer,
    Schedule,
    SlackComponent,
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

<style></style>
