<template>
  <v-container>
    <v-row>
      <Status class="test" />
      <Team class="test2" />
      <Challenges />
    </v-row>
  </v-container>
</template>

<script>
// Countdown Timer, QR Code, Company Challenges & Prizes, Ping a (available) Mentor
import Team from "@/components/hacker/Team";
import Status from "@/components/hacker/Status";
import Challenges from "@/components/hacker/Challenges";
export default {
  name: "Hacker",
  components: {
    Team,
    Status,
    Challenges
  }
};
</script>

<style>
.test {
  background: red;
}
.test2 {
  background: blue;
}
</style>
