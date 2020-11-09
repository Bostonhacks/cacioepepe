<template>
  <v-container id="container">
    <v-row>
      <p class="text-center display-2 white--text font-weight-bold">
        Good Title
      </p>
    </v-row>
    <v-row class="justify-center align-center" id="timer">
      <v-col cols="1" id="hours" class="ma-8">
        <v-row
          ><p class="text-center display-4 white--text font-weight-bold">
            {{ hours }}
          </p></v-row
        >
        <v-row
          ><p class="text-center white--text font-weight-bold">
            Hours
          </p></v-row
        >
      </v-col>
      <v-col cols="1" id="minutes" class="ma-8">
        <v-row
          ><p class="text-center display-4 white--text font-weight-bold">
            {{ minutes }}
          </p></v-row
        >
        <v-row
          ><p class="text-center white--text font-weight-bold">
            Minutes
          </p></v-row
        >
      </v-col>
      <v-col cols="1" id="seconds" class="ma-8">
        <v-row
          ><p class="text-center display-4 white--text font-weight-bold">
            {{ seconds }}
          </p></v-row
        >
        <v-row
          ><p class="text-center white--text font-weight-bold">
            Seconds
          </p></v-row
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      hours: "",
      minutes: "",
      seconds: ""
    };
  },
  mounted() {
    let countDownDate = new Date("Nov 15, 2020, 14:30:00").getTime();
    this.timerCount(countDownDate);
    this.interval = setInterval(() => {
      this.timerCount(countDownDate);
    }, 1000);
  },
  methods: {
    prefixZero(num) {
      return String(num).padStart(2, "0");
    },
    timerCount(countDownDate) {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      this.hours = this.prefixZero(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      this.minutes = this.prefixZero(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      this.seconds = this.prefixZero(
        Math.floor((distance % (1000 * 60)) / 1000)
      );
    }
  }
};
</script>

<style>
#container p {
  width: 100%;
}
</style>
