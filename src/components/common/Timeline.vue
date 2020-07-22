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
              Open Date: <strong>{{ date }}</strong> Close Date:
              <strong>{{ date2 }}</strong>
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
                  v-model="dateFormatted"
                  label="Open Date"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu1 = false"
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
                  v-model="dateFormatted2"
                  label="Close Date"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  @blur="date2 = parseDate(dateFormatted2)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date2"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    dateFormatted2: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false
  }),
  // data(){
  //   return {
  //     date: new Date().toISOString().substr(0, 10),
  //     date2: new Date().toISOString().substr(0, 10),
  //     dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
  //     dateFormatted2: vm.formatDate(new Date().toISOString().substr(0, 10)),
  //     menu1: false,
  //     menu2: false
  //   }
  // },

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
    date2() {
      this.dateFormatted2 = this.formatDate(this.date2);
    }
  },

  methods: {
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
