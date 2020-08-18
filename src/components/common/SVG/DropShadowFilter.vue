<template>
  <filter id="dropShadowFilter" height="130%">
    <!-- stdDeviation is how much to blur -->
    <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
    <!-- how much to offset -->
    <feOffset dx="2" dy="2" result="offsetblur" />
    <feComponentTransfer>
      <!-- slope is the opacity of the shadow -->
      <feFuncA type="linear" slope="0.6" />
    </feComponentTransfer>
    <feMerge>
      <!-- this contains the offset blurred image -->
      <feMergeNode />
      <!-- this contains the element that the filter is applied to -->
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</template>

<script>
export default {};
</script>

<style></style>
