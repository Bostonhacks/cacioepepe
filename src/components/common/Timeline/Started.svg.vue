<template>
  <g>
    <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="myClip">
          <circle cx="44" cy="44" r="0" opacity="0">
            <animate
              dur="1s"
              begin="1s; animateStar.mouseenter; animateStar.click"
              attributeName="r"
              values="0;0;30"
              fill="freeze"
            />
            <animate
              dur="1s"
              begin="1s; animateStar.mouseenter; animateStar.click"
              attributeName="opacity"
              values="0;0;1"
              fill="freeze"
            />
          </circle>
        </clipPath>
        <path
          id="star"
          d="m45.87 20.81 5.6 11.36a2.08 2.08 0 0 0 1.53 1.12l12.53 1.82a2 2 0 0 1 1.13 3.49l-9.07 8.84a2 2 0 0 0 -.59 1.82l2.14 12.48a2.05 2.05 0 0 1 -3 2.16l-11.14-5.9a2.08 2.08 0 0 0 -1.91 0l-11.22 5.9a2 2 0 0 1 -3-2.16l2.13-12.48a2.08 2.08 0 0 0 -.59-1.82l-9.03-8.84a2 2 0 0 1 1.14-3.49l12.53-1.82a2.08 2.08 0 0 0 1.54-1.12l5.6-11.36a2.05 2.05 0 0 1 3.68 0z"
          :fill="darkColor"
        />
      </defs>
    </svg>
    <g transform="scale(0.23), translate(-.5, -.5)">
      <circle cx="44" cy="44" :fill="lightColor" r="44" />

      <use clip-path="url(#myClip)" xlink:href="#star" />
      <circle
        cx="44"
        cy="44"
        fill="none"
        r="41"
        :stroke="darkColor"
        stroke-width="6"
        stroke-linecap="round"
        stroke-dasharray="258"
        stroke-dashoffset="258"
        opacity="0"
      >
        <animate
          dur="1s"
          begin="1s; animateStar.mouseenter; animateStar.click"
          attributeName="stroke-dashoffset"
          values="258;258;0"
          fill="freeze"
        />
        <animate
          dur="1s"
          begin="1s; animateStar.mouseenter; animateStar.click"
          attributeName="opacity"
          values="0;0;1"
          fill="freeze"
        />
      </circle>
      <circle
        id="animateStar"
        style="cursor: pointer"
        cx="44"
        cy="44"
        fill="red"
        opacity="0.001"
        r="44"
      />
    </g>
  </g>
</template>

<script>
const allStages = {
  STARTED: 0,
  SUBMITTED: 1,
  ACCEPTED: 2,
  CONFIRMED: 3,
  CHECKED_IN: 4,
  REJECTED: 5,
  WAITLISTED: 6,
  DECLINED: 7
};

export default {
  props: ["applicationStatus"],
  computed: {
    darkColor() {
      return this.applicationStatus === allStages.STARTED
        ? "goldenrod"
        : "#aaa";
    },
    lightColor() {
      return this.applicationStatus === allStages.STARTED ? "gold" : "#eee";
    }
  }
};
</script>
