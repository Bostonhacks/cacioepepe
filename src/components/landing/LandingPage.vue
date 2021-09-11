<template>
  <div>
    Landing Page <CalendarTwoDay /> <Logo /> <Card /> <Planets /> <Section1 />
  </div>
</template>

<script>
import CalendarTwoDay from "@/components/common/CalendarTwoDay";
import Card from "@/components/landing/Card.vue";
import Section1 from "@/components/landing/Section1.vue";
import Logo from "@/components/landing/Logo.vue";
import Planets from "@/components/landing/Planets.vue";
import { db } from "@/firebase/init";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: {
    CalendarTwoDay,
    Card,
    Planets,
    Section1,
    Logo
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

<style></style>
