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
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import HackerTable from "@/components/common/HackerTable";
import { functions } from "@/firebase/init";
export default {
  name: "SponsorDashboard",
  components: {
    HackerTable
  },
  data() {
    return {
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
    async getData() {
      const applicantStatus = ["Accepted", "Confirmed", "Checked In"];
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
    }
  },

  async mounted() {
    var out = await functions.httpsCallable("retrieveAllApplications")({});
    this.data = out.data;
    this.currentData = this.data.filter(item =>
      this.itemStatus.includes(this.statusList[item.status])
    );
  }
};
</script>
