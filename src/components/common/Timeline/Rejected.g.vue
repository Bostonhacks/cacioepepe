<template>
  <g>
    <g transform="scale(0.235), translate(-.5,0)">
      <circle cx="43" cy="43" fill="#eee" r="43" />
      <g
        class="path"
        fill="none"
        stroke="#aaa"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="8"
        stroke-dasharray="45"
        stroke-dashoffset="45"
      >
        <path d="m28 28 31 31" />
        <path d="m59 28 -31 31" />
        <animate
          dur="1s"
          begin="1s; animateX.mouseenter; animateX.click"
          attributeName="stroke-dashoffset"
          values="45;45;0"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="0;0;1"
          dur="1s"
          begin="1s; animateX.mouseenter; animateX.click"
          fill="freeze"
        />
      </g>
      <circle
        cx="43"
        cy="43"
        fill="none"
        stroke-dasharray="255"
        stroke-dashoffset="255"
        r="40.5"
        stroke="#aaa"
        stroke-width="5"
        stroke-linecap="round"
        opacity="0"
      >
        <animate
          dur="1s"
          begin="1s; animateX.mouseenter; animateX.click"
          attributeName="stroke-dashoffset"
          values="255;255;0"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="0;0;1"
          dur="1s"
          begin="1s; animateX.mouseenter; animateX.click"
          fill="freeze"
        />
      </circle>
      <circle
        id="animateX"
        style="cursor: pointer"
        cx="43"
        cy="43"
        fill="red"
        r="43"
        opacity=".001"
      />
    </g>
  </g>
</template>

<script>
export default {};
</script>

<style></style>
