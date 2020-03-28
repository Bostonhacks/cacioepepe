<template>
  <v-card>
    <SponsorUI />

    <v-container class="Companies">
      <v-subheader>Sponsor Companies </v-subheader>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Company1</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Company2</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Company3</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-container>

    <v-container>
      <v-subheader>Statistics</v-subheader>

      <div class="genderChart">
        <GenderChart />
        <MajorChart />
        <LineGraph />
      </div>
    </v-container>

    <v-container>
      <!-- 
        Somthing similar to museum view's gallary stuff

        -->
    </v-container>
  </v-card>

  <!-- 
  <v-container>
    <MajorChart />
  </v-container> -->
</template>

<script>
import GenderChart from "../components/GenderChart";
import MajorChart from "../components/MajorChart";
import LineGraph from "../components/LineGraph";
import SponsorUI from "../components/SponsorUI";

export default {
  components: {
    GenderChart,
    MajorChart,
    LineGraph,
    SponsorUI
  }
};
</script>

<style scoped></style>
