<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="10 0 995 483.7"
    class="optimizeTransform"
  >
    <defs>
      <path
        id="RiverLineTemplate"
        d="M2 369c20 7 32 41 53 47 20 7 48-14 70-9 21 4 37 36 59 39 21 3 45-23 67-23 21 0 44 27 66 25 21-2 38-33 60-38 20-5 49 16 70 9 20-7 30-41 50-50 21-9 52 9 72 2 21-7 34-40 55-46 22-5 49 18 70 15 22-3 42-33 63-34 23-1 44 27 65 29 23 2 49-22 69-17 22 5 35 38 55 46 20 9 53-6 71 6"
      />
    </defs>
    <g id="river">
      <path
        id="water"
        fill="#0098ff"
        d="M9 423c139 55 292 102 500 0 193-94 382-87 500 0l-1-355c-118-87-307-94-500 0-208 102-361 55-500 0z"
        transform="scale(1 .8) translate(0 50)"
      />
      <g
        fill="none"
        stroke-dasharray="300"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke="#aee2ff"
        stroke-width="7px"
      >
        <use
          href="#RiverLineTemplate"
          v-for="line in lines"
          :key="line.num"
          :transform="transform(line.num)"
        >
          <animate
            attributeName="stroke-dashoffset"
            :values="line.getOffset"
            :dur="speed"
            repeatCount="indefinite"
          />
        </use>
      </g>
      <g id="bridge">
        <Plank
          x="200"
          y="100"
          width="180"
          height="35"
          rx="10"
          fill="#683614"
          v-for="plank in planks"
          :key="plank.num"
          :t="plank.num"
        />
      </g>
    </g>
  </svg>
</template>

<script>
import Plank from "@/components/common/SVG/Plank";

export default {
  computed: {},
  methods: {
    transform: n => `translate(0 ${n * -52 - 40}) `
  },
  data() {
    return {
      speed: "15s",
      lines: Array.from({ length: 5 }, (x, i) => {
        const rand100 = Math.floor(Math.random() * 6) * 100;
        return {
          getOffset: `${600 + rand100}; ${0 + rand100}`,
          num: i
        };
      }),
      planks: Array.from({ length: 9 }, (x, i) => {
        return {
          num: i
        };
      })
    };
  },
  components: {
    Plank: Plank
  }
};
</script>

<style scoped>
/* #river {
  transform: scale(1 0.5);
} */

.optimizeTransform {
  transform: translateZ(0px);
}
</style>
