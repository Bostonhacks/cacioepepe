<template>
  <g>
    <g transform="scale(0.225), translate(-.5,-.5)">
      <circle cx="45" cy="45" fill="#eee" r="45" />
      <path
        d="m26.87 47.68 12.5 12.07 25.63-24.75"
        fill="none"
        stroke="#aaa"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        stroke-dasharray="70"
        stroke-dashoffset="70"
        opacity="0"
      >
        <animate
          dur="1s"
          begin="1s; animate.mouseenter; animate.click"
          attributeName="stroke-dashoffset"
          values="70;70;0"
          fill="freeze"
        />
        <animate
          dur="1s"
          begin="1s; animate.mouseenter; animate.click"
          attributeName="opacity"
          values="0;0;1"
          fill="freeze"
        />
      </path>
      <circle
        cx="45"
        cy="45"
        fill="none"
        r="42"
        stroke="#aaa"
        stroke-width="6"
        opacity="0"
        stroke-dashoffset="264"
        stroke-dasharray="264"
        stroke-linecap="round"
      >
        <animate
          dur="1s"
          begin="1s; animate.mouseenter; animate.click"
          attributeName="stroke-dashoffset"
          values="264;264;0"
          fill="freeze"
        />
        <animate
          dur="1s"
          begin="1s; animate.mouseenter; animate.click"
          attributeName="opacity"
          values="0;0;1"
          fill="freeze"
        />
      </circle>
      <circle
        id="animate"
        style="cursor: pointer"
        cx="45"
        cy="45"
        fill="red"
        r="45"
        opacity="0.001"
      />
    </g>
  </g>
</template>

<script>
export default {};
</script>
