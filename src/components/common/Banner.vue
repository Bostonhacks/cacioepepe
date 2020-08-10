<template>
  <a
    :href="bannerLink.link"
    @click="() => bannerLink.action()"
    alt="navigation link to"
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
        d="M0 0s9 98 0 127c50-15 75-25 75-25l69 25c8-42 0-127 0-127z"
        transform="scale(1 .7)"
      />
      <path
        v-if="bannerLink.direction == 'left'"
        style="filter:url(#dropshadow)"
        :fill="bannerLink.color"
        d="M0 0s9 98 0 127c50-15 75-25 75-25l69 25c8-42 0-127 0-127z"
        transform="scale(1 .7)"
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
  </a>
</template>

<script>
export default {
  props: ["bannerLink"]
};
</script>

<style>
.banner {
  max-height: 100px;
  width: 100%;
  max-width: 120px;
}
</style>
