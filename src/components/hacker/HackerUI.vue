<template>
  <div>
    <v-row class="mt-n16">
      <CountdownTimer />
    </v-row>
  </div>
</template>

<script>
import { db } from "@/firebase/init";
import CountdownTimer from "@/components/hacker/CountdownTimer";
export default {
  name: "HackerUI",
  components: {
    CountdownTimer
  },
  methods: {
    pushApplication() {
      this.$router.push("application");
    },
    async confirm() {
      const user = db.collection("users").doc(this.user.uid);
      console.log(user);
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

<style></style>
