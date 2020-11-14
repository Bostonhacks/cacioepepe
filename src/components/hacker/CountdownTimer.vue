<template>
  <v-container id="container">
    <v-row>
      <p
        class="text-center text-sm-h5 text-h4 white--text font-weight-bold mb-n3"
      >
        {{ title }}
      </p>
    </v-row>
    <v-row class="justify-center align-center">
      <v-col cols="2" sm="2" md="1" id="hours" class="ma-sm-8 mx-2">
        <v-row
          ><p
            class="text-center text-sm-h1 text-h2 white--text font-weight-bold"
          >
            {{ hours }}
          </p></v-row
        >
        <v-row
          ><p class="text-center white--text font-weight-bold">
            Hours
          </p></v-row
        >
      </v-col>
      <v-col cols="2" sm="2" md="1" id="minutes" class="ma-sm-8 mx-2">
        <v-row
          ><p
            class="text-center text-sm-h1 text-h2 white--text font-weight-bold"
          >
            {{ minutes }}
          </p></v-row
        >
        <v-row
          ><p class="text-center white--text font-weight-bold">
            Minutes
          </p></v-row
        >
      </v-col>
      <v-col cols="2" sm="2" md="1" id="seconds" class="ma-sm-8 mx-2">
        <v-row
          ><p
            class="text-center text-sm-h1 text-h2 white--text font-weight-bold"
          >
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
      seconds: "",
      title: "Countdown to Submission Deadline"
    };
  },
  mounted() {
    let now = new Date().getTime();
    let countDownDate = new Date("Nov 15, 2020, 14:30:00").getTime();
    let eventTime = new Date("Nov 14, 2020, 9:00:00").getTime();
    if (eventTime - now > 0) {
      countDownDate = eventTime;
      this.title = "Countdown to Opening Ceremony";
    }
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
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) +
          Math.floor(distance / (1000 * 60 * 60 * 24)) * 24
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
