<template>
  <v-container>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">Welcome Sponsor!</h1>

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
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-row>
        <h1 class="display-1 pb-10">
          Recap
          <v-btn
            class="display-1"
            text
            @click="toggleYearSelect = !toggleYearSelect"
            >{{ years[yearIndex] }}</v-btn
          >
        </h1>
      </v-row>
      <v-card v-if="toggleYearSelect">
        <v-subheader>Select a Year</v-subheader>
        <v-list-item-group v-model="yearIndex" color="primary">
          <v-list-item v-for="(year, i) in years" :key="i">
            <v-list-item-content>
              <v-list-item-title>{{ year }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-card>

      <v-row>
        <v-col class="col-4">
          <LineChart
            :chartData="lineChartData"
            :options="lineChartData.options"
          />
        </v-col>
        <v-col class="col-4">
          <PieChart
            :year="yearIndex"
            :chartData="majorChartData"
            :options="majorChartData.options"
            id="majorChart"
          />
        </v-col>
        <v-col class="col-4">
          <PieChart
            :year="yearIndex"
            :chartData="genderChartData"
            :options="genderChartData.options"
            id="genderChart"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-6">
          <PieChart
            :year="yearIndex"
            :chartData="educationChartData"
            :options="educationChartData.options"
            id="educationChart"
          />
        </v-col>
        <v-col class="col-6">
          <PieChart
            :year="yearIndex"
            :chartData="hackathonsChartData"
            :options="hackathonsChartData.options"
            id="hackathonsChart"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <h2>Sponsor Benefits</h2>
      <GeneralSponsorTable />
      <RecruitingSponsorTable />
      <BrandingSponsorTable />
    </v-container>

    <v-container>
      <h2>Sponsor Companies</h2>

      <v-row align="center" justify="center">
        <v-col class="col-4">
          <v-img src="@/assets/sponsorlogos/az.jpg"></v-img>
        </v-col>
        <v-col class="col-4">
          <v-img src="@/assets/sponsorlogos/bose.png"></v-img>
        </v-col>
        <v-col class="col-4">
          <v-img src="@/assets/sponsorlogos/CapitalOne.png"></v-img>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col class="col-4">
          <v-img src="@/assets/sponsorlogos/GoogleCloud.png"></v-img>
        </v-col>
        <v-col class="col-4">
          <v-img src="@/assets/sponsorlogos/kind.jpg"></v-img>
        </v-col>
        <v-col class="col-4">
          <v-img src="@/assets/sponsorlogos/Manulife_JohnHancock.png"></v-img>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col class="col-4">
          <v-img src="@/assets/sponsorlogos/Raytheon.jpg"></v-img>
        </v-col>
        <v-col class="col-4">
          <v-img src="@/assets/sponsorlogos/spark.png"></v-img>
        </v-col>
        <v-col class="col-4">
          <v-img src="@/assets/sponsorlogos/twilio.png"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import LineChart from "@/components/common/LineChart";
import GeneralSponsorTable from "@/components/sponsor/GeneralSponsorTable";
import RecruitingSponsorTable from "@/components/sponsor/RecruitingSponsorTable";
import BrandingSponsorTable from "@/components/sponsor/BrandingSponsorTable";
import PieChart from "@/components/common/PieChart";

export default {
  components: {
    LineChart,
    PieChart,
    GeneralSponsorTable,
    RecruitingSponsorTable,
    BrandingSponsorTable
  },
  watch: {
    yearIndex: {
      handler: function() {
        if (this.yearIndex === undefined) {
          this.yearIndex = this.lastYearIndex;
        } else {
          this.lastYearIndex = this.yearIndex;
        }
      },
      deep: true
    }
  },
  data() {
    return {
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
      toggleYearSelect: false,

      yearIndex: "3",
      lastYearIndex: "3",
      years: ["2016", "2017", "2018", "2019"],
      lineChartData: {
        options: {
          title: {
            display: true,
            text: "Number of Applicants"
          }
        },
        labels: ["2016", "2017", "2018", "2019"],
        datasets: [
          {
            backgroundColor: "#f87979",
            borderColor: "#f87979",
            radius: 5,
            borderWidth: 5,
            data: [1024, 1223, 1480, 1657],
            fill: false,
            showLines: false
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
          "Computer Engineering"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [40, 20, 10]
          },
          {
            label: "Data Two",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [10, 90, 10]
          },
          {
            label: "Data Three",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [15, 15, 70]
          },
          {
            label: "Data Four",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [5, 5, 90]
          },
          {
            label: "Data Five",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [20, 70, 5]
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
            label: "2016",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [40, 20, 10]
          },
          {
            label: "2017",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [10, 90, 10]
          },
          {
            label: "2018",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [15, 15, 70]
          },
          {
            label: "2019",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [5, 5, 90]
          },
          {
            label: "2020",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [20, 70, 5]
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
            label: "2016",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [40, 20, 10]
          },
          {
            label: "2017",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [10, 90, 10]
          },
          {
            label: "2018",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [15, 15, 70]
          },
          {
            label: "2019",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [5, 5, 90]
          },
          {
            label: "2020",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
            data: [20, 70, 5]
          }
        ]
      },
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
            label: "Data One",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            data: [40, 20, 10, 30]
          },
          {
            label: "Data Two",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            data: [10, 90, 10, 40]
          },
          {
            label: "Data Three",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            data: [15, 15, 70]
          },
          {
            label: "Data Four",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            data: [5, 5, 90, 20]
          },
          {
            label: "Data Five",
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
            data: [20, 70, 5, 50]
          }
        ]
      }
    };
  }
};
</script>

<style scoped></style>
