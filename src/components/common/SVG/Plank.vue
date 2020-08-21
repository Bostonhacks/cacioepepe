<template>
  <g class="plank" :transform="transformValue">
    <rect
      :x="x"
      :y="y"
      :width="width"
      :height="height"
      :rx="rx"
      :fill="fill"
      stroke="#8c5018"
      stroke-width="7"
    />
  </g>
</template>

<script>
export default {
  props: ["x", "y", "width", "height", "rx", "fill", "transform", "t"],
  computed: {
    rotateValue: function() {
      return `rotate(-20 ${parseFloat(this.x) +
        parseFloat(this.width) / 2} ${parseFloat(this.y) +
        parseFloat(this.height) / 2})`;
    },
    translateValue: function() {
      const t = parseFloat(this.t) + 1;
      const translateX = `${-Math.pow(t * 1.4 - 9, 2) + 240}`;
      const translateY = `${t * 39}`;
      return `translate(${translateX} ${translateY})`;
    },
    transformValue: function() {
      return `${this.rotateValue} ${this.translateValue}`;
    }
  }
};
</script>

<style></style>
