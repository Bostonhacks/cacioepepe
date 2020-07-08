<template>
  <canvas id="linechart" :width="width" :height="height"></canvas>
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
      default: "line"
    },
    chartData: {},

    options: {
      display: true
    },
    year: {
      default: "4"
    }
  },
  mounted() {
    this.generateChart();
  },

  methods: {
    generateChart() {
      if (this.chart == null) {
        const ctx = document.getElementById("linechart").getContext("2d");
        this.chart = new Chart(ctx, {
          type: this.type,
          data: this.chartData,
          options: this.options
        });
      }
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
