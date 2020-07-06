<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6" sm="3">
        <v-card class="mx-auto" max-width="344" outlined tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1" v-if="data">{{
                data.length
              }}</v-list-item-title>
              <v-list-item-subtitle>Total Applicants</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card class="mx-auto" max-width="344" outlined tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1" v-if="data">{{
                this.data.filter(item => item.status >= 4).length
              }}</v-list-item-title>
              <v-list-item-subtitle>Accepted Applicants</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card class="mx-auto" max-width="344" outlined tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1" v-if="data">{{
                this.data.filter(item => item.status == 5 || item.status == 7)
                  .length
              }}</v-list-item-title>
              <v-list-item-subtitle>RSVP'd Users</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card class="mx-auto" max-width="344" outlined tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1" v-if="data">{{
                retreiveData(function(data) {
                  return data.status == 7;
                }).length
              }}</v-list-item-title>
              <v-list-item-subtitle>Checked-In Applicants</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" sm="3">
        <v-card class="mx-auto" max-width="344" outlined tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">0</v-list-item-title>
              <v-list-item-subtitle>Workshops/Events</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card class="mx-auto" max-width="344" outlined tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">0</v-list-item-title>
              <v-list-item-subtitle>Listed Prizes</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card class="mx-auto" max-width="344" outlined tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">0</v-list-item-title>
              <v-list-item-subtitle>Mentors</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="6" sm="3">
        <v-card class="mx-auto" max-width="344" outlined tile>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">0</v-list-item-title>
              <v-list-item-subtitle>Volunteers</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="60"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AdminStats",
  methods: {
    retreiveData(filterFun) {
      return this.data.filter(filterFun);
    }
  },
  props: ["data"]
};
</script>
