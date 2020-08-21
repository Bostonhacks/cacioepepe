<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="cloud 1"
    viewBox="0 0 300 85"
  >
    <g :style="cloudStyles">
      <path
        d="M47 62s-1-22 24-24 32 0 32 0 2-37 46-38 42 38 42 38h33s27 4 28 24"
        data-name="bumpyBois"
      />
      <path
        d="M13 61h269s18-1 18 11-18 12-18 12H13S0 82 0 72s13-11 13-11z"
        data-name="line"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    type: {
      validator: value => ["light", "dark"].indexOf(value) !== -1
    }
  },
  computed: {
    cloudStyles() {
      return {
        fill:
          this.type == "light"
            ? "var(--v-lightBlue-base)"
            : "var(--v-blue-base)"
      };
    }
  }
};
</script>

<style scoped>
.cloudGroup {
  fill: var(--v-lightBlue-base);
}
</style>
