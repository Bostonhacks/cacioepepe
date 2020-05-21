<template>
  <div class="wrapper">
    <LiveNavBar />
    <div id="home">
      <div id="header" class="flex-container">
        <div class="half" style="padding-top: 3rem">
          <span style="font-size: 6rem">Boston</span>
          <span style="font-size: 6rem; font-weight: bold;">Hacks</span>
          <span style="font-size: 4rem">&nbsp;2020</span>
          <p style="font-size: 2rem; margin: 0; font-style: italic;">
            775 Commonwealth Avenue, Boston University
          </p>
          <p style="font-size: 2rem; font-style: italic;">
            November 16 – November 17, 2020
          </p>
        </div>
        <div class="quarter">
          <img src="../assets/pinata.svg" />
        </div>
      </div>
      <div class="flex-container card-container">
        <div class="third card">
          <h2>Wifi</h2>
          <p>Username: BostonHacks</p>
          <p>Password: BostonHacks2019</p>
        </div>
        <div class="third card">
          <h2>Slack</h2>
          <p>Click here to join our Slack channel!</p>
          <!-- <p>Slack</p> -->
        </div>
        <div class="third card">
          <h2>Devpost</h2>
          <p>Click here to submit your project!</p>
          <!-- <p>Submit</p> -->
        </div>
      </div>
    </div>
    <div class="dividers">
      <img src="../assets/shapes/divider.png" alt class="divider-image" />
    </div>
    <div id="faq">
      <div class="flex-container early">
        <div class="text-container">
          <div style="font-size: 2.5rem; text-align: center; font-weight: bold">
            Frequently Asked Questions
          </div>
          <img
            src="../assets/live/icons/help.svg"
            alt
            style="width: 80%; margin-left: 10%"
          />
        </div>
        <div class="flex-container information" style="flex-direction: column">
          <div class="third card">
            <h2>Are there any rules?</h2>
            <p>
              We want to ensure a positive experience for every participant. We
              encourage you to read our code of conduct.
            </p>
          </div>
          <div class="third card">
            <h2>Can we form teams?</h2>
            <p>
              Of course you can! We encourage people to work in teams of up to 5
              people. You can work alone, but it won't be the same.
            </p>
          </div>
          <div class="third card">
            <h2>How/When do I need to submit my project?</h2>
            <p>
              All projects will need to be submitted on Devpost by 10AM on
              Sunday, altough you can continue to work on your demmonstration
              after you submit.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="dividers">
      <img src="../assets/shapes/divider.png" alt class="divider-image" />
    </div>
    <div id="schedule">
      <div class="flex-container early">
        <div class="flex-container card-container information">
          <div class="half card">
            <h2>Saturday</h2>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
          </div>
          <div class="half card">
            <h2>Sunday</h2>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
            <div class="data-row">
              <h2 class="time">7:00AM</h2>
              <h3 class="title">Opening Ceremony</h3>
            </div>
          </div>
        </div>
        <div class="text-container">
          <div style="font-size: 2.5rem; text-align: center; font-weight: bold">
            The Schedule
          </div>
          <img
            src="../assets/live/icons/calendar.svg"
            alt
            style="width: 80%; margin-left: 10%"
          />
        </div>
      </div>
    </div>
    <div class="dividers">
      <img src="../assets/shapes/divider.png" alt class="divider-image" />
    </div>
    <div id="map">
      <div class="flex-container early">
        <div class="text-container" style="margin-top: 10rem;">
          <div style="font-size: 2.5rem; text-align: center; font-weight: bold">
            Map
          </div>
          <img
            src="../assets/live/icons/map.svg"
            alt
            style="width: 80%; margin-left: 10%"
          />
        </div>
        <br />
        <div class="container information">
          <v-tabs grow v-model="active" color="black" slider-color="black">
            <v-tab :key="1" ripple>Basement</v-tab>
            <v-tab :key="2" ripple>Floor 1</v-tab>
            <v-tab :key="3" ripple>Floor 2</v-tab>
            <v-tab :key="4" ripple>Floor 3</v-tab>
            <v-tab-item :key="1">
              <v-card flat style="height: 40rem">
                <v-card-text>Basement: Floor Plan and Information</v-card-text>
                <img src="../assets/live/basement.svg" style="width: 50%" />
              </v-card>
            </v-tab-item>
            <v-tab-item :key="2">
              <v-card flat style="height: 40rem">
                <v-card-text>Floor 1: Floor Plan and Information</v-card-text>
                <img src="../assets/live/floor1.svg" style="width: 50%" />
              </v-card>
            </v-tab-item>
            <v-tab-item :key="3">
              <v-card flat style="height: 40rem">
                <v-card-text>Floor 2: Floor Plan and Information</v-card-text>
                <img src="../assets/live/floor2.svg" style="width: 50%" />
              </v-card>
            </v-tab-item>
            <v-tab-item :key="4">
              <v-card flat style="height: 40rem">
                <v-card-text>Floor 3: Floor Plan and Information</v-card-text>
                <img src="../assets/live/floor3.svg" style="width: 50%" />
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </div>
    <div class="dividers">
      <img src="../assets/shapes/divider.png" alt class="divider-image" />
    </div>
    <div id="workshops">
      <div class="flex-container early">
        <div class="container information">
          <v-data-table
            :headers="headers"
            :items="desserts"
            hide-default-header
            hide-default-footer
            class="elevation-1"
          ></v-data-table>
        </div>
        <div class="text-container">
          <div
            style="font-size: 2.5rem; text-align: center; color: black; font-weight: bold"
          >
            Workshops
          </div>
          <img
            src="../assets/live/icons/workshop.svg"
            alt
            style="width: 80%;
          margin-left: 10%"
          />
        </div>
      </div>
    </div>
    <div class="dividers">
      <img src="../assets/shapes/divider.png" alt class="divider-image" />
    </div>
    <div id="prizes">
      <div class="container">
        <div style="font-size: 3rem; text-align: center; font-weight: bold">
          <img
            src="../assets/live/icons/trophy.svg"
            alt
            style="height: 3rem"
          />Prizes
          <img src="../assets/live/icons/trophy.svg" alt style="height: 3rem" />
        </div>
      </div>
      <br />
      <div class="flex-container card-container">
        <div class="card third">
          <h3>Best Overall Hack</h3>
          <p>Drone</p>
          <p>For the best overall hack made during the event!</p>
        </div>
        <div class="card third">
          <h3>Second Overall Hack</h3>
          <p>Drone</p>
          <p>For the best overall hack made during the event!</p>
        </div>
        <div class="card third">
          <h3>Third Overall Hack</h3>
          <p>Drone</p>
          <p>For the best overall hack made during the event!</p>
        </div>
      </div>
      <div class="flex-container card-container">
        <div class="card quarter">
          <h3>Others</h3>
          <p>Drone</p>
          <p>For the best overall hack made during the event!</p>
        </div>
        <div class="card quarter">
          <h3>Others</h3>
          <p>Drone</p>
          <p>For the best overall hack made during the event!</p>
        </div>
        <div class="card quarter">
          <h3>Others</h3>
          <p>Drone</p>
          <p>For the best overall hack made during the event!</p>
        </div>
        <div class="card quarter">
          <h3>Others</h3>
          <p>Drone</p>
          <p>For the best overall hack made during the event!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LiveNavBar from "../components/LiveNavBar";
export default {
  data() {
    return {
      active: null,
      headers: [
        {
          text: "Event",
          align: "start",
          value: "name"
        },
        { text: "Time", value: "calories" },
        { text: "Room", value: "fat" }
      ],
      desserts: [
        {
          name: "Raytheon: Engineering with Neural Networks",
          calories: "1:30pm - 2:30pm",
          fat: "Room 310"
        },
        {
          name: "Raytheon: Engineering with Neural Networks",
          calories: "1:30pm - 2:30pm",
          fat: "Room 310"
        },
        {
          name: "Raytheon: Engineering with Neural Networks",
          calories: "1:30pm - 2:30pm",
          fat: "Room 310"
        },
        {
          name: "Raytheon: Engineering with Neural Networks",
          calories: "1:30pm - 2:30pm",
          fat: "Room 310"
        },
        {
          name: "Raytheon: Engineering with Neural Networks",
          calories: "1:30pm - 2:30pm",
          fat: "Room 310"
        },
        {
          name: "Raytheon: Engineering with Neural Networks",
          calories: "1:30pm - 2:30pm",
          fat: "Room 310"
        },
        {
          name: "Raytheon: Engineering with Neural Networks",
          calories: "1:30pm - 2:30pm",
          fat: "Room 310"
        }
      ]
    };
  },
  components: {
    LiveNavBar
  },
  methods: {
    next() {
      const active = parseInt(this.active);
      this.active = (active < 2 ? active + 1 : 0).toString();
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.dividers {
  background: #ff8484;
  height: 10rem;
}

.divider-image {
  object-fit: cover;
  height: 10rem;
  width: 100%;
}

.shape {
  height: 7rem;
  position: relative;
}

#home,
#schedule,
#workshops {
  padding-top: 4.5rem;
  background: #fff7c8;
  padding-bottom: 4rem;
}

#faq,
#map,
#prizes {
  padding-top: 4.5rem;
  background: #fff7c8;
  padding-bottom: 4rem;
}

p {
  margin: 0 !important;
  padding: 0 !important;
}

.container {
  margin: auto;
  max-width: 80rem;
}
.flex-container {
  margin: auto;
  max-width: 80rem;
  display: flex;
  flex-direction: row;
}

.text-container {
  width: 25rem;
}

.half {
  flex: 6;
}
.third {
  flex: 4;
}
.quarter {
  flex: 3;
}

.data-row {
  display: flex;
  flex-direction: row;
}

.time {
  width: 6rem;
}

.title {
  margin-left: 1rem;
}

.card {
  margin: 0.5rem 1rem;
  background: white;
  padding: 1rem;
  border-radius: 0.1rem;
  box-shadow: 0 20px 55px 0 rgba(100, 100, 100, 0.5) !important;
}

.curved-shadow {
  border-radius: 0.5rem;
  box-shadow: 0 20px 55px 0 rgba(100, 100, 100, 0.5) !important;
}
.curved-shadow-top {
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  box-shadow: 0 20px 55px 0 rgba(100, 100, 100, 0.5) !important;
}
.curved-shadow-bottom {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: 0 20px 55px 0 rgba(100, 100, 100, 0.5) !important;
}

@media (max-width: 72rem) {
  #header {
    flex-direction: column;
  }

  #header .quarter {
    margin: auto;
    width: 30%;
  }

  #header .half {
    text-align: center;
    padding-top: 1rem !important;
  }

  .text-container {
    order: 1;
    width: 100%;
    margin-top: 0rem !important;
  }

  .text-container img {
    display: none;
  }

  .information {
    order: 2;
  }

  .early {
    flex-direction: column;
  }
}

@media (max-width: 52.5rem) {
  #header .half span {
    font-size: 3.5rem !important;
  }

  #header .half p {
    font-size: 1.5rem !important;
  }

  #header .quarter {
    margin: auto;
    width: 50%;
  }

  .card-container {
    flex-direction: column;
  }

  .dividers {
    height: 5rem;
  }

  .divider-image {
    height: 5rem;
  }
}

@media (max-width: 32.5rem) {
  #header .half span {
    font-size: 2.5rem !important;
  }

  #header .half p {
    font-size: 1rem !important;
  }
}

.v-slide-group__prev {
  display: none !important;
}
</style>
