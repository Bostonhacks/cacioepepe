<template>
  <div class="white">
    <v-container>
      <v-row
        class="flex-column-reverse flex-md-row"
        justify="center"
        no-gutters
      >
        <v-col cols="12" md="4" class="pr-md-10">
          <object
            data="/assets/sponsor/skyFeliz.svg"
            alt="pinata"
            style="max-height: 80vh"
            z-index="100"
          />
        </v-col>
        <v-col cols="12" md="4" class="d-flex flex-column justify-center">
          <div>
            <h4 class="display-3 green--text text--darken-1 font-weight-bold">
              WHO ARE WE?
            </h4>
            <p class="display-1 text-left body-1 pt-4">
              BostonHacks brings together over 500 students for an exhilarating
              24 hours to build awesome projects. In our past two events,
              students had meaningful interactions with mentors, peers, and
              sponsors. A hackathon would be incomplete without the new
              technology, advice, and ideas our sponsors offer, and we’d be
              eager to have you join us this coming Fall!
              <br />
              <br />BostonHacks Fall 2020 will run from November 14th to Sunday,
              November 15th on Boston University’s Charles River campus. At
              BostonHacks, we strive to provide a comprehensive recruiting and
              branding experience to our sponsors. Here’s what your company can
              do at our event.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col cols="12" md="8">
          <h4 class="display-3 green--text text--darken-1 font-weight-bold">
            WHY US?
          </h4>
          <h4 class="yellow--text pt-8">Recruit</h4>
          <p>
            Reach out to future customers, leaders and innovators. Test waters
            and get a sense of emergent technologies. Collaborate with students
            on a more intimate level at our comfortably mid-sized hackathon.
            Offer students advice and/or tech to help them through their
            projects. Whether you’re looking for brand awareness, technical
            expertise or personal development, you’ll find it here—with 500
            motivated hackers and dozens of skilled mentors.
          </p>
          <h4 class="red--text pt-8">Connect</h4>
          <p>
            Resumes are two-dimensional (literally). Interviews give only a
            small snapshot of an individual’s abilities. By watching a project
            evolve over a hackathon, you can get a much better picture of a
            candidate. Plus, you’ll have access to a group of students that are
            extraordinarily passionate about what they do, and a friendly
            environment to interact with them in.
          </p>
          <h4 class="blue--text text--darken-1 pt-8">Get Live Feedback</h4>
          <p>
            Give your API or product a test run before sending it out into the
            world. Show off a great framework or platform before it hits the
            market. Students are the ideal target for new tech. They will
            eagerly push your product to its limits, as well as offer
            suggestions on it and look to you for support.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <object
      data="/assets/sponsor/blueSkyTop.svg"
      class="d-block pt-10 mb-n1"
    ></object>
    <div class="blue darken-1 white--text">
      <v-container>
        <v-row class="flex-column-reverse flex-md-row" justify="center">
          <v-col cols="12" md="6">
            <v-row class="justify-center justify-md-start">
              <h4 class="display-3 font-weight-bold">STATISTICS</h4>
            </v-row>
            <v-row
              class="display-1 pl-0 pl-md-8 justify-center justify-md-start"
            >
              <div>
                In {{ years[selectedYear] }}
                <v-btn
                  v-if="!renderYearSelect"
                  v-on:click="renderYearSelect = !renderYearSelect"
                  fab
                  x-small
                  depressed
                  color="#80d2ff"
                  dark
                  class="mt-n2 ml-n1"
                >
                  <v-icon>mdi-menu-down</v-icon>
                </v-btn>
                <v-btn
                  v-else
                  v-on:click="renderYearSelect = !renderYearSelect"
                  fab
                  x-small
                  depressed
                  color="#80d2ff"
                  dark
                  class="mt-n2 ml-n1"
                >
                  <v-icon>mdi-menu-up</v-icon> </v-btn
                >we had...
              </div>
            </v-row>
            <!-- Not entirely sure how this broke, but the div below that contains the buttons for all the years should only render
            if "renderYearSelect" is set to tre, which the button above should trigger.-->

            <transition name="fade">
              <div
                class="pt-4 d-flex justify-center justify-md-start"
                v-if="renderYearSelect"
              >
                <v-btn
                  outlined
                  class="ml-1 mr-1"
                  color="white"
                  v-for="(item, index) in years"
                  :key="index"
                  v-on:click="
                    renderYearSelect = !renderYearSelect;
                    selectedYear = index;
                  "
                  >{{ item }}</v-btn
                >
              </div>
              <div v-else style="height: 52px;"></div>
            </transition>
          </v-col>
          <object
            data="/assets/landingPage/hotair1.svg"
            alt="Red Hot Air Balloon"
            class="balloon-red"
          ></object>
        </v-row>
        <v-row class="justify-center flex-wrap-reverse flex-md-wrap">
          <v-col cols="12" md="6">
            <svg svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="30"
                cy="40"
                :r="this.applicantRadius()"
                fill="#4ABB79"
                stroke="#A4DDBB"
                stroke-width="0.5"
              />
              <text x="12" y="42" class="applicant-num font-weight-bold">
                {{ applicants[selectedYear] }}
              </text>
              <text x="20" y="50" class="small white--text">applicants</text>
              <circle
                cx="75"
                cy="20"
                :r="this.attendeeRadius()"
                fill="#E6C7BB"
                stroke="#F2E3DD"
                stroke-width="0.5"
              />
              <text x="65" y="21" class="attendee-num font-weight-bold">
                {{ attendees[selectedYear] }}
              </text>
              <text x="64" y="27" class="small">attendees</text>
            </svg>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="d-flex justify-center justify-md-end align-start mb-12 mt-12 mb-md-0 mt-md-0"
          >
            <PieChart
              :chartData="genderChartData"
              :options="genderChartOptions"
              id="genderChart"
              :index="selectedYear"
            />
          </v-col>
        </v-row>
        <v-row class="justify-center flex-wrap-reverse flex-md-wrap">
          <v-col cols="12" md="6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 831 515.7"
              class="justify-center"
            >
              <path
                fill="#49bc77"
                d="M828 64c-3 0-3 2-5 0 0-3-2-4-1-7-3 0-6 1-7-1l-8-27c-3 0-5-2-8-3-2 2-4 5-8 6-2 0-1-4-4-4-4 9-11 24-6 35-2 4-5 8-5 14-3-1-4 2-6 0-1 3-1 7-4 8-10 1-21 6-31 8-5 1-10 0-14 3-5 3-6 10-10 14-2 3-6 4-5 9 4 1 3 6 4 9-9 13-26 7-40 13 0 5 3 6 5 10-12 16-30 27-49 36-3-4-13-1-14-6 5-5 4-18 11-17-1-13-2-24-10-29-6 0-6 8-11 10-3 1-2-4-3-7 11-2 4-19 6-24-2 0-2-2-3-4-10 0-18-11-24-1-1 3 3 1 3 4-4-1-4 1-6 2-1 6 3 9-3 10-1-4 4-8 0-9-8 9-9 19-10 36 10 10 7 35-7 39-19-18-8-54-4-74-3 4-7 14-12 15 3-9 9-16 12-26 8 2 12-4 22-6 9 1 16 0 22-1-4-1-6-5-5-11-5 1-9 4-13 2v-5c-14 1-21 10-33 8-2-7-12-9-15-5 1-7 6-9 9-14-9 0-12 7-17 12-6 3-14 6-19 10-1-4-6 0-7-2 1-2 3-3 3-6-5-1-11 8-18 4 7-4 10-12 16-17 5-4 13-3 17-9-6-1-14-1-18-4-5 5-15 5-16-2-8 3-15-9-23-2-3-1-6-4-12-3-4-3 0-14-7-14-2 1 0 7-2 8C295 52 178 27 72 0c4 7 0 15 1 21-4-4-2-7-1-10-4 0-3 4-6 4-10-2-15-8-23-11 0 9-1 23 3 30a5 5 0 00-4 1c-1 3 3 3 2 5-4 3-5 8-1 10-3-1-2 2-3 3-7 21-15 41-27 57l-2 14c6 15-7 26-11 37 11 7 1 19 2 28 0 4 7 10 7 16 1 6 1 8 5 11-5 9 0 19 6 22-1 3-5 3-5 7 0 12 12 22 13 33 1 5-4 8-1 13 17-1 19 14 30 18v4c11 3 15 13 15 27 11 4 27 4 40 6 0 2-3 2-2 4 15 7 29 17 42 25 18 11 39 13 65 16l2-9 29 4c6 8 11 18 21 22 5 6 4 12 6 20 2 11 16 13 24 19 7-4 6-16 16-17 20 2 30 15 33 34 7 4 9 12 15 16-4 24 23 29 39 33-3-13-2-25-1-39 16-10 35-18 48-32 13-11 37-3 51-3-1-5-7 0-8-3 6-6 11 3 16 4l-1 4c4 2 6 4 11 4 2-2 3-5 7-5 3 2-2 4 0 5 8-2 2-7 8-9 1 4 14 10 15 3-3-3-11-2-13-6 3-3 7-4 5-11-4 0-2 6-7 4 4-11 14-10 27-10 2-2 0-7 4-7 2 2 4 7 1 9 15-5 38-10 46 5 8 0 16-4 17-9 16-2 15 14 28 15 8 6-1 24 7 30 2-3-1-6 0-7l3 1c1 5-3 5-3 9a80 80 0 0112 19c2 0 2-2 4-1l5 10c8-2 12 7 14 14l13-4c-2 6-11 9-11 13 7-5 13-10 14-20-3-2 0 3-3 3 8-25-6-42-15-57 0-2 3-1 2-3-14-13-29-39-20-64 2-5 8-8 8-15 9-3 11-12 19-17-1-12 6-17 17-18-1-19 23-15 23-28 0 2-8 3-9 0 4 4 7-5 3-6 6 2 12-1 13-8-2-2-6 2-8-1 4 1 6 0 7-3v-1l1 1-10-20h-6c3-3-5-6-3-9l2 1c-1-7-3-12-8-15 3 1 2-2 3-3-6-4-7-21-1-22-4 4 3 8-2 13 5 0 2 1 2 7 5 0 4 6 8 8 1-3-3-6-1-7 10 4-2 18 6 23 1-12 10-24 5-37-6-2-7-9-11-14a14 14 0 0012 7c1 2-2 2-1 4a35 35 0 0010-32c-1-3-4 1-5-1 2-1 2-3 4-3l-1-3 2-2c6-13 26-14 37-22 1-3 0-5 4-6 1 3 0 5-2 6 4-3 6-7 12-8 0-5-1-9-6-8 0 3 5 2 5 5-9 7-10-9-16-6 0-9-1-20 3-32 6 0 9-5 13-8v-9c2 1 4 1 4 3-2 2-3 2-2 5 5-1 3-7 6-10 0 2 0 4 3 3 2-5-1-2-2-5 7 3 21-11 12-18"
              />
              <text x="100" y="170" class="us-num">
                {{ universities[selectedYear] }}
              </text>
              <text x="220" y="170" class="us-small">Universities</text>
              <text x="270" y="300" class="us-num">
                {{ states[selectedYear] }}
              </text>
              <text x="330" y="300" class="us-small">States (and Canada)</text>
            </svg>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <object data="/assets/sponsor/blueSkyBottom.svg" class="mt-n1"></object>

    <object
      data="/assets/landingPage/hotair2.svg"
      alt="Green Hot Air Balloon"
      class="balloon-green align-self-start pl-12"
    ></object>
    <v-row class="table-container justify-center pl-3 pr-3">
      <v-col cols="12" md="8">
        <SponsorBenefitsTable />
        <v-row class="justify-space-between">
          <v-col cols="12" md="3">
            <h4 class="yellow--text">*General Email</h4>
            <p>
              Prior to the event, we’ll send out one email listing all of our
              sponsors and any prizes offered, and a short summary of each
              sponsor. If you’d like to email students directly, see the $5k and
              $7.5k tiers.
            </p>
          </v-col>
          <v-col cols="12" md="3">
            <h4 class="red--text">**Special Challenge</h4>
            <p>
              This can be a fun, non-hacking virtual challenge e.g. giving out a
              puzzle to solve, a coding challenge, or asking attendees to answer
              a fun question or send in a photo of themselves doing a challenge.
              Or, you could also host a workshop on an API or technology you
              might want to present.
            </p>
          </v-col>
          <v-col cols="12" md="3">
            <h4 class="blue--text text--darken-1">Early Bird</h4>
            <p>
              If your contribution is received by August 2020, we will display
              your company branding at public fall events such as the BU student
              activities fair (attended by thousands of BU students).
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="table-container justify-center pl-3 pr-3">
      <v-col style="width: 100%;">
        <object
          data="/assets/landingPage/tree.svg"
          class="tree-top"
          style="width: 100%; height: 100%;"
        ></object>
      </v-col>
      <v-col>
        <Windmill class="windmill" />
      </v-col>
    </v-row>
    <object data="/assets/sponsor/grassTop.svg" class="mb-n2"></object>
    <v-row no-gutters justify="center" class="grass-background">
      <v-col cols="12" md="8">
        <v-row class="d-flex flex-column-reverse">
          <v-col cols="12" md="6" style="padding: 0px;">
            <h4 class="font-weight-bold">Twilio: Sam Agnew</h4>
            <p class="font-italic">
              “I go to a ton of hackathons and BostonHacks is consistently one
              of the best that I continue to sponsor selectedYear after
              selectedYear. At BostonHacks, you get the best hackers in both
              Boston and the Northeast at large. Without fail, the projects that
              come from these student developers are unique and awe-inspiring.
              I’m not really sure how the organizers manage to attract such
              talent, but it might be that good hackers flock to events that are
              well-run. But never mind all of that. The great food is the real
              reason to go to BostonHacks!”
            </p>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="12" md="6">
            <h4 class="font-weight-bold">ITG: Candace Mariso</h4>
            <p class="font-italic">
              “ITG’s technical mentors had a great time at BostonHacks 2017. The
              organizers were responsive and accommodating, allowing us to focus
              on what really mattered—exchanging ideas, providing guidance and
              tackling challenges. We met dozens of talented students, resulting
              in several intern hires and top prospects for future programs. The
              high quality and innovative hacks made this a can’t-miss event for
              us.”
            </p>
          </v-col>
        </v-row>
        <v-row class="justify-end flex-column-reverse flex-md-row">
          <object
            data="/assets/landingPage/tree.svg"
            class="tree-bottom"
          ></object>
          <v-col cols="12" md="6">
            <h4 class="font-weight-bold">Cadence: Apurva Kalia</h4>
            <p class="font-italic">
              “The energy was very infectious! It was great to see the young
              kids wrapping their minds around the given problems and come up
              with solutions by the end of the event. I was amazed at the
              talent.”
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <object data="/assets/sponsor/grassBottom.svg" class="mt-n1"></object>
    <v-row
      style="width: 100vw; flex-direction: row-reverse"
      class="mt-10 mb-10"
    >
      <v-col class="align-self-end col-12 col-md-5">
        <object data="/assets/sponsor/bee.svg"></object>
      </v-col>
    </v-row>
    <h4 class="display-2 header text-center green--text">
      Check out our museum site for more information!
    </h4>
    <v-row class="justify-center" style="max-width: 100vw;">
      <v-btn
        class="mt-10 mb-10 white--text justify-center"
        x-large
        elevation="5"
        rounded
        disabled
        color="#f6d374"
        >Coming Soon!</v-btn
      >
    </v-row>
    <object
      data="/assets/sponsor/waveBottom.svg"
      class="align-self-start mb-n2"
    ></object>
  </div>
</template>

<script>
import SponsorBenefitsTable from "@/components/sponsor/SponsorBenefitsTable";
import PieChart from "@/components/common/PieChart";
import Windmill from "@/components/common/SVG/Windmill";

export default {
  components: {
    PieChart,
    SponsorBenefitsTable,
    Windmill
  },
  methods: {
    applicantRadius() {
      return (this.applicants[this.selectedYear] / 70).toString() + "%";
    },

    attendeeRadius() {
      return (this.attendees[this.selectedYear] / 30).toString() + "%";
    }
  },
  data() {
    return {
      renderYearSelect: false,
      years: ["2017", "2018", "2019"],
      selectedYear: 2,
      applicants: [1458, 1800, 2089],
      attendees: [485, 600, 510],
      universities: [31, 31, 28],
      states: [9, 9, 3],
      genderChartOptions: {
        legend: {
          labels: {
            boxWidth: 24,
            fontColor: "white",
            fontSize: 24
          }
        },
        tooltips: {
          enabled: true,
          callbacks: {
            label: function(tooltipItem, data) {
              return (
                data.datasets[tooltipItem.datasetIndex].data[
                  tooltipItem.index
                ] + "%"
              );
            }
          }
        }
      },
      genderChartData: {
        labels: ["Male", "Female", "Other"],
        datasets: [
          {
            label: "2017",
            backgroundColor: ["#4bbc79", "#219E8C", "#E6C7BB"],
            borderWidth: 0,
            data: [71, 29, 0]
          },
          {
            label: "2018",
            backgroundColor: ["#4bbc79", "#219E8C", "#E6C7BB"],
            borderWidth: 0,
            data: [71, 29, 0]
          },
          {
            label: "2019",
            backgroundColor: ["#4bbc79", "#E6C7BB", "#219E8C"],
            borderWidth: 0,
            data: [54, 25, 21]
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.tree-bottom {
  position: relative;
  left: -7vw;
  top: 5vw;
  max-height: 20vh;
}

.tree-top {
  position: relative;
  bottom: -13vw;
  max-height: 20vh;
}

.windmill {
  position: relative;
  bottom: -15vw;
  right: -10vw;
  max-height: 30vh;
}

.small {
  font-size: 0.35rem;
}

.applicant-num {
  font-size: 1rem;
}

.attendee-num {
  font-size: 0.7rem;
}

.us-num {
  font-size: 100px;
  font-weight: bold;
  color: white;
}

.us-small {
  font-size: 40px;
  color: white;
}

.grass-background {
  background-color: #4bbc79;
  min-width: 100%;
  max-width: 100%;
  color: white;
  padding: 12px;
}

.test {
  max-width: 100%;
}
.balloon-red {
  position: relative;
  top: -20rem;
  height: 20vw;
  max-width: 30%;
}
.balloon-green {
  position: relative;
  top: -10rem;
  height: 20vw;
}

.table-container {
  width: 100vw;
}

@media only screen and (max-width: 1200px) {
  .tree-top {
    position: relative;
    bottom: -35vw;
    max-height: 20vh;
  }

  .windmill {
    position: relative;
    bottom: -31vw;
    left: -5vw;
    max-height: 30vh;
  }

  .balloon-red {
    position: relative;
    top: -6rem;
    right: -5rem;
    height: 20vw;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
