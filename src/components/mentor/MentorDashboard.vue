<!-- [Started, Submitted, Rejected, Waitlisted, Accepted, Confirmed, Declined, Checked In] -->
<template>
  <div>
    Mentor Dashboard
    <CountdownTimer />
    <Schedule />
    <SlackChannels />
    <Timeline />
  </div>
</template>

<script>
import CountdownTimer from "@/components/common/CountdownTimer";
import Timeline from "@/components/common/Timeline/Timeline.svg.vue";
import Schedule from "@/components/common/Schedule.vue";
import SlackChannels from "@/components/mentor/SlackChannels.vue";

export default {
  name: "MentorDashboard",
  components: {
    CountdownTimer,
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

<style></style>
