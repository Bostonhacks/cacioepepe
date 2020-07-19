<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center row wrap>
        <v-flex mb-4>
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
                              <v-radio label="Accepted" :value="4"></v-radio>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">
                              <svg height="30" width="50">
                                <circle cx="20" cy="20" r="10" fill="black" />
                              </svg>
                            </td>
                            <td class="text-center">
                              <v-radio label="Rejected" :value="2"></v-radio>
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
            <v-row>
              <v-flex mx-1>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-flex>
              <v-flex mx-1>
                <v-select
                  :items="educationLevels"
                  v-model="educationLevel"
                  label="Education Level"
                  multiple
                ></v-select>
              </v-flex>
              <v-flex mx-1>
                <v-select
                  :items="genderList"
                  v-model="gender"
                  label="Gender"
                  multiple
                ></v-select>
              </v-flex>
              <v-flex mx-1>
                <v-select
                  v-model="major"
                  label="Majors"
                  :items="courseList"
                  :menu-props="{ maxHeight: '400' }"
                  multiple
                ></v-select>
              </v-flex>
            </v-row>
            <v-data-table
              v-if="data != null"
              v-model="selected"
              show-select
              item-key="name"
              :headers="headers"
              :items="data"
              :items-per-page="5"
              class="elevation-1"
              :search="search"
              :loading="data == null"
              loading-text="Loading please wait ..."
            >
              <template v-slot:item.resume[0]="{ item }">
                <button v-if="item.resume[0]">
                  <a :href="item.resume[0]" target="_blank">Open</a>
                </button>
              </template>
              <template v-slot:item.status="{ item }">
                <button
                  @click="editStatus(item)"
                  :disabled="user.role != 'admin'"
                >
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
              <v-data-footer>
                <v-text-field>text</v-text-field>
              </v-data-footer>
            </v-data-table>
          </template>
          <v-row align="center" justify="center">
            <template>
              <div class="text-center">
                <v-btn
                  v-if="selected.length > 0 && user.role == 'admin'"
                  class="ma-2"
                  outlined
                  color="indigo"
                  @click="acceptApplicants"
                  >Accept Selected</v-btn
                >
              </div>
            </template>
            <template>
              <div class="text-center">
                <v-btn
                  v-if="selected.length > 0 && user.role == 'admin'"
                  class="ma-2"
                  outlined
                  color="indigo"
                  @click="rejectApplicants"
                  >Reject Selected</v-btn
                >
              </div>
            </template>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import { functions } from "@/firebase/init";

export default {
  name: "MentorTable",
  props: ["data"],
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
    async acceptApplicants() {
      var UIDList = [];
      this.selected.forEach(entry => {
        UIDList.push(entry.uid);
      });
      await functions.httpsCallable("massAcceptMentor")({
        UIDList: UIDList
      });
    },
    async rejectApplicants() {
      var UIDList = [];
      this.selected.forEach(entry => {
        UIDList.push(entry.uid);
      });
      await functions.httpsCallable("massRejectMentor")({
        UIDList: UIDList
      });
    },
    async save() {
      if (this.editItem.status == 2) {
        await functions.httpsCallable("rejectMentor")({
          uid: this.editItem.uid
        });
        Object.assign(this.data[this.editIndex], this.editItem);
        this.close();
      } else if (this.editItem.status == 4) {
        await functions.httpsCallable("acceptMentor")({
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
      major: [],
      courseList: [
        "Accounting",
        "Aerospace Engineering",
        "Agricultural Engineering",
        "Applied Mathematics",
        "Architecture",
        "Biochemistry",
        "Bioengineering",
        "Bioinformatics",
        "Biological Sciences",
        "Biology",
        "Biomedical Engineering",
        "Biotechnology",
        "Building Construction Management",
        "Business",
        "Business Administration",
        "Business Analytics",
        "Chemical Engineering",
        "Chemistry",
        "Civil Engineering",
        "Cognitive Science",
        "Communications",
        "Computational Biology",
        "Computational Media",
        "Computer Engineering",
        "Computer Science",
        "Computer Information Systems",
        "Computer Technologies",
        "Computing Security",
        "Culinary Arts",
        "Cyber Operations",
        "Data Science",
        "Design",
        "Economics",
        "Electrical Engineering",
        "Engineering",
        "Engineering Management",
        "Engineering Physics",
        "Engineering Science",
        "English",
        "Film",
        "Finance",
        "Game Design and Development",
        "Geophysics",
        "Graphic Design",
        "Human Centered Design",
        "Human Computer Interaction",
        "Humanities",
        "Individualized Major",
        "Industrial and Systems Engineering",
        "Industrial and Operations Engineering",
        "Industrial Engineering",
        "Informatics",
        "Information Science",
        "Information Systems",
        "Information Technology",
        "Interaction Design",
        "Interactive Multimedia",
        "Interactive Telecommunications Program (ITP)",
        "International Relations",
        "Journalism",
        "Linguistics",
        "Management",
        "Management Information Systems",
        "Marketing",
        "Materials Science",
        "Mathematics",
        "Mechanical Engineering",
        "Mechatronics",
        "Mechatronics Engineering",
        "Media Arts and Sciences",
        "Music Computing",
        "Nanoengineering",
        "Network Security",
        "Neurobiology/Cognitive Science",
        "Neuroscience",
        "New Media Design",
        "Operations Research Management Science",
        "Organizational",
        "Philosophy",
        "Physics",
        "Political Science",
        "Poultry Science",
        "Product Design",
        "Psych",
        "Psychology",
        "Robotics Engineering",
        "Robotics",
        "Software Engineering",
        "Statistics",
        "Systems Design Engineering",
        "Technology Management",
        "Theatre and Linguistics"
      ],
      hackathonCount: [],
      gender: [],
      genderList: ["Female", "Male", "Other"],
      selected: [],
      educationLevel: [],
      educationLevels: [
        "High School",
        "College Freshman",
        "College Sophomore",
        "College Junior",
        "College Senior",
        "Masters",
        "PhD"
      ],
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
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
          value: "gender",
          filter: value => {
            if (this.gender.length == 0) return true;
            return this.gender.includes(value);
          }
        },
        {
          text: "Pronouns",
          value: "pronouns"
        },
        {
          text: "Education Level",
          value: "educationLevel",
          filter: value => {
            if (this.educationLevel.length == 0) return true;
            return this.educationLevel.includes(value);
          }
        },
        {
          text: "University",
          value: "university"
        },
        {
          text: "Major",
          value: "major",
          filter: value => {
            if (this.major.length == 0) return true;
            return this.major.includes(value);
          }
        },
        {
          text: "Resume",
          value: "resume[0]"
        },
        {
          text: "Status?",
          value: "status"
        }
      ]
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  }
};
</script>

<style></style>
