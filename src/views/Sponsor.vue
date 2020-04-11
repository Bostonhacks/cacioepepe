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
      <h1>
        Recap -
        <v-btn @click="toggleYearSelect()" elevation="0">
          <h1>{{years[yearIndex]}}</h1>
        </v-btn>
      </h1>
      <v-card class="mx-auto" max-width="300" tile v-if="renderYearSelect">
        <v-list shaped>
          <v-subheader>Select a Year</v-subheader>
          <v-list-item-group v-model="yearIndex" color="primary">
            <v-list-item v-for="(year, i) in years" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="year"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <v-divider></v-divider>

      <v-row>
        <v-col>
          <GenderChart v-if="renderComponent" :year="years[yearIndex]" />
        </v-col>
        <v-col>
          <MajorChart v-if="renderComponent" :year="years[yearIndex]" :chart-data="testChartData" />
        </v-col>
        <v-col>
          <LineGraph v-if="renderComponent" :year="yearIndex" :chart-data="testChartData" />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <!-- sponsorTables -->
      <h2>Sponsor Benefits</h2>
      <GeneralSponsorTable />
      <RecruitingSponsorTable />
      <BrandingSponsorTable />
    </v-container>
  </v-card>
</template>

<script>
import GenderChart from "../components/GenderChart";
import MajorChart from "../components/MajorChart";
import LineGraph from "../components/LineGraph";
import SponsorUI from "../components/SponsorUI";
import GeneralSponsorTable from "../components/GeneralSponsorTable";
import RecruitingSponsorTable from "../components/RecruitingSponsorTable";
import BrandingSponsorTable from "../components/BrandingSponsorTable";

export default {
  components: {
    GenderChart,
    MajorChart,
    LineGraph,
    SponsorUI,
    GeneralSponsorTable,
    RecruitingSponsorTable,
    BrandingSponsorTable
  },
  watch: {
    yearIndex: {
      handler: function() {
        this.forceRerender();
      },
      deep: true
    }
  },
  data() {
    return {
      yearIndex: "3",
      years: ["2016", "2017", "2018", "2019"],
      renderYearSelect: false,
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
      this.renderComponent = false;

      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
    toggleYearSelect() {
      this.renderYearSelect = !this.renderYearSelect;
    }
  }
};
</script>

<style scoped></style>
