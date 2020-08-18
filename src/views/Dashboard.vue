<template>
  <div class="white">
    <SponsorDashboard />
    <VolunteerDashboard />
    <MentorDashboard />
  </div>
</template>

<script>
import SponsorDashboard from "@/components/sponsor/SponsorDashboard";
import VolunteerDashboard from "@/components/volunteer/VolunteerDashboard";
import MentorDashboard from "@/components/mentor/MentorDashboard";

export default {
  name: "Dashboard",
  components: {
    SponsorDashboard,
    VolunteerDashboard,
    MentorDashboard
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
