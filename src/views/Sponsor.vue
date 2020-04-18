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
      <h1>Recap -</h1>
      <v-card class="mx-auto" max-width="300" tile>
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
          <LineChart :chartData="lineChartData" />
        </v-col>
        <v-col>
          <PieChart
            :year="yearIndex"
            :chartData="majorChartData"
            id="majorChart"
          />
          <PieChart
            :year="yearIndex"
            :chartData="genderChartData"
            id="genderChart"
          />
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
import LineChart from "../components/LineChart";
import SponsorUI from "../components/SponsorUI";
import GeneralSponsorTable from "../components/GeneralSponsorTable";
import RecruitingSponsorTable from "../components/RecruitingSponsorTable";
import BrandingSponsorTable from "../components/BrandingSponsorTable";
import PieChart from "../components/PieChart";

export default {
  components: {
    LineChart,
    PieChart,
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
      lineChartData: {
        labels: ["2016", "2017", "2018", "2019"],
        datasets: [
          {
            backgroundColor: "#f87979",
            borderColor: "#f87979",
            radius: 5,
            borderWidth: 5,
            data: [1024, 1223, 1480, 1657],
            fill: false,
            showLines: false
          }
        ]
      },
      majorChartData: {
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
          },
          {
            label: "Data Two",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [10, 90, 10]
          },
          {
            label: "Data Three",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [15, 15, 70]
          },
          {
            label: "Data Four",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [5, 5, 90]
          },
          {
            label: "Data Five",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [20, 70, 5]
          }
        ]
      },
      genderChartData: {
        labels: ["Male", "Female", "Other"],
        datasets: [
          {
            label: "2016",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [40, 20, 10]
          },
          {
            label: "2017",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [10, 90, 10]
          },
          {
            label: "2018",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [15, 15, 70]
          },
          {
            label: "2019",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [5, 5, 90]
          },
          {
            label: "2020",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [20, 70, 5]
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
