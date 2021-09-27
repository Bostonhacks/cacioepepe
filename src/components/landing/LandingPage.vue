<template>
  <div class="overflow-wrapper">
    <v-container>
      <v-row justify="center" class="my-16">
        <v-col cols="12" lg="4"><Logo /></v-col>
        <v-col cols="0" lg="1"></v-col>
        <v-col cols="12" lg="4"> <Section1 /></v-col>
      </v-row>
      <v-row justify="center" class="my-16">
        <v-col cols="5" lg="2" class="d-flex justify-center"
          ><LoginButton
        /></v-col>
        <v-col cols="5" lg="2" class="d-flex justify-center"
          ><SignupButton
        /></v-col>
      </v-row>

      <v-row class="my-16">
        <v-col cols="0" lg="1"></v-col>
        <v-col cols="12" lg="6"><Schedule /></v-col>
      </v-row>
      <v-row justify="center" class="my-16">
        <v-col cols="10" lg="3"><Track1 /></v-col>
        <v-col cols="10" lg="3"><Track2 /></v-col>
        <v-col cols="10" lg="3"><Track3 /></v-col>
      </v-row>
      <v-row class="flex-row-reverse my-16">
        <v-col cols="0" lg="1"></v-col>
        <v-col cols="12" lg="6"><FAQ /></v-col>
      </v-row>
      <v-row justify="center" class="my-16">
        <v-col cols="12" lg="10"><Sponsors /></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from "@/firebase/init";
import Logo from "@/components/landing/Logo.vue";
import Section1 from "@/components/landing/Section1.vue";
import LoginButton from "@/components/landing/LoginButton.vue";
import SignupButton from "@/components/landing/SignupButton.vue";
import Schedule from "@/components/landing/Schedule.vue";
import FAQ from "@/components/landing/FAQ.vue";
import Track1 from "@/components/landing/Track1.vue";
import Track2 from "@/components/landing/Track2.vue";
import Track3 from "@/components/landing/Track3.vue";
import Sponsors from "@/components/landing/Sponsors.vue";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: {
    Logo,
    Section1,
    LoginButton,
    SignupButton,
    Schedule,
    Track1,
    Track2,
    Track3,
    Sponsors,
    FAQ
  },
  async mounted() {
    this.getEvents();
  },
  data() {
    return {};
  },
  methods: {
    navigate(url) {
      window.scrollTo(0, 0);
      this.$router.push(`${url}`);
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    async getEvents() {
      const eventsDb = db.collection("admin").doc("schedules");
      var allEvents = await eventsDb.get();
      var out = allEvents.data().events;
      if (out) {
        this.events = out;
      } else {
        this.events = [];
      }
    }
  }
};
</script>

<style scoped>
.overflow-wrapper > div {
  overflow: hidden;
}
</style>
