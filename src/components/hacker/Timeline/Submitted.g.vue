<template>
  <g>
    <g>
      <circle
        stroke-linecap="round"
        r="10"
        cx="10"
        cy="10"
        :fill="lightColor"
      />
      <circle
        stroke-linecap="round"
        r="10"
        cx="10"
        cy="10"
        :fill="lightColor"
        :stroke="darkColor"
        stroke-width="1.5"
        stroke-dasharray="62.42"
        stroke-dashoffset="62.42"
        opacity="0"
      >
        <animate
          dur="1s"
          begin="1s; mail.mouseenter; mail.click"
          attributeName="stroke-dashoffset"
          values="62.42;62.42;0"
          fill="freeze"
        />
        <animate
          dur="1s"
          begin="1s; mail.mouseenter; mail.click"
          attributeName="opacity"
          values="0;0;1"
          fill="freeze"
        />
      </circle>

      <path
        :stroke="darkColor"
        stroke-linecap="round"
        stroke-width="2"
        stroke-dasharray="76.01"
        stroke-dashoffset="76.01"
        fill="none"
        transform="scale(0.5), translate(8, 9)"
        d="M15.89,6.19,9,13.12a.45.45,0,0,1-.45.12L.84,11.15a.47.47,0,0,1-.08-.87L20.36.55a.47.47,0,0,1,.66.54L16.16,19a.46.46,0,0,1-.77.21l-3.73-3.65a.47.47,0,0,0-.72.08L8.63,19.19a.47.47,0,0,1-.86-.26l0-2.69"
      >
        <animate
          dur="1s"
          begin="1s; mail.mouseenter; mail.click"
          attributeName="stroke-dashoffset"
          values="76.01;76.01;0"
          fill="freeze"
        />
      </path>
      <circle
        id="mail"
        r="10"
        cx="10"
        cy="10"
        :fill="lightColor"
        :stroke="darkColor"
        stroke-width="1.5"
        opacity="0.001"
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
      return this.applicationStatus === allStages.SUBMITTED
        ? "goldenrod"
        : "#aaa";
    },
    lightColor() {
      return this.applicationStatus === allStages.SUBMITTED ? "gold" : "#eee";
    }
  }
};
</script>
