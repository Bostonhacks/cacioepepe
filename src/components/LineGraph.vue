<script>
import { Line } from "vue-chartjs";

export default {
  name: "LineGraph",
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ["2018", "2019", "2020", "2021"],
      datasets: [
        {
          label: "Applicants",
          backgroundColor: "#f87979",
          data: [1024, 1223, 1480, 1657]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
