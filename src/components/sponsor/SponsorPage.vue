<template>
  <div>
    Sponsor
    <SponsorBenefitsTable />
    <PieChart />
  </div>
</template>

<script>
import SponsorBenefitsTable from "@/components/sponsor/SponsorBenefitsTable";
import PieChart from "@/components/common/PieChart";

export default {
  name: "SponsorPage",
  components: {
    PieChart,
    SponsorBenefitsTable
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
