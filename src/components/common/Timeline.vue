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
              v-model="menu1"
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
                @input="menu1"
                required
              ></v-date-picker>
            </v-menu>

            <v-menu
              ref="menu2"
              v-model="menu2"
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
                @input="menu2"
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
import { functions } from "@/firebase/init";

export default {
  data: () => ({
    start: "",
    end: "",
    firstInput: true
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
      var out = await functions.httpsCallable("readDeadline")({});
      if (out.data[0].length > 0 && out.data[1].length > 0) {
        console.log(out.data);
        this.firstInput = false;
        this.start = out.data[0];
        this.end = out.data[1];
      }
    },
    async saveDate() {
      await functions.httpsCallable("createDeadline")({
        startTime: this.$refs.starttime.formattedDatetime,
        finishTime: this.$refs.dealine.formattedDatetime
      });
      this.push({
        startTime: this.$refs.starttime.formattedDatetime,
        finishTime: this.$refs.dealine.formattedDatetime
      });
    },
    async updateDate() {
      await functions.httpsCallable("updateDeadline")({
        startTime: this.$refs.starttime.formattedDatetime,
        finishTime: this.$refs.dealine.formattedDatetime
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
