<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">Welcome to God Mode!</h1>
          <template>
            <v-simple-table height="300px" width="100px">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Color</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <v-radio-group v-model="choice">
                    <tr>
                      <td class="text-left">
                        <svg height="30" width="50">
                          <circle cx="20" cy="20" r="10" fill="orange" />
                        </svg>
                      </td>
                      <td class="text-left">
                        <v-radio label="Started" value="started"></v-radio>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">
                        <svg height="30" width="50">
                          <circle cx="20" cy="20" r="10" fill="teal" />
                        </svg>
                      </td>
                      <td class="text-left">
                        <v-radio label="Submitted" value="submitted"></v-radio>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">
                        <svg height="30" width="50">
                          <circle cx="20" cy="20" r="10" fill="black" />
                        </svg>
                      </td>
                      <td class="text-left">
                        <v-radio label="Rejected" value="rejected"></v-radio>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">
                        <svg height="30" width="50">
                          <circle cx="20" cy="20" r="10" fill="yellow" />
                        </svg>
                      </td>
                      <td class="text-left">
                        <v-radio
                          label="Waitlisted"
                          value="waitlisted"
                        ></v-radio>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">
                        <svg height="30" width="50">
                          <circle cx="20" cy="20" r="10" fill="green" />
                        </svg>
                      </td>
                      <td class="text-left">
                        <v-radio label="Accepcted" value="accepted"></v-radio>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">
                        <svg height="30" width="50">
                          <circle cx="20" cy="20" r="10" fill="blue" />
                        </svg>
                      </td>
                      <td class="text-left">
                        <v-radio label="Confirmed" value="confirmed"></v-radio>
                      </td>
                    </tr>
                    <tr>
                      <td class="text-left">
                        <svg height="30" width="50">
                          <circle cx="20" cy="20" r="10" fill="red" />
                        </svg>
                      </td>
                      <td class="text-left">
                        <v-radio label="Declined" value="Declined"></v-radio>
                      </td>
                    </tr>
                  </v-radio-group>
                </tbody>
              </template>
            </v-simple-table>
          </template>
          <template>
            <v-data-table
              v-if="data !== null"
              :headers="headers"
              :items="data"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:item.status="{ item }">
                <!-- ORANGE -->
                <span v-if="item.status == 0">
                  <svg height="30" width="50">
                    <circle cx="20" cy="20" r="10" fill="orange" />
                  </svg>
                </span>
                <!-- TEAL -->
                <span v-if="item.status == 1"
                  ><svg height="30" width="50">
                    <circle cx="20" cy="20" r="10" fill="teal" /></svg
                ></span>
                <!-- BLACK -->
                <span v-if="item.status == 2">
                  <svg height="30" width="50">
                    <circle cx="20" cy="20" r="10" fill="black" />
                  </svg>
                </span>
                <!-- YELLOW -->
                <span v-if="item.status == 3"
                  ><svg height="30" width="50">
                    <circle cx="20" cy="20" r="10" fill="yellow" /></svg
                ></span>
                <!-- GREEN -->
                <span v-if="item.status == 4"
                  ><svg height="30" width="50">
                    <circle cx="20" cy="20" r="10" fill="green" /></svg
                ></span>
                <!-- BLUE -->
                <span v-if="item.status == 5"
                  ><svg height="30" width="50">
                    <circle cx="20" cy="20" r="10" fill="blue" /></svg
                ></span>
                <!-- RED -->
                <span v-if="item.status == 6"
                  ><svg height="30" width="50">
                    <circle cx="20" cy="20" r="10" fill="red" /></svg
                ></span>
              </template>
            </v-data-table>
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
