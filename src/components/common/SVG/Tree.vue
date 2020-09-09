<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 611 537"
    class="optimizeTransformTree"
  >
    <defs>
      <path id="stump" d="M394 331h79v120h-79z" />
      <path
        id="tree"
        d="M257 362h354L503 221h59 l -85 -109 h45L432 0l-86 112h38l-79 109h56z"
        style="animation-timing-function: ease-in-out;"
      >
        <animate
          attributeName="d"
          values="M257.8 362h354L517.9 221h59l-74.1 -109h45L469 0l-97.2 112h38l-89.9 109h56z;M256.2 362h354L488.1 221h59l-95.9 -109h45L395 0l-74.8 112h38l-68.1 109h56z;M257.8 362h354L517.9 221h59l-74.1 -109h45L469 0l-97.2 112h38l-89.9 109h56z"
          dur="15s"
          repeatCount="indefinite"
          fill="freeze"
        />
      </path>
    </defs>
    <g
      transform="rotate(270 394 451) scale(0.35 0.65) skewY(-20) translate(735 685)"
      class="shadow"
    >
      <use xlink:href="#stump" />
      <use xlink:href="#tree" />
    </g>
    <g>
      <use xlink:href="#stump" class="stump" />
      <use xlink:href="#tree" class="leaves" />
    </g>
  </svg>
</template>

<script>
export default {};
</script>

<style>
.stump {
  fill: var(--v-brown-base);
}
.leaves {
  fill: var(--v-green-darken2);
}
.shadow {
  fill: var(--v-aqua-darken2);
}
.optimizeTransformTree {
  transform: translateZ(0px);
}
</style>
