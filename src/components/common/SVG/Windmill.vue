<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 674 831"
  >
    <defs>
      <path id="rotor" d="M476,250 c0,-80 200,-20 190,0z" />
      <g id="windmill">
        <path d="M460 750h36l-8-500h-22z" />
        <g id="rotors" transform="rotate(50 486 250)">
          <use xlink:href="#rotor" />
          <use xlink:href="#rotor" transform="rotate(90 476 250)" />
          <use xlink:href="#rotor" transform="rotate(180 476 250)" />
          <use xlink:href="#rotor" transform="rotate(270 476 250)" />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            begin="0s"
            dur="15s"
            repeatCount="indefinite"
            type="rotate"
            values="360 476 250; 0 476 250"
          />
        </g>
        <circle cx="476" cy="250" r="20" />
      </g>
    </defs>
    <use
      xlink:href="#windmill"
      fill="#306e6e"
      transform="rotate(-90 469 752) translate(310 385) scale(0.35 0.65) skewY(-20) "
    />
    <use xlink:href="#windmill" fill="#e5d7d1" stroke="#707070" />
  </svg>
</template>

<script>
export default {};
</script>

<style></style>
