<template>
  <v-card>
    <SponsorUI />

    <v-container class="Companies">
      <v-subheader>Sponsor Companies</v-subheader>

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
        <v-btn @click="forceRerender(`2016`)">2016</v-btn>
        <v-btn @click="forceRerender(`2017`)">2017</v-btn>
        <v-btn @click="forceRerender(`2018`)">2018</v-btn>
        <v-btn @click="forceRerender(`2019`)">2019</v-btn>
        <GenderChart v-if="renderComponent" :year="year"/>
        <MajorChart v-if="renderComponent" :year="year" :chart-data="testChartData" />
        <LineGraph v-if="renderComponent" :year="year" :chart-data="testChartData" />
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
  </v-container>-->
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
  },
  data() {
    return {
      year: "2019",
      renderComponent: true,
      updateData: {
        label: "Wooo data was updated",
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
        data: [50, 30, 20]
      },
      testChartData: {
        labels: [
          "Computer Science",
          "Electrical Engineering",
          "Computer Engineering"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [40, 20, 10]
          }
        ]
      }
    };
  },
  methods: {
    forceRerender(year) {
      this.year = year;
      this.renderComponent = false;

      this.$nextTick(() => {
        this.renderComponent = true;
      })
    },
  }
};
</script>

<style scoped></style>
