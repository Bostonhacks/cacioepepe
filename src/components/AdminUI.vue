<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">Welcome to God Mode!</h1>
          <template>
            <v-data-table
              v-if="data !== null"
              :headers="headers"
              :items="data"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import { functions } from "../firebase/init";
export default {
  name: "AdminUI",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Applicant UID", value: "uid" },
        { text: "Phone", value: "phone" },
        { text: "Age", value: "age" },
        { text: "Gender", value: "gender" },
        { text: "Pronouns", value: "pronouns" },
        { text: "Education Level", value: "education" },
        { text: "University", value: "university" },
        { text: "Major", value: "major" },
        { text: "Minor", value: "minor" },
        { text: "Resume", value: "resume[0]" },
        { text: "Github", value: "github" },
        { text: "LinkedIn", value: "linkedin" },
        { text: "Other", value: "other" },
        { text: "Been to Hackathon?", value: "beenToHackathon" },
        { text: "Attended BostonHacks?", value: "bhacks" },
        { text: "Marketing", value: "marketing" },
        { text: "T&C1", value: "t&c1" },
        { text: "T&C2", value: "t&c2" },
        { text: "Status?", value: "status" }
      ],
      data: null
    };
  },
  async mounted() {
    var out = await functions.httpsCallable("retrieveAllApplications")({});
    this.data = out.data;
  }
};
</script>

<style></style>
