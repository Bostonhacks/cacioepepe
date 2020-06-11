<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to the Volunteer Dashboard
          </h1>
          <v-card flat tile>
            <SlackComponent :channels="channels" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import SlackComponent from "@/components/common/SlackComponent";
export default {
  name: "VolunteerDashboard",
  components: {
    SlackComponent
  },
  data() {
    return {
      channels: ["general", "volunteer"]
    };
  }
};
</script>
