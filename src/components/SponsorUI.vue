<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-1 indigo--text text--darken-4 font-weight-bold">
            Welcome Sponsor!
          </h1>

          <template>
            <h3>About BostonHacks</h3>
            <v-row>
              <v-col>
                <v-card>
                  <h4
                    class="display-1 indigo--text text--darken-4 font-weight-bold"
                  >
                    Who Are We?
                  </h4>
                  <p
                    class="display-1 indigo--text text--darken-4 font-weight-light body-1"
                  >
                    BostonHacks brings together over 500 students for an
                    exhilarating 24 hours to build awesome projects. In our past
                    two events, students had meaningful interactions with
                    mentors, peers, and sponsors. A hackathon would be
                    incomplete without the new technology, advice, and ideas our
                    sponsors offer, and we’d be eager to have you join us this
                    coming Fall!
                  </p>
                </v-card>
              </v-col>
              <v-col>
                <v-card>
                  <h4
                    class="display-1 indigo--text text--darken-4 font-weight-bold"
                  >
                    Why Us?
                  </h4>
                  <p
                    class="display-1 indigo--text text--darken-4 font-weight-light body-1"
                  >
                    Resumes are two-dimensional (literally). Interviews give
                    only a small snapshot of an individual’s abilities. By
                    watching a project evolve over a hackathon, you can get a
                    much better picture of a candidate. Plus, you’ll have access
                    to a group of students that are extraordinarily passionate
                    about what they do, and a friendly environment to interact
                    with them in.
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </template>

          <template>
            <v-subheader>Applicant Info</v-subheader>

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
  name: "SponsorUI",
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
