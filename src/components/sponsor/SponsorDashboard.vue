<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to the Sponsor Dashboard
          </h1>
          <v-card flat tile>
            <v-card-text>
              <HackerTable :data="currentData" />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import HackerTable from "@/components/common/HackerTable";
import { functions } from "@/firebase/init";
export default {
  name: "SponsorDashboard",
  components: {
    HackerTable
  },
  data() {
    return {
      data: null,
      currentData: null,
      itemStatus: ["Accepted", "Confirmed", "Checked In"],
      statusList: [
        "Started",
        "Submitted",
        "Rejected",
        "Waitlisted",
        "Accepted",
        "Confirmed",
        "Declined",
        "Checked In"
      ]
    };
  },

  async mounted() {
    var out = await functions.httpsCallable("retrieveAllApplications")({});
    this.data = out.data;
    this.currentData = this.data.filter(item =>
      this.itemStatus.includes(this.statusList[item.status])
    );
  }
};
</script>
