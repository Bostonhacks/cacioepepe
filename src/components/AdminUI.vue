<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">Welcome to God Mode!</h1>
          <template>
            <modal name="pickStatus" :width="300" :height="300">
              <v-simple-table height="300px" width="100px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <v-radio-group v-model="choice">
                      <tr>
                        <td class="text-center">
                          <svg height="30" width="50">
                            <circle cx="20" cy="20" r="10" fill="orange" />
                          </svg>
                        </td>
                        <td class="text-center">
                          <v-radio label="Started" value="started"></v-radio>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <svg height="30" width="50">
                            <circle cx="20" cy="20" r="10" fill="teal" />
                          </svg>
                        </td>
                        <td class="text-center">
                          <v-radio
                            label="Submitted"
                            value="submitted"
                          ></v-radio>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <svg height="30" width="50">
                            <circle cx="20" cy="20" r="10" fill="black" />
                          </svg>
                        </td>
                        <td class="text-center">
                          <v-radio label="Rejected" value="rejected"></v-radio>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <svg height="30" width="50">
                            <circle cx="20" cy="20" r="10" fill="yellow" />
                          </svg>
                        </td>
                        <td class="text-center">
                          <v-radio
                            label="Waitlisted"
                            value="waitlisted"
                          ></v-radio>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <svg height="30" width="50">
                            <circle cx="20" cy="20" r="10" fill="green" />
                          </svg>
                        </td>
                        <td class="text-center">
                          <v-radio label="Accepcted" value="accepted"></v-radio>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <svg height="30" width="50">
                            <circle cx="20" cy="20" r="10" fill="blue" />
                          </svg>
                        </td>
                        <td class="text-center">
                          <v-radio
                            label="Confirmed"
                            value="confirmed"
                          ></v-radio>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-center">
                          <svg height="30" width="50">
                            <circle cx="20" cy="20" r="10" fill="red" />
                          </svg>
                        </td>
                        <td class="text-center">
                          <v-radio label="Declined" value="Declined"></v-radio>
                        </td>
                      </tr>
                    </v-radio-group>
                  </tbody>
                </template>
              </v-simple-table>
            </modal>
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
                  <button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="orange" />
                    </svg>
                  </button>
                </span>
                <!-- TEAL -->
                <span v-if="item.status == 1"
                  ><button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="teal" />
                    </svg></button
                ></span>
                <!-- BLACK -->
                <span v-if="item.status == 2">
                  <button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="black" />
                    </svg>
                  </button>
                </span>
                <!-- YELLOW -->
                <span v-if="item.status == 3"
                  ><button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="yellow" />
                    </svg></button
                ></span>
                <!-- GREEN -->
                <span v-if="item.status == 4"
                  ><button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="green" />
                    </svg></button
                ></span>
                <!-- BLUE -->
                <span v-if="item.status == 5"
                  ><button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="blue" />
                    </svg></button
                ></span>
                <!-- RED -->
                <span v-if="item.status == 6"
                  ><button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="red" />
                    </svg></button
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
      time: 0,
      duration: 5000,
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
