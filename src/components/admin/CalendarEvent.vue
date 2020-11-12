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
                  <v-datetime-picker
                    label="Start Time"
                    ref="startTimePicker"
                    v-model="start"
                    required
                  >
                  </v-datetime-picker>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-datetime-picker
                    label="End Time"
                    ref="endTimePicker"
                    v-model="end"
                    required
                  >
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
            {{ $refs.calendar.title }}
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
          v-if="events"
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
          <v-btn absolute dark fab top right color="blue" @click="addEvent">
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
              <v-btn icon @click="editEvent(selectedEvent)">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="deleteEvent">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
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
import { db, arrayUnion } from "@/firebase/init";
export default {
  name: "CalendarEvent",
  props: ["loadEvents"],
  data: () => ({
    location: null,
    events: null,
    scheduleType: null,
    start: new Date(),
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
    selectedEventIndex: null,
    selectedElement: null,
    selectedOpen: false,
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
    async saveEvent() {
      this.dialog = false;
      if (Object.keys(this.selectedEvent).length > 0) {
        this.updateEvent(this.selectedEvent);
      } else {
        // createSchedule
        var newEvent = {
          name: this.name,
          description: this.description,
          location: this.location,
          type: this.scheduleType,
          start: this.$refs.startTimePicker.formattedDatetime,
          end: this.$refs.endTimePicker.formattedDatetime
        };
        const eventSchedule = db.collection("admin").doc("schedules");
        await eventSchedule
          .update({
            events: arrayUnion(newEvent)
          })
          .catch(function(error) {
            console.error("Error: ", error);
          });
        this.events.push({
          newEvent
        });
      }
      this.clearForm();
    },
    addEvent() {
      this.clearForm();
      this.dialog = true;
    },
    async updateEvent(event) {
      // updateEvent
      var newEvent = {
        name: this.name,
        description: this.description,
        location: this.location,
        type: this.scheduleType,
        start: this.$refs.startTimePicker.formattedDatetime,
        end: this.$refs.endTimePicker.formattedDatetime
      };
      const schedDb = db.collection("admin").doc("schedules");
      let info = await schedDb.get();
      this.events = info.data().events;

      this.selectedEventIndex = this.events.findIndex(
        current => current.start == event.start && current.end == event.end
      );

      this.events[this.selectedEventIndex] = newEvent;

      await schedDb
        .update({
          events: this.events
        })
        .catch(function(error) {
          console.error("Error: ", error);
        });

      this.getEvents();
    },
    clearForm() {
      this.name = "";
      this.description = "";
      this.location = "";
      this.scheduleType = "";
      this.start = "";
      this.end = "";
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
    async deleteEvent() {
      // deleteSchedule
      const schedsDb = db.collection("admin").doc("schedules");
      let info = await schedsDb.get();
      this.events = info
        .data()
        .events.filter(
          schedule =>
            schedule.name != this.selectedEvent.name &&
            schedule.description != this.selectedEvent.description &&
            schedule.location != this.selectedEvent.location &&
            schedule.type != this.selectedEvent.scheduleType &&
            schedule.start != this.selectedEvent.start &&
            schedule.end != this.selectedEvent.end
        );
      await schedsDb
        .update({
          events: this.events
        })
        .catch(function(error) {
          console.error("Error: ", error);
        });
      this.events.splice(this.selectedEventIndex, 1);
      this.selectedOpen = false;
    },
    editEvent(event) {
      this.name = event.name;
      this.start = event.start;
      this.end = event.end;
      this.location = event.location;
      this.scheduleType = event.type;
      this.description = event.description;
      this.dialog = true;
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
