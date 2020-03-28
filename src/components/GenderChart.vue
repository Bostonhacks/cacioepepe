<script>
import { Pie } from "vue-chartjs";

export default {
  name: "GenderChart",
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: ["Female", "Male", "Other"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
          data: [40, 20, 10]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Gender"
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
