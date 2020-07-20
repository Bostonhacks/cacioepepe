<template>
  <v-row>
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
            Today
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }} July
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="blue"
          :type="type"
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
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { functions } from "@/firebase/init";
export default {
  name: "CalendarEvent",
  data: () => ({
    focus: "",
    type: "week",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days"
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1"
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party"
    ]
  }),
  async mounted() {
    var out = await functions.httpsCallable("readEvents")({});
    console.log(out.data);
    this.events = out.data;
  },
  methods: {
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
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
  }
};
</script>
