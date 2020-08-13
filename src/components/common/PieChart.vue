<template>
  <canvas :id="id"></canvas>
</template>

<script>
import Chart from "chart.js";
export default {
  props: {
    id: {
      required: true
    },
    type: {
      default: "doughnut"
    },
    chartData: {},
    options: {},
    index: {
      default: 0
    }
  },
  mounted() {
    this.generateChart();
    this.toggleData();
  },
  watch: {
    index: function() {
      this.toggleData();
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
      }
    },
    toggleData() {
      for (let i = 0; i < this.chartData.datasets.length; i++) {
        if (i == this.index) {
          this.chart.data.datasets[i].hidden = false;
        } else {
          this.chart.data.datasets[i].hidden = true;
        }
      }
      this.chart.update();
    }
  }
};
</script>

<style scoped></style>
