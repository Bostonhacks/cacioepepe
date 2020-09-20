<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to the Mentor Dashboard
          </h1>
          <v-card flat tile>
            <v-card-actions>
              <v-select
                :items="statusList"
                v-model="itemStatus"
                label="Status"
                multiple
                @change="filterStatus(mentorCurrentData, mentorData)"
              ></v-select>
            </v-card-actions>
            <v-card-text>
              <MentorTable :data="mentorCurrentData" />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: "MentorDashboard"
};
</script>
