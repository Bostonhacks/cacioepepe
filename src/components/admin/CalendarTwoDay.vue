<template>
  <v-col cols="12">
    <v-calendar
      v-if="events"
      ref="calendar"
      v-model="focus"
      color="primary"
      :events="events"
      :event-color="getEventColor"
      type="custom-daily"
      start="2020-11-14"
      end="2020-11-15"
      class="rounded-lg"
      first-time="08:00"
      interval-count="16"
      @click:event="showEvent"
      @click:more="viewDay"
      @click:date="viewDay"
    ></v-calendar>

    <v-menu
      v-model="selectedOpen"
      :close-on-content-click="false"
      :activator="selectedElement"
      offset-x
    >
      <v-card color="grey lighten-4" min-width="350px" flat>
        <v-toolbar :color="selectedEvent.color" dark>
          <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <span v-html="selectedEvent.description"></span>
        </v-card-text>
        <v-card-text>
          Time:
          <span v-html="selectedEvent.start"></span>
          to
          <span v-html="selectedEvent.end"></span>
        </v-card-text>
        <v-card-text
          >Location:
          <span v-html="selectedEvent.location"></span>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="secondary" @click="selectedOpen = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-col>
</template>

<script>
import { db } from "@/firebase/init";
export default {
  name: "CalendarEvent",
  props: ["loadEvents"],
  data: () => ({
    location: null,
    events: null,
    name: "",
    description: "",
    menu: false,
    dialog: false,
    focus: "",
    selectedEvent: {},
    selectedEventIndex: null,
    selectedElement: null,
    selectedOpen: false,
    colors: [
      "indigo accent",
      "amber darken-1",
      "green",
      "deep-orange accent-4"
    ],
    names: ["General", "Social", "Workshop", "Alerts"]
  }),
  methods: {
    async getEvents() {
      // readSchedules
      const eventsDb = db.collection("admin").doc("schedules");
      var allEvents = await eventsDb.get();
      var out = allEvents.data().events;
      if (out) {
        this.events = out;
      } else {
        this.events = [];
      }
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      let colorIndex = this.names.indexOf(event.type);
      if (colorIndex == -1) colorIndex = 0;
      return this.colors[colorIndex];
    },
    showEvent({ nativeEvent, event }) {
      this.selectedEventIndex = this.events.findIndex(
        current =>
          current.name == event.name &&
          current.start == event.start &&
          current.end == event.end
      );
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => (this.selectedOpen = true), 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    }
  },
  mounted() {
    this.getEvents();
  }
};
</script>
