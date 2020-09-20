<template>
  <div>
    <v-row class="justify-center">
      <p id="timer" class="display-4 white--text font-weight-bold">
        {{ this.seconds }}
      </p>
    </v-row>
    <v-row class="justify-center">
      <p class="white--text font-weight-bold mr-8">Hours</p>
      <p class="white--text font-weight-bold mr-8 ml-8">Minutes</p>
      <p class="white--text font-weight-bold ml-10">Seconds</p>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  mounted() {
    this.countDown();
  },
  methods: {
    countDown() {
      let countDownDate = new Date("Nov 4, 2020, 0:00:00").getTime();
      setTimeout(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
      }, 1000);
    },
    prefixZero(num) {
      return String(num).padStart(2, "0");
    }
  }
};
</script>

<style></style>
