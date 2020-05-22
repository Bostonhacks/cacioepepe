<script>
import { Line } from "vue-chartjs";

export default {
  name: "LineGraph",
  props: ["year"],
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ["2018", "2019", "2020", "2021"],
      datasets: [
        {
          backgroundColor: "#f87979",
          borderColor: "#f87979",
          radius: 5,
          borderWidth: 5,
          data: [1024, 1223, 1480, 1657],
          fill: false,
          showLines: false
        },
        {
          backgroundColor: "#f87979",
          borderColor: "#f87979",
          data: [null, null, null, null],
          fill: false,
          radius: 9
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Number of Applicants"
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted() {
    this.chartdata.datasets[1].data = [null, null, null, null];
    this.chartdata.datasets[1].data[
      this.year
    ] = this.chartdata.datasets[0].data[this.year];
    // this.chartdata.datasets[0].data[this.year] = null;
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
