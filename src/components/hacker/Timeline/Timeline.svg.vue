<template>
  <div id="app">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203 105">
      <rect
        fill="none"
        x="0.5"
        y="0.5"
        width="199"
        height="99"
        stroke="#aaa"
        stroke-width="0"
      />

      <line x1="12" y1="50" x2="188" y2="50" stroke="#aaa" stroke-width="4" />

      <path
        d="M12 50 L56 50 L75 15 L100 15"
        fill="none"
        stroke="#aaa"
        stroke-width="4"
        stroke-dasharray="108.82461547851562"
      />

      <path
        d="M12 50 L100 50 L122 15 L144 15"
        fill="none"
        stroke="#aaa"
        stroke-width="4"
        id="hotpink"
        stroke-dasharray="151.34005737304688"
      />
      <path
        d="M12 50 L56 50 L75 85 L100 85"
        fill="none"
        stroke="#aaa"
        stroke-width="4"
        id="cyan"
        stroke-dasharray="108.82461547851562"
      />
      <path
        d="M12 50 L56 50 L56 50 L56 50"
        fill="none"
        stroke="#aaa"
        stroke-width="4"
        id="orange"
      />

      <line
        x1="12"
        y1="50"
        x2="188"
        y2="50"
        stroke="#aaa"
        stroke-width="4"
        stroke-dasharray="176"
        :stroke-dashoffset="176 - stages[currentStage].column * 44"
        class="fancyLine"
      />

      <circle
        v-for="stage in stages"
        :cx="stage.column * 44 + 12"
        :cy="stage.vertical ? 50 + stage.vertical : 50"
        r="10"
        :fill="stage.color"
        :key="stage.color"
        @mouseenter="currentStage = stage.column"
      />

      <TextElements />
      <!-- <circle r="10" fill="red" cx="10" cy="10" /> -->

      <Started transform="translate(2, 40)" />
      <Confirmed transform="translate(134, 40)" />
      <Declined transform="translate(134, 5)" />
      <Accepted transform="translate(90,40)" />
      <Rejected transform="translate(90,5)" />
      <CheckedIn transform="translate(178,40)" />
      <Waitlisted transform="translate(90, 75)" />
      <Submitted transform="translate(46,40)" />
    </svg>
  </div>
</template>

<script>
import Started from "./Started.svg.vue";
import Confirmed from "./Confirmed.g";
import Declined from "./Declined.g";
import TextElements from "./TextElements.g";
import Accepted from "./Accepted.g";
import Rejected from "./Rejected.g";
import CheckedIn from "./CheckedIn.g";
import Waitlisted from "./Waitlisted.g";
import Submitted from "./Submitted.g";

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
  data() {
    return {
      message: "Welcome, Boo!",
      currentStage: allStages.STARTED,
      stages: [
        {
          title: "Started",
          color: "lightsalmon",
          column: 0,
          path: "M12 50 L12 50 L12 50 L12 50",
          length: 0,
          component: Started
        },
        {
          title: "Submitted",
          color: "lightgreen",
          column: 1,
          path: "M12 50 L56 50 L56 50 L56 50",
          length: 44
        },
        {
          title: "Accepted",
          color: "lightblue",
          column: 2,
          path: "M12 50 L100 50 L100 50 L100 50",
          length: 88
        },
        {
          title: "Confirmed",
          color: "lightpink",
          column: 3
        },
        {
          title: "Checked In",
          color: "plum",
          column: 4
        },
        {
          title: "Rejected",
          color: "green",
          column: 2,
          vertical: -35
        },
        {
          title: "Waitlisted",
          color: "blue",
          column: 2,
          vertical: 35
        },
        {
          title: "Declined",
          color: "red",
          column: 3,
          vertical: -35
        }
      ]
    };
  },
  methods: {
    doSomething() {
      alert("Hello!");
    }
  },
  props: ["applicationStatus"],
  components: {
    TextElements,
    Started,
    Confirmed,
    Declined,
    Accepted,
    Rejected,
    CheckedIn,
    Waitlisted,
    Submitted
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
}

.fancyLine {
  transition: 0.2s linear;
}
</style>
