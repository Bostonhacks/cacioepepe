<template>
  <v-container>
    <SponsorUI />

    <v-container>
      <v-subheader>Sponsor Companies</v-subheader>
      <v-list-item two-line v-for="(company, i) in companyData" :key="i">
        <v-list-item-content>
          <v-list-item-title>{{ company.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-container>

    <v-container>
      <v-row>
        <h1 class="display-1 pb-10">
          Recap
          <v-btn
            class="display-1"
            text
            @click="toggleYearSelect = !toggleYearSelect"
            >{{ years[yearIndex] }}</v-btn
          >
        </h1>
      </v-row>
      <v-card v-if="toggleYearSelect">
        <v-subheader>Select a Year</v-subheader>
        <v-list-item-group v-model="yearIndex" color="primary">
          <v-list-item v-for="(year, i) in years" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{ year }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-card>

      <v-row>
        <v-col class="col-4">
          <LineChart :chartData="lineChartData" />
        </v-col>
        <v-col class="col-4">
          <PieChart
            :year="yearIndex"
            :chartData="majorChartData"
            id="majorChart"
          />
        </v-col>
        <v-col class="col-4">
          <PieChart
            :year="yearIndex"
            :chartData="genderChartData"
            id="genderChart"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <h2>Sponsor Benefits</h2>
      <GeneralSponsorTable />
      <RecruitingSponsorTable />
      <BrandingSponsorTable />
    </v-container>
  </v-container>
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
        if (this.yearIndex === undefined) {
          this.yearIndex = this.lastYearIndex;
        } else {
          this.lastYearIndex = this.yearIndex;
        }
      },
      deep: true
    }
  },
  data() {
    return {
      toggleYearSelect: false,
      companyData: [
        {
          name: "Company 1",
          image: null
        },
        {
          name: "Company 2",
          image: null
        },
        {
          name: "Company 3",
          image: null
        },
        {
          name: "Company 4",
          image: null
        }
      ],
      yearIndex: "3",
      lastYearIndex: "3",
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
