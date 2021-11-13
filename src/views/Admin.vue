<template>
  <main class="pt-70px ">
    <v-layout align-center justify-center class="background">
      <div class="loadingLogo" v-if="loading"><BostonHacksLoadingLogo /></div>
      <v-container v-else>
        <v-layout text-center wrap>
          <v-flex xs12></v-flex>
          <v-flex mb-4>
            <h1 class="display-2 font-weight-bold mb-3">
              Welcome to God Mode!
            </h1>
            <AdminStats :data="hackerData" />
            <CalendarEvent v-if="events" :loadEvents="events" />
            <v-tabs
              v-model="tab"
              background-color="primary"
              class="elevation-2"
              dark
              grow
            >
              <v-tab v-for="i in tabs" :key="i">{{ i }}</v-tab>

              <v-tab-item key="tabs[0]">
                <v-card flat tile>
                  <v-row>
                    <v-col class="col-3">
                      <PieChart
                        v-if="this.hackathonsChartData.datasets[0].data"
                        :chartData="hackathonsChartData"
                        :options="hackathonsChartData.options"
                        id="hackathonChart"
                      />
                    </v-col>
                    <v-col class="col-3">
                      <PieChart
                        v-if="this.genderChartData.datasets[0].data"
                        :chartData="genderChartData"
                        :options="genderChartData.options"
                        id="genderChart"
                      />
                    </v-col>
                    <v-col class="col-3">
                      <PieChart
                        v-if="this.majorChartData.datasets[0].data"
                        :chartData="majorChartData"
                        :options="majorChartData.options"
                        id="majorChart"
                      />
                    </v-col>
                    <v-col class="col-3">
                      <PieChart
                        v-if="this.educationChartData.datasets[0].data"
                        :chartData="educationChartData"
                        :options="educationChartData.options"
                        id="educationChart"
                      />
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>

              <v-tab-item key="tabs[1]">
                <v-card flat tile>
                  <v-card-title>
                    Hacker Table
                  </v-card-title>
                  <v-card-actions>
                    <v-select
                      :items="statusList"
                      v-model="itemStatus"
                      label="Status"
                      multiple
                      @change="filterStatus(hackerCurrentData, hackerData)"
                    ></v-select>
                  </v-card-actions>
                  <v-card-text>
                    <HackerTable :data="hackerCurrentData" />
                  </v-card-text>
                </v-card>
                <!-- <v-card flat tile>
                  <v-card-title>
                    Mentor Table
                  </v-card-title>
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
                <v-card flat tile>
                  <v-card-title>
                    Volunteer Table
                  </v-card-title>
                  <v-card-actions>
                    <v-select
                      :items="statusList"
                      v-model="itemStatus"
                      label="Status"
                      multiple
                      @change="
                        filterStatus(volunteerCurrentData, volunteerData)
                      "
                    ></v-select>
                  </v-card-actions>
                  <v-card-text>
                    <VolunteerTable :data="volunteerCurrentData" />
                  </v-card-text>
                </v-card> -->
              </v-tab-item>

              <v-tab-item key="tabs[2]">
                <v-card flat tile>
                  <v-card-text>
                    <Timeline />
                    <v-card-title>Slack Channel Information</v-card-title>
                    <SlackInfoUpload />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </main>
</template>

<script>
import HackerTable from "@/components/common/HackerTable";
import CalendarEvent from "@/components/admin/CalendarEvent";
import AdminStats from "@/components/admin/AdminStats";
// import VolunteerTable from "@/components/admin/VolunteerTable";
// import MentorTable from "@/components/admin/MentorTable";
import PieChart from "@/components/common/PieChart";
import Timeline from "@/components/common/Timeline";
import SlackInfoUpload from "@/components/admin/SlackInfoUpload";
import { db } from "@/firebase/init";
import BostonHacksLoadingLogo from "@/components/common/SVG/BostonHacksLoadingLogo.vue";

export default {
  name: "Admin",
  components: {
    Timeline,
    HackerTable,
    AdminStats,
    CalendarEvent,
    // VolunteerTable,
    // MentorTable,
    PieChart,
    SlackInfoUpload,
    BostonHacksLoadingLogo
  },
  data() {
    return {
      loading: true,
      events: null,
      hackerData: null,
      hackerCurrentData: null,
      mentorData: null,
      mentorCurrentData: null,
      volunteerData: null,
      volunteerCurrentData: null,
      tab: null,
      itemStatus: [],
      statusList: [
        "Started",
        "Submitted",
        "Rejected",
        "Waitlisted",
        "Accepted",
        "Confirmed",
        "Declined",
        "Checked In"
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tabs: ["Stats", "God Mode", "Settings"],
      data: null,
      hackathonsChartData: {
        options: {
          title: {
            display: true,
            text: "Hackathons Attended"
          }
        },
        labels: ["0", "1", "2", "3+"],
        datasets: [
          {
            label: "2020",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            data: null
          }
        ]
      },
      genderChartData: {
        options: {
          title: {
            display: true,
            text: "Genders"
          }
        },
        labels: ["Male", "Female", "Other"],
        datasets: [
          {
            label: "2020",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: null
          }
        ]
      },
      majorChartData: {
        options: {
          title: {
            display: true,
            text: "Majors"
          }
        },
        labels: ["CS", "EE", "CE", "Others"],
        datasets: [
          {
            label: "2020",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            data: null
          }
        ]
      },
      educationChartData: {
        options: {
          title: {
            display: true,
            text: "Education Levels"
          }
        },
        labels: ["High School", "Undergraduate", "Graduate"],
        datasets: [
          {
            label: "2020",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: null
          }
        ]
      }
    };
  },
  methods: {
    async getEvents() {
      // readSchedules
      const eventsDb = db.collection("admin").doc("schedules");
      var allEvents = await eventsDb.get();
      var out = allEvents.data().events;
      if (out) {
        this.events = out;
      } else {
        this.events = [];
      }
    },
    async filterStatus() {
      if (this.itemStatus.length == 0) {
        this.hackerCurrentData = this.data;
      } else {
        this.hackerCurrentData = this.data.filter(item =>
          this.itemStatus.includes(this.statusList[item.status])
        );
      }
    },
    async getData() {
      const applicantStatus = [
        "Started",
        "Submitted",
        "Accepted",
        "Confirmed",
        "Checked In"
      ];
      const statusList = [
        "Started",
        "Submitted",
        "Rejected",
        "Waitlisted",
        "Accepted",
        "Confirmed",
        "Declined",
        "Checked In"
      ];
      // retrieveAllApplications
      const applications = db
        .collection("applications")
        .where("status", ">", 0);
      var appData = await applications.get();
      var out = [];
      appData.forEach(element => {
        out.push(element.data());
      });
      const applicants = out;
      this.data = applicants.filter(applicant =>
        applicantStatus.includes(statusList[applicant.status])
      );
    },
    getGender() {
      const genders = ["Male", "Female", "Other"];
      let genderData = [0, 0, 0];
      let index = 0;
      this.data.map(applicant => {
        index = genders.indexOf(applicant.gender);
        genderData[index]++;
      });
      this.genderChartData.datasets[0].data = genderData;
    },

    getMajor() {
      const majors = [
        "Computer Science",
        "Electrical Engineering",
        "Computer Engineering"
      ];
      let majorData = [0, 0, 0, 0];
      let index = 0;
      this.data.map(applicant => {
        index = majors.indexOf(applicant.major);
        if (index == -1) {
          //indexOf() returns -1 if item not found in array
          index = 3;
        }
        majorData[index]++;
      });
      this.majorChartData.datasets[0].data = majorData;
    },

    getEducation() {
      const educationLevels = [
        "High School",
        "College Freshman",
        "College Sophomore",
        "College Junior",
        "College Senior"
      ];
      let educationData = [0, 0, 0];
      let index = 0;
      this.data.map(applicant => {
        index = educationLevels.indexOf(applicant.educationLevel);
        if (index == -1) {
          index = 2;
        } else if (index != 0) {
          index = 1;
        }
        educationData[index]++;
      });
      this.educationChartData.datasets[0].data = educationData;
    },

    getHackathons() {
      const hackathonNumbers = ["0", "1", "2", "3+"];
      let hackathonData = [0, 0, 0, 0];
      let index = 0;
      this.data.map(applicant => {
        index = hackathonNumbers.indexOf(applicant.beenToHackathon);
        hackathonData[index]++;
      });
      this.hackathonsChartData.datasets[0].data = hackathonData;
    }
  },

  async mounted() {
    const applications = db.collection("applications").where("status", ">", 0);
    const users = db.collection("users").where("applicationStatus", ">", 4);
    // retrieveAllApplications
    var appData = await applications.get();
    var userData = await users.get();
    var userOut = [];
    var hackOut = [];
    appData.forEach(element => {
      hackOut.push(element.data());
    });
    userData.forEach(element => {
      userOut.push(element.data());
    });
    // userOut.forEach(user => {
    //   user.update{

    //   }
    // });
    // retrieveAllMentors
    const mentors = db.collection("mentors").where("status", ">", 0);
    var mData = await mentors.get();
    var mentorOut = [];
    mData.forEach(element => {
      mentorOut.push(element.data());
    });
    // retrieveAllVolunteers
    const volunteers = db.collection("volunteers").where("status", ">", 0);
    var vData = await volunteers.get();
    var volunteerOut = [];
    vData.forEach(element => {
      volunteerOut.push(element.data());
    });

    this.hackerData = hackOut;
    this.mentorData = mentorOut;
    this.volunteerData = volunteerOut;
    this.hackerCurrentData = this.hackerData;
    this.volunteerCurrentData = this.volunteerData;
    this.mentorCurrentData = this.mentorData;

    await this.getData();
    this.getGender();
    this.getMajor();
    this.getEducation();
    this.getHackathons();
    this.getEvents();
    this.loading = false;
  }
};
</script>

<style scoped>
.loadingLogo {
  height: 100vh;
}
</style>
