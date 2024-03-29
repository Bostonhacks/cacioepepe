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
                          <tr>
                            <td class="text-center">
                              <svg height="30" width="50">
                                <circle cx="20" cy="20" r="10" fill="yellow" />
                              </svg>
                            </td>
                            <td class="text-center">
                              <v-radio label="Waitlisted" :value="3"></v-radio>
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
              <v-flex mx-1>
                <v-select
                  v-model="hackathonCount"
                  label="Number of Hackathons"
                  :items="['0', '1', '2', '3+']"
                  multiple
                ></v-select>
              </v-flex>
            </v-row>
            <v-data-table
              v-model="selected"
              show-select
              item-key="phone"
              :headers="headers"
              :items="data"
              :items-per-page="5"
              class="elevation-1"
              :search="search"
            >
              <template v-slot:item.firstName="{ item }">
                {{ item.firstName + " " + item.lastName }}
              </template>
              <template v-slot:item.resume[0]="{ item }">
                <button v-if="item.resume">
                  <a :href="item.resume[0]" target="_blank" rel="noreferrer"
                    >Open</a
                  >
                </button>
              </template>
              <template v-slot:item.githubURL="{ item }">
                <button v-if="item.githubURL && isLinkValid(item.githubURL)">
                  <a :href="item.githubURL" target="_blank" rel="noreferrer"
                    >Open</a
                  >
                </button>
                <button v-else-if="item.githubURL">
                  <a
                    :href="'http://' + item.githubURL"
                    target="_blank"
                    rel="noreferrer"
                    >Open</a
                  >
                </button>
              </template>
              <template v-slot:item.linkedinURL="{ item }">
                <button
                  v-if="item.linkedinURL && isLinkValid(item.linkedinURL)"
                >
                  <a :href="item.linkedinURL" target="_blank" rel="noreferrer"
                    >Open</a
                  >
                </button>
                <button v-else-if="item.linkedinURL">
                  <a
                    :href="'http://' + item.linkedinURL"
                    target="_blank"
                    rel="noreferrer"
                    >Open</a
                  >
                </button>
              </template>
              <template v-slot:item.otherURL="{ item }">
                <button v-if="item.otherURL && isLinkValid(item.otherURL)">
                  <a :href="item.otherURL" target="_blank" rel="noreferrer"
                    >Open</a
                  >
                </button>
                <button v-else-if="item.otherURL">
                  <a
                    :href="'http://' + item.otherURL"
                    target="_blank"
                    rel="noreferrer"
                    >Open</a
                  >
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
                  @click="checkinApplicants"
                  >Check In Selected</v-btn
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
            <template>
              <div class="text-center">
                <v-btn
                  v-if="selected.length > 0 && user.role == 'admin'"
                  class="ma-2"
                  outlined
                  color="indigo"
                  @click="waitlistApplicants"
                  >Waitlist Selected</v-btn
                >
              </div>
            </template>
            <template>
              <div class="text-center">
                <v-btn
                  v-if="selected.length > 0"
                  class="ma-2"
                  outlined
                  color="indigo"
                  @click="downloadSelectedResumes"
                  >Download Selected Resumes</v-btn
                >
              </div>
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
            <template>
              <div class="text-center">
                <v-btn
                  v-if="selected.length > 0"
                  class="ma-2"
                  outlined
                  color="indigo"
                  @click="downloadSelectedEntries"
                  >Download Selected Entries</v-btn
                >
              </div>
            </template>
            <template>
              <div class="text-center">
                <v-btn
                  class="ma-2"
                  outlined
                  color="indigo"
                  @click="downloadEntries"
                  >Download All Entries</v-btn
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
import { functions, db } from "@/firebase/init";

export default {
  name: "HackerTable",
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
        return "purple";
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
      if (status == 7) {
        return "pink";
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
    isLinkValid(item) {
      return item.includes("http");
    },
    async downloadAuxOne() {
      var res = await functions.httpsCallable("oneClickDownload")();
      var url = res["data"].URL;
      return window.open(url, "_blank");
    },
    async downloadAuxTwo() {
      return await functions.httpsCallable("deleteAllResumes")();
    },
    async downloadResumes() {
      await this.downloadAuxOne();
      await this.downloadAuxTwo();
    },
    async downloadEntries() {
      var res = await functions.httpsCallable("entryDownload")();
      var url = res["data"].URL;
      window.open(url, "_blank");
    },
    async downloadSelectedEntries() {
      var entryList = [];
      this.selected.forEach(entry => {
        entryList.push(entry);
      });
      var res = await functions.httpsCallable("selectEntryDownload")({
        entryList: entryList
      });
      var url = res["data"].URL;
      window.open(url, "_blank");
    },
    async acceptApplicants() {
      var UIDList = [];
      this.selected.forEach(entry => {
        UIDList.push(entry.uid);
      });
      UIDList.forEach(async uid => {
        const user = db.collection("users").doc(uid);
        const application = db.collection("applications").doc(uid);
        await user.update({
          applicationStatus: 5
        });
        await application.update({
          status: 5
        });
      });
    },
    async checkinApplicants() {
      var UIDList = [];
      this.selected.forEach(entry => {
        UIDList.push(entry.uid);
      });
      UIDList.forEach(async uid => {
        const user = db.collection("users").doc(uid);
        const application = db.collection("applications").doc(uid);
        await user.update({
          applicationStatus: 7
        });
        await application.update({
          status: 7
        });
      });
    },
    async downloadSelectedResumesAuxOne() {
      var resumeList = [];
      this.selected.forEach(entry => {
        resumeList.push(entry.resume);
      });
      var res = await functions.httpsCallable("oneClickSelectDownload")({
        resumeList: resumeList
      });
      var url = res["data"].URL;
      return window.open(url, "_blank");
    },
    async downloadSelectedResumesAuxTwo() {
      return await functions.httpsCallable("deleteSelectedResumes")();
    },
    async downloadSelectedResumes() {
      await this.downloadSelectedResumesAuxOne();
      await this.downloadSelectedResumesAuxTwo();
    },
    async rejectApplicants() {
      var UIDList = [];
      this.selected.forEach(entry => {
        UIDList.push(entry.uid);
      });
      UIDList.forEach(async uid => {
        const user = db.collection("users").doc(uid);
        const application = db.collection("applications").doc(uid);
        await user.update({
          applicationStatus: 2
        });
        await application.update({
          status: 2
        });
      });
    },
    async waitlistApplicants() {
      var UIDList = [];
      this.selected.forEach(entry => {
        UIDList.push(entry.uid);
      });
      UIDList.forEach(async uid => {
        const user = db.collection("users").doc(uid);
        const application = db.collection("applications").doc(uid);
        await user.update({
          applicationStatus: 3
        });
        await application.update({
          status: 3
        });
      });
    },
    async save() {
      if (this.editItem.status == 2) {
        const user = db.collection("users").doc(this.editItem.uid);
        const application = db
          .collection("applications")
          .doc(this.editItem.uid);
        await user.update({
          applicationStatus: 2
        });
        await application.update({
          status: 2
        });
        Object.assign(this.data[this.editIndex], this.editItem);
        this.close();
      } else if (this.editItem.status == 3) {
        const user = db.collection("users").doc(this.editItem.uid);
        const application = db
          .collection("applications")
          .doc(this.editItem.uid);
        await user.update({
          applicationStatus: 3
        });
        await application.update({
          status: 3
        });
        Object.assign(this.data[this.editIndex], this.editItem);
        this.close();
      } else if (this.editItem.status == 4) {
        const user = db.collection("users").doc(this.editItem.uid);
        const application = db
          .collection("applications")
          .doc(this.editItem.uid);
        await user.update({
          applicationStatus: 4
        });
        await application.update({
          status: 4
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
          value: "firstName"
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
          value: "beenToHackathon",
          filter: value => {
            if (this.hackathonCount.length == 0) return true;
            return this.hackathonCount.includes(value);
          }
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
