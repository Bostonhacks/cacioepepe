<template>
  <v-container
    class="mr-0 ml-0 d-flex flex-column align-center align-self-center"
  >
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <template>
            <v-row
              class="d-flex flex-column-reverse flex-md-row justify-center"
            >
              <v-col cols="12" md="5">
                <object
                  data="/assets/landingPage/feliz.svg"
                  alt="pinata"
                  class="mt-0 mt-sm-n16"
                  style="max-height: 80vh"
                  z-index="100"
                />
              </v-col>
              <v-col cols="12" md="5" class="d-flex flex-column justify-center">
                <div>
                  <h4 class="display-3 text-left header font-weight-bold">
                    WHO ARE WE?
                  </h4>
                  <p class="display-1 text-left body-1 pt-4">
                    BostonHacks brings together over 500 students for an
                    exhilarating 24 hours to build awesome projects. In our past
                    two events, students had meaningful interactions with
                    mentors, peers, and sponsors. A hackathon would be
                    incomplete without the new technology, advice, and ideas our
                    sponsors offer, and we’d be eager to have you join us this
                    coming Fall! <br />
                    <br />
                    BostonHacks Fall 2020 will run from November 14th to Sunday,
                    November 15th on Boston University’s Charles River campus.
                    At BostonHacks, we strive to provide a comprehensive
                    recruiting and branding experience to our sponsors. Here’s
                    what your company can do at our event.
                  </p>
                </div>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col cols="12" md="10" class="text-left">
                <h4 class="display-3 header font-weight-bold">
                  WHY US?
                </h4>
                <h4 class="recruit">Recruit</h4>
                <p>
                  Reach out to future customers, leaders and innovators. Test
                  waters and get a sense of emergent technologies. Collaborate
                  with students on a more intimate level at our comfortably
                  mid-sized hackathon. Offer students advice and/or tech to help
                  them through their projects. Whether you’re looking for brand
                  awareness, technical expertise or personal development, you’ll
                  find it here—with 500 motivated hackers and dozens of skilled
                  mentors.
                </p>
                <h4 class="connect">Connect</h4>
                <p>
                  Resumes are two-dimensional (literally). Interviews give only
                  a small snapshot of an individual’s abilities. By watching a
                  project evolve over a hackathon, you can get a much better
                  picture of a candidate. Plus, you’ll have access to a group of
                  students that are extraordinarily passionate about what they
                  do, and a friendly environment to interact with them in.
                </p>
                <h4 class="live-feedback">Get Live Feedback</h4>
                <p>
                  Give your API or product a test run before sending it out into
                  the world. Show off a great framework or platform before it
                  hits the market. Students are the ideal target for new tech.
                  They will eagerly push your product to its limits, as well as
                  offer suggestions on it and look to you for support.
                </p>
              </v-col>
            </v-row>
          </template>
        </v-flex>
      </v-layout>
    </v-container>
    <object
      data="/assets/sponsor/blueSkyTop.svg"
      z-index="-1"
      class="bg pt-10 mb-n1"
    ></object>
    <v-layout class="sky-background d-flex justify-center flex-wrap">
      <v-col cols="10">
        <v-row class="d-flex justify-center pt-0 mt-0">
          <v-col cols="12" md="10" class="stats-text">
            <h4 class="display-3 white--text font-weight-bold">STATISTICS</h4>
            <h4 class="display-1 white--text pl-8 pt-8">
              Last year we had...
            </h4>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="5" class="d-flex test">
            <svg
              svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              class="circles"
            >
              <circle
                cx="30"
                cy="40"
                :r="this.applicantRadius()"
                fill="#4ABB79"
                stroke="#A4DDBB"
                stroke-width="0.5"
              />
              <text x="12" y="42" class="applicant-num">
                {{ applicants[year] }}
              </text>
              <text x="20" y="50" class="small">applicants</text>
              <circle
                cx="85"
                cy="20"
                :r="this.attendeeRadius()"
                fill="#E6C7BB"
                stroke="#F2E3DD"
                stroke-width="0.5"
              />
              <text x="75" y="21" class="attendee-num">
                {{ attendees[year] }}
              </text>
              <text x="74" y="27" class="small">attendees</text>
            </svg>
          </v-col>
          <v-col
            cols="10"
            md="5"
            class="d-flex flex-column justify-center align-center rename"
          >
            <v-btn-toggle v-model="year" class="test">
              <v-btn>0</v-btn>
              <v-btn>1</v-btn>
              <v-btn>2</v-btn>
              <v-btn>3</v-btn>
            </v-btn-toggle>
            <span>{{ year }}</span>
            <div class="chart-container d-flex flex-column justify-center">
              <PieChart
                :chartData="genderChartData"
                :options="genderChartOptions"
                :id="1"
                :index="year"
              />
            </div>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="8" class="d-flex">
            <v-col cols="12" md="6">
              <object
                data="/assets/sponsor/usa.svg"
                alt="usa"
                style="max-height: 80vh"
                z-index="100"
            /></v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-layout>
    <object
      data="/assets/sponsor/blueSkyBottom.svg"
      z-index="-1"
      class="bg mt-n1"
    ></object>

    <v-container>
      <h2>Sponsor Benefits</h2>
      <GeneralSponsorTable />
      <RecruitingSponsorTable />
      <BrandingSponsorTable />
    </v-container>
  </v-container>
</template>

<script>
import GeneralSponsorTable from "@/components/sponsor/GeneralSponsorTable";
import RecruitingSponsorTable from "@/components/sponsor/RecruitingSponsorTable";
import BrandingSponsorTable from "@/components/sponsor/BrandingSponsorTable";
import PieChart from "@/components/common/PieChart";

export default {
  components: {
    PieChart,
    GeneralSponsorTable,
    RecruitingSponsorTable,
    BrandingSponsorTable
  },
  methods: {
    applicantRadius() {
      return "30%";
    },

    attendeeRadius() {
      return "15%";
    }
  },
  data() {
    return {
      data: null,
      currentData: null,
      year: 3,
      applicants: [1000, 2000, 3000, 4000],
      attendees: [500, 1000, 1500, 2000],
      genderChartOptions: {
        legend: {},
        tooltips: {
          enabled: false
        }
        // responsiveAnimationDuration: 0,
      },
      genderChartData: {
        labels: ["Male", "Female", "Other"],
        datasets: [
          {
            label: "2017",
            backgroundColor: ["#4bbc79", "#219E8C", "#E6C7BB"],
            borderWidth: 0,
            data: [60, 16, 24]
          },
          {
            label: "2018",
            backgroundColor: ["#4bbc79", "#E6C7BB", "#219E8C"],
            borderWidth: 0,
            data: [56, 24, 20]
          },
          {
            label: "2019",
            backgroundColor: ["#4bbc79", "#E6C7BB", "#219E8C"],
            borderWidth: 0,
            data: [54, 25, 21]
          },
          {
            label: "2020",
            backgroundColor: ["#4bbc79", "#E6C7BB", "#219E8C"],
            borderWidth: 0,
            data: [52, 26, 22]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.header {
  color: #4bbc79;
}

.recruit {
  padding-top: 2vw;
  color: #f6d374;
}

.connect {
  padding-top: 2vw;
  color: #fe745f;
}

.live-feedback {
  padding-top: 2vw;
  color: #0098ff;
}

.circles {
  width: 100%;
  height: 100%;
}

.chart-container {
  width: 60%;
  height: 60%;
}

.small {
  font-size: 5px;
  font-weight: bold;
  color: white;
}

.applicant-num {
  font-size: 16px;
  font-weight: bold;
  color: white;
}

.attendee-num {
  font-size: 9px;
  font-weight: bold;
  color: white;
}

.rename {
  position: relative;
}

.test {
  z-index: 1000;
}

.stats-text {
  top: 10%;
  left: 0px;
  width: 100vw;
}

.bg {
  min-width: 100vw;
}

.sky-background {
  background-color: #80d2ff;
  width: 100vw;
}
</style>
