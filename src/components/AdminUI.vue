<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <AdminStats />
          <h1 class="display-2 font-weight-bold mb-3">Welcome to God Mode!</h1>
          <template>
            <!-- <div id="demo">
              <demo-grid
                :data="gridData"
                :columns="gridColumns"
                :filter-key="searchQuery"
              >
              </demo-grid> 
            </div>-->

            <!-- Pick Status Modal -->
            <modal name="pickStatus" :width="300" :height="300">
              <v-simple-table height="300px" width="100px">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Status</th>
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
                          <v-radio
                            label="Started"
                            value="started"
                            item.status="0"
                          ></v-radio>
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
                            item.status="1"
                          ></v-radio>
                        </td>
                      </tr>
                      <tr @click="this.methods.reject">
                        <td class="text-center">
                          <svg height="30" width="50">
                            <circle cx="20" cy="20" r="10" fill="black" />
                          </svg>
                        </td>
                        <td class="text-center">
                          <v-radio
                            label="Rejected"
                            value="rejected"
                            item.status="2"
                          ></v-radio>
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
                            item.status="3"
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
                          <v-radio
                            label="Accepcted"
                            value="accepted"
                            item.status="4"
                          ></v-radio>
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
                            item.status="5"
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
                          <v-radio
                            label="Declined"
                            value="Declined"
                            item.status="6"
                          ></v-radio>
                        </td>
                      </tr>
                    </v-radio-group>
                  </tbody>
                </template>
              </v-simple-table>
            </modal>

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
                <span v-if="item.status == 1">
                  <button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="teal" />
                    </svg>
                  </button>
                </span>
                <!-- BLACK -->
                <span v-if="item.status == 2">
                  <button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="black" />
                    </svg>
                  </button>
                </span>
                <!-- YELLOW -->
                <span v-if="item.status == 3">
                  <button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="yellow" />
                    </svg>
                  </button>
                </span>
                <!-- GREEN -->
                <span v-if="item.status == 4">
                  <button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="green" />
                    </svg>
                  </button>
                </span>
                <!-- BLUE -->
                <span v-if="item.status == 5">
                  <button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="blue" />
                    </svg>
                  </button>
                </span>
                <!-- RED -->
                <span v-if="item.status == 6">
                  <button class="btn" @click="$modal.show('pickStatus')">
                    <svg height="30" width="50">
                      <circle cx="20" cy="20" r="10" fill="red" />
                    </svg>
                  </button>
                </span>
              </template>
            </v-data-table>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import Vue from "vue";
import AdminStats from "../components/AdminStats";
import { functions } from "../firebase/init";
import { GridPlugin, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
Vue.use(GridPlugin);

export default {
  name: "AdminUI",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    reject: function() {
      console.log("test"); // var out = functions.httpsCallable("rejectApplicant")({});
    }
  },
  data() {
    return {
      time: 0,
      duration: 5000,
      search: "",
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
          value: "education"
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
          value: "github"
        },
        {
          text: "LinkedIn",
          value: "linkedin"
        },
        {
          text: "Other",
          value: "other"
        },
        {
          text: "Been to Hackathon?",
          value: "beenToHackathon"
        },
        {
          text: "Attended BostonHacks?",
          value: "bhacks"
        },
        {
          text: "Marketing",
          value: "marketing"
        },
        {
          text: "T&C1",
          value: "t&c1"
        },
        {
          text: "T&C2",
          value: "t&c2"
        },
        {
          text: "Status?",
          value: "status"
        }
      ],
      data: null,
      editOptions: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
      },
      toolbarOptions: ["Add", "Edit", "Delete"]
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  },
  async mounted() {
    var out = await functions.httpsCallable("retrieveAllApplications")({});
    this.data = out.data;
  },
  components: {
    AdminStats
  }
};
</script>

<style></style>
