<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "MajorChart",
  extends: Doughnut,
  data: () => ({
    chartdata: {
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
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Major"
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
