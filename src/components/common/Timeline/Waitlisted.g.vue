<template>
  <g>
    <g transform="scale(0.04), translate(0,0)">
      <circle cx="250" cy="250" r="250" style="fill: #eee" />
      <rect
        id="minute"
        x="230"
        y="70"
        width="40"
        height="200"
        rx="20"
        ry="20"
        style="fill: #aaa"
        transform="rotate(0 250 250)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 250 250"
          to="360 250 250"
          dur="0.5s"
          repeatCount="2"
          begin="1s"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 250 250"
          to="-360 250 250"
          dur="0.5s"
          repeatCount="2"
          begin="clockBackground.click; clockBackground.mouseenter"
        />
      </rect>

      <rect
        id="hour"
        x="230"
        y="120"
        width="40"
        height="150"
        rx="20"
        ry="20"
        style="fill: #aaa"
        transform="rotate(90 250 250)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="90 250 250"
          to="450 250 250"
          dur="1s"
          repeatCount="1"
          begin="1s; clockBackground.click; clockBackground.mouseenter"
        />
      </rect>
      <circle
        cx="250"
        cy="250"
        r="22"
        style="fill: #eee"
        stroke="#aaa"
        stroke-width="15"
      />
      <circle
        cx="250"
        cy="250"
        r="235"
        fill="none"
        stroke="#aaa"
        stroke-width="30"
        stroke-dasharray="1477"
        stroke-dashoffset="1477"
        stroke-linecap="round"
        opacity="0"
      >
        <animate
          dur="1s"
          begin="1s; clockBackground.mouseenter; clockBackground.click"
          attributeName="stroke-dashoffset"
          values="1477;1477;0"
          fill="freeze"
        />
        <animate
          dur="1s"
          begin="1s; clockBackground.mouseenter; clockBackground.click"
          attributeName="opacity"
          values="0;0;1"
          fill="freeze"
        />
      </circle>
      <circle
        id="clockBackground"
        cx="250"
        cy="250"
        r="250"
        style="fill: red; cursor: pointer"
        opacity="0.001"
      />
    </g>
  </g>
</template>

<script>
export default {};
</script>
