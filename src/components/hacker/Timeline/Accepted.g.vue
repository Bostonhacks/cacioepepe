<template>
  <g>
    <g transform="scale(0.23), translate(-1.5,-1)">
      <circle cx="45" cy="45" fill="#eee" r="44" />
      <path
        stroke-linecap="round"
        stroke-miterlimit="10"
        fill="none"
        stroke="#aaa"
        stroke-width="8"
        d="m22 56 a 30 27 0 0 0 44 0"
        stroke-dasharray="48.5"
        stroke-dashoffset="48.5"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="48.5;48.5;0"
          dur="1s"
          begin="1s; animateHappy.mouseenter; animateHappy.click"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="0;0;1"
          dur="1s"
          begin="1s; animateHappy.mouseenter; animateHappy.click"
          fill="freeze"
        />
      </path>
      <g
        stroke-linecap="round"
        stroke-miterlimit="10"
        fill="none"
        stroke="#aaa"
        stroke-width="8"
        stroke-dasharray="30"
        stroke-dashoffset="30"
        opacity="0"
      >
        <path d="m55 20v20" />
        <path d="m35 20v20" />
        <animate
          attributeName="stroke-dashoffset"
          values="30;30;0"
          dur="1s"
          repeatCount="1"
          begin="1s; animateHappy.mouseenter; animateHappy.click"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="0;0;1"
          dur="1s"
          begin="1s; animateHappy.mouseenter; animateHappy.click"
          fill="freeze"
        />
      </g>
      <circle
        cx="45"
        cy="45"
        fill="none"
        r="41"
        stroke="#aaa"
        stroke-width="7"
        stroke-dasharray="258"
        stroke-dashoffset="264"
        opacity="0"
        stroke-linecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="258;258;0"
          dur="1s"
          repeatCount="1"
          begin="1s; animateHappy.mouseenter; animateHappy.click"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="0;0;1"
          dur="1s"
          begin="1s; animateHappy.mouseenter; animateHappy.click"
          fill="freeze"
        />
      </circle>
      <circle
        id="animateHappy"
        cx="45"
        cy="45"
        fill="red"
        r="45"
        opacity=".001"
        style="cursor: pointer"
      />
    </g>
  </g>
</template>

<script>
export default {};
</script>

<style></style>
