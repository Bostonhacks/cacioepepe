<template>
  <v-container>
    <v-row>
      <Status class="test" />
      <Team class="test2" />
    </v-row>
  </v-container>
</template>

<script>
import Team from "@/components/hacker/Team";
import Status from "@/components/hacker/Status";
export default {
  name: "Hacker",
  components: {
    Team,
    Status
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