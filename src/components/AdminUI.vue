<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">Welcome to God Mode!</h1>
          <AdminStats />
          <template>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card>
                <v-card-title>
                  <span class="headline">Status</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-radio-group
                          v-if="editItem"
                          v-model="editItem.status"
                        >
                          <tr>
                            <td class="text-center">
                              <svg height="30" width="50">
                                <circle cx="20" cy="20" r="10" fill="green" />
                              </svg>
                            </td>
                            <td class="text-center">
                              <v-radio label="Accepted" value="4"></v-radio>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <svg height="30" width="50">
                                <circle cx="20" cy="20" r="10" fill="black" />
                              </svg>
                            </td>
                            <td class="text-center">
                              <v-radio label="Rejected" value="2"></v-radio>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <svg height="30" width="50">
                                <circle cx="20" cy="20" r="10" fill="yellow" />
                              </svg>
                            </td>
                            <td class="text-center">
                              <v-radio label="Waitlisted" value="3"></v-radio>
                            </td>
                          </tr>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-data-table
              v-if="data !== null"
              :headers="headers"
              :items="data"
              :items-per-page="5"
              class="elevation-1"
              :search="search"
              ><template v-slot:item.resume[0]="{ item }">
                <button v-if="item.resume[0]">
                  <a :href="item.resume[0]" target="_blank">Open</a>
                </button>
              </template>
              <template v-slot:item.githubURL="{ item }">
                <button v-if="item.githubURL">
                  <a :href="item.githubURL" target="_blank">Open</a>
                </button>
              </template>
              <template v-slot:item.linkedinURL="{ item }">
                <button v-if="item.linkedinURL">
                  <a :href="item.linkedinURL" target="_blank">Open</a>
                </button>
              </template>
              <template v-slot:item.otherURL="{ item }">
                <button v-if="item.otherURL">
                  <a :href="item.otherURL" target="_blank">Open</a>
                </button>
              </template>
              <template v-slot:item.attendedBHacks="{ item }">
                <v-checkbox v-model="item.attendedBHacks" disabled></v-checkbox>
              </template>
              <template v-slot:item.marketingData="{ item }">
                <v-checkbox v-model="item.marketingData" disabled></v-checkbox>
              </template>
              <template v-slot:item.tAndC1="{ item }">
                <v-checkbox v-model="item.tAndC1" disabled></v-checkbox>
              </template>
              <template v-slot:item.tAndC2="{ item }">
                <v-checkbox v-model="item.tAndC2" disabled></v-checkbox>
              </template>
              <template v-slot:item.status="{ item }">
                <button @click="editStatus(item)">
                  <svg height="30" width="50">
                    <circle
                      cx="20"
                      cy="20"
                      r="10"
                      :fill="getColor(item.status)"
                    />
                  </svg>
                </button>
              </template>
            </v-data-table>
          </template>
          <template>
            <div class="text-center">
              <v-btn
                class="ma-2"
                outlined
                color="indigo"
                @click="downloadResumes"
                >Download All Resumes</v-btn
              >
            </div>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import AdminStats from "../components/AdminStats";
import { functions } from "../firebase/init";

export default {
  name: "AdminUI",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    getColor(status) {
      if (status == 0) {
        return "orange";
      }
      if (status == 1) {
        return "teal";
      }
      if (status == 2) {
        return "black";
      }
      if (status == 3) {
        return "yellow";
      }
      if (status == 4) {
        return "green";
      }
      if (status == 5) {
        return "blue";
      } else {
        return "red";
      }
    },
    editStatus(item) {
      this.editIndex = this.data.indexOf(item);
      this.editItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.editItem = null;
      this.editIndex = null;
    },
    async downloadResumes() {
      var res = await functions.httpsCallable("oneClickDownload")();
      var url = res["data"].URL;
      window.open(url, "_blank");
    },
    async save() {
      if (this.editItem.status == 2) {
        await functions.httpsCallable("rejectApplicant")({
          uid: this.editItem.uid
        });
        Object.assign(this.data[this.editIndex], this.editItem);
        this.close();
      }
      if (this.editItem.status == 3) {
        await functions.httpsCallable("waitlistApplicant")({
          uid: this.editItem.uid
        });
        Object.assign(this.data[this.editIndex], this.editItem);
        this.close();
      }
      if (this.editItem.status == 4) {
        await functions.httpsCallable("acceptApplicant")({
          uid: this.editItem.uid
        });
        Object.assign(this.data[this.editIndex], this.editItem);
        this.close();
      } else {
        this.close();
      }
    }
  },
  data() {
    return {
      loader: null,
      search: "",
      editIndex: null,
      editItem: null,
      dialog: false,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        {
          text: "Applicant UID",
          value: "uid"
        },
        {
          text: "Phone",
          value: "phone"
        },
        {
          text: "Age",
          value: "age"
        },
        {
          text: "Gender",
          value: "gender"
        },
        {
          text: "Pronouns",
          value: "pronouns"
        },
        {
          text: "Education Level",
          value: "educationLevel"
        },
        {
          text: "University",
          value: "university"
        },
        {
          text: "Major",
          value: "major"
        },
        {
          text: "Minor",
          value: "minor"
        },
        {
          text: "Resume",
          value: "resume[0]"
        },
        {
          text: "Github",
          value: "githubURL"
        },
        {
          text: "LinkedIn",
          value: "linkedinURL"
        },
        {
          text: "Other",
          value: "otherURL"
        },
        {
          text: "Been to Hackathon?",
          value: "beenToHackathon"
        },
        {
          text: "Attended BostonHacks?",
          value: "attendedBHacks"
        },
        {
          text: "Marketing",
          value: "marketingData"
        },
        {
          text: "T&C1",
          value: "tAndC1"
        },
        {
          text: "T&C2",
          value: "tAndC2"
        },
        {
          text: "Status?",
          value: "status"
        }
      ],
      data: null
    };
  },
  async mounted() {
    var out = await functions.httpsCallable("retrieveAllApplications")({});
    this.data = out.data;
  },
  components: {
    AdminStats
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  }
};
</script>

<style></style>
