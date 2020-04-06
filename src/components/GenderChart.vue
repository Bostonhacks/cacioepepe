<script>
import { Pie } from "vue-chartjs";

export default {
  name: "GenderChart",
  extends: Pie,
  props: ["year"],
  data: () => ({
    chartdata: {
      labels: ["Female", "Male", "Other"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
          data: [40, 50, 10]
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
    switch (this.year) {
      case "2019":
        this.chartdata.datasets[0].data = [40,50,10];
        break;
      case "2018":
        this.chartdata.datasets[0].data = [30,60,10];
        break;
      case "2017":
        this.chartdata.datasets[0].data = [70,5,25];
        break;
      case "2016":
        this.chartdata.datasets[0].data = [30,30,40];
        break;
      default:
    }
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
