<template>
  <div>
    <v-row>
      <v-col>
        <StatisticsPolygon />
      </v-col>
    </v-row>
    <v-row justify="center" class="my-16">
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <ApplicantPlanet />
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    <v-row justify="center" class="my-16">
      <v-col cols="4">
        <AttendeePlanet />
      </v-col>
      <v-col cols="4"></v-col>
      <v-col cols="4">
        <ReviewPolygon />
      </v-col>
    </v-row>

    <ApplicantMap />

    <ApplicantChart />
    <!-- <SponsorBenefitsTable />
    <PieChart /> -->
  </div>
</template>

<script>
// import SponsorBenefitsTable from "@/components/sponsor/SponsorBenefitsTable";
// import PieChart from "@/components/common/PieChart";
import ApplicantPlanet from "@/components/sponsor/ApplicantPlanet.vue";
import ApplicantMap from "@/components/sponsor/ApplicantMap.vue";
import ApplicantChart from "@/components/sponsor/ApplicantChart.vue";
import AttendeePlanet from "@/components/sponsor/AttendeePlanet.vue";
import StatisticsPolygon from "@/components/sponsor/StatisticsPolygon.vue";
import ReviewPolygon from "@/components/sponsor/ReviewPolygon.vue";
export default {
  name: "SponsorPage",
  components: {
    StatisticsPolygon,
    // PieChart,
    // SponsorBenefitsTable,
    ApplicantPlanet,
    ApplicantMap,
    ApplicantChart,
    AttendeePlanet,
    ReviewPolygon
  },
  methods: {
    applicantRadius() {
      return (this.applicants[this.selectedYear] / 70).toString() + "%";
    },

    attendeeRadius() {
      return (this.attendees[this.selectedYear] / 30).toString() + "%";
    }
  },
  data() {
    return {
      renderYearSelect: false,
      years: ["2017", "2018", "2019"],
      selectedYear: 2,
      applicants: [1458, 1800, 2089],
      attendees: [485, 600, 510],
      universities: [31, 31, 28],
      states: [9, 9, 3],
      genderChartOptions: {
        legend: {
          labels: {
            boxWidth: 24,
            fontColor: "white",
            fontSize: 24
          }
        },
        tooltips: {
          enabled: true,
          callbacks: {
            label: function(tooltipItem, data) {
              return (
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ] + "%"
              );
            }
          }
        }
      },
      genderChartData: {
        labels: ["Male", "Female", "Other"],
        datasets: [
          {
            label: "2017",
            backgroundColor: ["#4bbc79", "#219E8C", "#E6C7BB"],
            borderWidth: 0,
            data: [71, 29, 0]
          },
          {
            label: "2018",
            backgroundColor: ["#4bbc79", "#219E8C", "#E6C7BB"],
            borderWidth: 0,
            data: [71, 29, 0]
          },
          {
            label: "2019",
            backgroundColor: ["#4bbc79", "#E6C7BB", "#219E8C"],
            borderWidth: 0,
            data: [54, 25, 21]
          }
        ]
      }
    };
  }
};
</script>

<style></style>
