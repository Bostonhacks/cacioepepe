<template>
  <SponsorDashboard />
</template>

<script>
import SponsorDashboard from "@/components/sponsor/SponsorDashboard";
export default {
  name: "Dashboard",
  components: {
    SponsorDashboard
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
