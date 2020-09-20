<template>
  <v-card flat tile>
    <v-layout text-left wrap>
      <v-container>
        <v-list-item-title class="headline"
          >Open/Close Registration</v-list-item-title
        >
        <v-row>
          <v-col cols="12" lg="6">
            <p>
              Open Date: <strong>{{ start }}</strong> Close Date:
              <strong>{{ end }}</strong>
            </p>
            <v-menu
              ref="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="start"
                  label="Open Date"
                  hint="MM-DD-YYYY format"
                  persistent-hint
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="start"
                ref="starttime"
                no-title
                required
              ></v-date-picker>
            </v-menu>

            <v-menu
              ref="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="end"
                  label="Close Date"
                  hint="MM-DD-YYYY format"
                  persistent-hint
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="end"
                ref="dealine"
                no-title
                required
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>

          <v-btn color="green darken-1" text @click="saveDate">
            Save
          </v-btn>
        </v-card-actions>
      </v-container>
    </v-layout>
  </v-card>
</template>

<script>
import { db } from "@/firebase/init";

export default {
  data: () => ({
    start: "",
    end: "",
    firstInput: true,
    menu1: false,
    menu2: false
  }),
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    start() {
      this.dateFormatted = this.formatDate(this.start);
    },
    end() {
      this.dateFormatted2 = this.formatDate(this.end);
    }
  },
  async mounted() {
    this.getDate();
  },
  methods: {
    async getDate() {
      const deadlineDb = db.collection("admin").doc("regDeadline");
      var deadlineDoc = await deadlineDb.get();
      var out = deadlineDoc.data();

      if (out.data["startTime"] != null && out.data["startTime"] != null) {
        this.firstInput = false;
        this.start = out.data["startTime"];
        this.end = out.data["finishTime"];
      }
    },
    async saveDate() {
      this.dialog = false;
      if (this.start != "" && this.end != "") {
        this.updateDate();
      } else {
        var newDeadline = {
          startTime: this.start,
          finishTime: this.end
        };
        const deadlineDoc = db.collection("admin").doc("regDeadline");
        // Append new event into the array
        await deadlineDoc
          .set({
            events: newDeadline
          })
          .catch(function(error) {
            console.error("Error: ", error);
          });
        this.push({
          start: this.start,
          end: this.end
        });
      }
    },
    async updateDate() {
      const deadlineDb = db.collection("admin").doc("regDeadline");
      await deadlineDb.update({
        startTime: this.start,
        finishTime: this.end
      });
      this.getDate();
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>
