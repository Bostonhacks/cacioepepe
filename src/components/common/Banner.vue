<template>
  <router-link
    :to="{ path: bannerLink.path, hash: bannerLink.hash }"
    :alt="bannerLink.text"
    style="text-decoration: none;"
  >
    <svg
      class="banner"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 152 128"
    >
      <filter id="dropshadow" height="130%">
        <!-- stdDeviation is how much to blur -->
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <!-- how much to offset -->
        <feOffset dx="1" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <!-- slope is the opacity of the shadow -->
          <feFuncA type="linear" slope="0.5" />
        </feComponentTransfer>
        <feMerge>
          <!-- this contains the offset blurred image -->
          <feMergeNode />
          <!-- this contains the element that the filter is applied to -->
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <path
        v-if="bannerLink.direction == 'right'"
        style="filter:url(#dropshadow)"
        :fill="bannerLink.color"
        d="M0 0s9 68.6 0 88.9c50 -10.5 75 -17.5 75 -17.5l69 17.5c8 -29.4 0 -88.9 0 -88.9z"
      />
      <path
        v-if="bannerLink.direction == 'left'"
        style="filter:url(#dropshadow)"
        :fill="bannerLink.color"
        d="M151 0s-9 68.6 0 88.9c-50 -10.5 -75 -17.5 -75 -17.5l-69 17.5c-8 -29.4 0 -88.9 0 -88.9z"
      />
      <text
        class="textSVG"
        style="filter:url(#dropshadow); font-family: 'Roboto', Arial; font-weight: 900; font-size: 1.5em"
        x="74"
        y="34"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="white"
      >
        {{ bannerLink.text }}
      </text>
    </svg>
  </router-link>
</template>

<script>
export default {
  props: { bannerLink: Object }
};
</script>

<style>
.banner {
  max-height: 100px;
  width: 100%;
  max-width: 120px;
}
</style>
