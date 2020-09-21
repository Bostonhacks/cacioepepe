<template>
  <main class="blue pt-70px">
    <div class="text--white white--text pt-10" v-if="this.user.role == 'user'">
      <HackerUI />
    </div>
    <div
      class="darkBlue text--white white--text py-10"
      v-if="this.user.role == 'admin'"
    >
      <SponsorDashboard />
      <MentorDashboard />
      <VolunteerDashboard />
    </div>
    <div
      class="darkBlue text--white white--text py-10"
      v-if="this.user.role == 'mentor'"
    >
      <MentorDashboard />
    </div>
    <div
      class="darkBlue text--white white--text py-10"
      v-if="this.user.role == 'volunteer'"
    >
      <VolunteerDashboard />
    </div>
    <div
      class="darkBlue text--white white--text py-10"
      v-if="this.user.role == 'sponsor'"
    >
      <SponsorDashboard />
    </div>
  </main>
</template>

<script>
import SponsorDashboard from "@/components/sponsor/SponsorDashboard";
import VolunteerDashboard from "@/components/volunteer/VolunteerDashboard";
import MentorDashboard from "@/components/mentor/MentorDashboard";
import HackerUI from "@/components/hacker/HackerUI";

export default {
  name: "Dashboard",
  components: {
    SponsorDashboard,
    VolunteerDashboard,
    MentorDashboard,
    HackerUI
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
