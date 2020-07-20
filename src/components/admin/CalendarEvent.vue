<template>
  <v-layout>
    <template>
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-card-title class="headline">Add a new event</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Name"
                    required
                    v-model="name"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
                    label="Description"
                    required
                    v-model="description"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Location"
                    required
                    v-model="location"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Type"
                    required
                    v-model="scheduleType"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <!-- <v-menu
                    lazy
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    v-model="menu"
                    full-width
                    :nudge-right="40"
                    max-width="290px"
                    min-width="290px"
                  > -->
                  <!-- <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-on="on"
                        v-bind="attrs"
                        label="Picker in menu"
                        v-model="date"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                    </template> -->
                  <!-- <v-date-picker v-model="date" no-title scrollable actions> -->
                  <v-datetime-picker
                    label="Start Time"
                    v-model="start"
                    required
                  >
                  </v-datetime-picker>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <!-- </v-date-picker> -->
                  <!-- </v-menu> -->
                  <v-datetime-picker label="End Time" v-model="end" required>
                  </v-datetime-picker>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="dialog = false">
              Cancel
            </v-btn>

            <v-btn
              color="green darken-1"
              text
              @click="saveEvent"
              :disabled="
                start == null ||
                  end == null ||
                  name == null ||
                  location == null ||
                  scheduleType == null
              "
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
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
          event-color="blue"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
        ></v-calendar>
        <v-card-text style="height: 100px; position: relative">
          <v-btn
            absolute
            dark
            fab
            top
            right
            color="blue"
            @click="dialog = true"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card-text>
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
  </v-layout>
</template>

<script>
import { functions } from "@/firebase/init";
export default {
  name: "CalendarEvent",
  data: () => ({
    location: null,
    scheduleType: null,
    start: null,
    end: null,
    name: "",
    description: "",
    menu: false,
    dialog: false,
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
    events: [
      { start: "2020-07-06 01:35", end: "2020-07-06 02:23", name: "Test" }
    ],
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
    // var out = await functions.httpsCallable("readEvents")({});
    // console.log(out.data);
    //this.events = out.data;
  },
  methods: {
    async saveEvent() {
      this.dialog = false;
      await functions.httpsCallable("createSchedule")({
        name: this.name,
        description: this.description,
        location: this.location,
        type: this.scheduleType,
        start: this.start,
        end: this.end
      });
    },
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
