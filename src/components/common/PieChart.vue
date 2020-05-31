<template>
  <canvas :id="id" :width="width" :height="height"></canvas>
</template>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

<script>
import Chart from "chart.js";
export default {
  props: {
    width: {
      default: 400
    },
    height: {
      default: 400
    },
    type: {
      default: "doughnut"
    },
    chartData: {},

    options: {
      display: true,
      required: false
    },
    year: {
      default: "4",
      required: false
    },
    id: {
      required: true
    }
  },
  mounted() {
    this.generateChart();
  },
  watch: {
    year: {
      handler: function() {
        this.toggleYearData();
      },
      deep: true
    }
  },

  methods: {
    generateChart() {
      if (this.chart == null) {
        const ctx = document.getElementById(this.id).getContext("2d");
        this.chart = new Chart(ctx, {
          type: this.type,
          data: this.chartData,
          options: this.options
        });
        if (this.chart.data.datasets.length > 1) {
          this.toggleYearData();
        }
      }
    },
    toggleYearData() {
      for (let i = 0; i < 5; i++) {
        if (i == this.year) {
          this.chart.data.datasets[i].hidden = false;
        } else {
          this.chart.data.datasets[i].hidden = true;
        }
      }
      this.chart.update();
    }
  },
  data() {
    return {
      chart: null
    };
  }
};
</script>

<style scoped></style>
