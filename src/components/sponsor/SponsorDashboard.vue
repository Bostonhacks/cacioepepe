<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to the Sponsor Dashboard
          </h1>
          <v-card flat tile>
            <v-card-text>
              <HackerTable :data="currentData" />
            </v-card-text>
          </v-card>
          <v-card>
            <v-row>
              <v-col class="col-3">
                <PieChart
                  v-if="this.hackathonsChartData != null"
                  :chartData="hackathonsChartData"
                  id="hackathonChart"
                />
              </v-col>
              <v-col class="col-3">
                <PieChart
                  v-if="this.genderChartData != null"
                  :chartData="genderChartData"
                  id="genderChart"
                />
              </v-col>
              <v-col class="col-3">
                <PieChart
                  v-if="this.majorChartData != null"
                  :chartData="majorChartData"
                  id="majorChart"
                />
              </v-col>
              <v-col class="col-3">
                <PieChart
                  v-if="this.educationChartData != null"
                  :chartData="educationChartData"
                  id="educationChart"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import HackerTable from "@/components/common/HackerTable";
import PieChart from "@/components/common/PieChart";
import { functions } from "@/firebase/init";
export default {
  name: "SponsorDashboard",
  components: {
    HackerTable,
    PieChart
  },
  data() {
    return {
      gender: [0, 0, 0],
      educationLevel: [0, 0, 0],
      //"High School", "College Freshman", "College Sophomore", "College Junior",
      // "College Senior", "Masters", "PhD"
      hackathon: [0, 0, 0, 0],
      //genderList: ["Female", "Male", "Other"],
      major: [0, 0, 0, 0],
      data: null,
      currentData: null,
      itemStatus: ["Accepted", "Confirmed", "Checked In"],
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
      majorChartData: null,
      educationChartData: null,
      hackathonsChartData: null
    };
  },

  methods: {
    getGender() {
      for (let i = 0; i < this.currentData.length; i++) {
        let curr = this.currentData[i].gender;
        if (curr == "Male") curr = 0;
        else if (curr == "Female") curr = 1;
        else curr = 2;
        this.gender[curr]++;
      }

      this.genderChartData = {
        labels: ["Male", "Female", "Other"],
        datasets: [
          {
            label: "2020",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: this.gender
          }
        ]
      };
    },

    getMajor() {
      for (let i = 0; i < this.currentData.length; i++) {
        let curr = this.currentData[i].major;
        if (curr == "Computer Science") curr = 0;
        else if (curr == "Electrical Engineering") curr = 1;
        else if (curr == "Computer Engineering") curr = 2;
        else curr = 3;
        this.major[curr]++;
      }

      this.majorChartData = {
        labels: [
          "Computer Science",
          "Electrical Engineering",
          "Computer Engineering",
          "Others"
        ],
        datasets: [
          {
            label: "2020",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            data: this.major
          }
        ]
      };
    },

    getEducation() {
      //"High School", "College Freshman", "College Sophomore", "College Junior",
      // "College Senior", "Masters", "PhD"
      console.log("current data is: ", this.currentData);
      for (let i = 0; i < this.currentData.length; i++) {
        let curr = this.currentData[i].educationLevel;
        if (curr == "High School") {
          curr = 0;
        } else if (
          curr == "College Freshman" ||
          curr == "College Sophomore" ||
          curr == "College Junior" ||
          curr == "College Senior"
        ) {
          curr = 1;
        } else {
          curr = 2;
        }
        this.educationLevel[curr]++;
      }

      this.educationChartData = {
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
            data: this.educationLevel
          }
        ]
      };
    },

    getHackathons() {
      //0, 1, 2, 3+
      for (let i = 0; i < this.currentData.length; i++) {
        let curr = this.currentData[i].beenToHackathon;
        // console.log("hackathon count is: ", curr);
        if (curr == "3+") {
          curr = 3;
        }
        curr = Number(curr);
        this.hackathon[curr]++;
      }
      console.log(this.hackathon);
      this.hackathonsChartData = {
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
            data: this.hackathon
          }
        ]
      };
      console.log(this.hackathonsChartData);
    }
  },

  async mounted() {
    var out = await functions.httpsCallable("retrieveAllApplications")({});
    this.data = out.data;
    this.currentData = this.data.filter(item =>
      this.itemStatus.includes(this.statusList[item.status])
    );
    // console.log("the size of the data is: ", this.currentData.length);
    this.getGender();
    this.getMajor();
    this.getEducation();
    this.getHackathons();
  }
};
</script>
