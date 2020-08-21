<template>
  <main class="pt-70px darkBlue">
    <div class="darkBlue text--white white--text py-10">
      <SponsorDashboard />
      <VolunteerDashboard />
      <MentorDashboard />
    </div>
  </main>
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
