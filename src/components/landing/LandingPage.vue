<template>
  <main class="pt-70px blue">
    <div id="home" class="mb-n1 blue pt-16 pt-sm-0">
      <!-- spacing hack -->
      <v-row class="py-6 py-sm-0"></v-row>
      <v-container class="mt-5">
        <v-row justify="space-between" class="mx-md-n8 mb-n16">
          <v-col cols="4" class="pa-0">
            <Cloud9
              type="light"
              style=" position: relative"
              class="d-none d-sm-flex ml-sm-4 mt-n16"
            />
          </v-col>
          <v-col cols="4">
            <Cloud9
              type="light"
              style=" position: relative"
              class="d-none d-sm-flex ml-sm-4 mt-1 pt-16"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-n16">
        <v-row class="mt-n16 switchOnSmall">
          <v-col
            cols="5"
            offset="3"
            sm="3"
            offset-sm="2"
            class="mt-n16 d-flex align-content-end flex-column"
          >
            <Feliz
              alt="pinata"
              class="mt-5"
              style="max-height: 80vh; z-index: 1; position: relative"
            />
          </v-col>
          <v-col
            cols="8"
            offset="2"
            sm="4"
            offset-sm="0"
            class="text-center white--text basicTextShadow"
          >
            <BostonHacksLogoTextShadowed
              class="mb-5"
              z-index="1"
              style="position: relative; "
            />
            <h2>Come hack with us!</h2>
            <h2 class="mb-5">November 14-15th, 2020</h2>
            <v-btn
              rounded
              depressed
              x-large
              @click="() => this.navigate('/login')"
              class="text-center ma-5"
              v-if="!this.user"
              >Log In</v-btn
            >
            <v-btn
              rounded
              depressed
              x-large
              @click="() => this.navigate('/dashboard')"
              class="text-center ma-0"
              v-if="this.user"
              >Go To Dashboard</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row
          class="mt-0 mb-15 switchOnSmall"
          no-gutters
          justify="center"
          align="center"
        >
          <v-col cols="12" offset-sm="0" sm="5">
            <v-row
              justify="center"
              class="basicTextShadow white--text text-center font-weight-light"
            >
              <h2>Interested in Sponsoring?</h2>
              <p class="size-1-25">
                We’d love to have you on board. Contact us at
                <a class="white--text" href="mailto:sponsor@bostonhacks.io"
                  >sponsor@bostonhacks.io</a
                >
                or check out our sponsor document!
              </p>
            </v-row>
            <br />
            <v-row justify="center">
              <v-btn
                depressed
                rounded
                x-large
                @click="() => this.navigate('/sponsor')"
                >Learn more</v-btn
              >
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <Wave z-index="10" class="d-block mt-n16" />
    </div>

    <div
      id="tracks"
      class="pb-10 lightBlue darkBlue--text text--darken-2"
      style="text-shadow: 1px 1px 0.5px rgba(0,0,0,.2);"
    >
      <v-container>
        <v-row style="height: 0">
          <v-col cols="4" class="pa-0">
            <Cloud9
              alt="Blue Cloud"
              type="dark"
              style="position: relative; top: -4rem;"
            />
          </v-col>
        </v-row>
        <v-row no-gutters justify="space-between" style="height: 0">
          <v-col cols="2" sm="4" lg="3" xl="2">
            <RedHotAirBalloon
              class="mt-0 mt-15-sm"
              style="position: relative;"
            />
          </v-col>
          <v-col cols="3" lg="2" style="position: relative;" class="mt-n16">
            <div class="mt-n16" style="position: relative">
              <GreenHotAirBalloon class="mt-n16" style="position: relative; " />
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col>
            <h2 class="text-center mb-4 mb-sm-16 pb-xl-16 pt-xl-4 sectionTitle">
              Tracks
            </h2>
          </v-col>
        </v-row>
        <v-row justify="end" style="position: relative; z-index: 1">
          <v-col cols="12" sm="6" md="5" xl="4">
            <div>
              <h2>Conservation for Society</h2>
              <p>
                Scientists continue to release research about the effects humans
                have on varying types of pollution. What can be done to
                facilitate research, increase awareness, lessen our carbon
                footprint, and in general just leave earth in a better state
                than we found it?
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" style="position: relative; z-index: 1">
          <v-col cols="12" sm="6" md="5" xl="4">
            <h2>Smart Home</h2>
            <p>
              Quarantine has us realizing that the home is not as efficient and
              optimized as it could be. How can we incorporate software and
              hardware to create a more comprehensive experience at home?
            </p>
          </v-col>
        </v-row>
        <v-row justify="start" style="position: relative; z-index: 1">
          <v-col cols="12" sm="6" md="5" xl="4">
            <h2>Fit-Tech</h2>
            <p>
              Current fitness tech encourages people to stay indoors (Peloton,
              online classes), or simply tracks data and provides analytics. How
              can we revamp fitness with technology that makes exercise more
              interactive and engaging, giving people more excuses to enjoy the
              outdoors?
            </p>
          </v-col>
        </v-row>

        <v-row justify="space-between">
          <v-col cols="4" class="pa-0">
            <Cloud9
              type="dark"
              alt="Blue Cloud"
              style="position: relative; top: 0rem;"
            />
          </v-col>
          <v-col cols="4" class="pa-0">
            <Cloud9
              type="dark"
              style=" position: relative; top: -20rem; "
              class="d-none d-md-block"
            />
          </v-col>
        </v-row>
      </v-container>

      <Wave2 z-index="10" class="d-block mt-n16 mb-n11 pt-16" />
    </div>

    <div id="schedule" class="basicTextShadow white--text">
      <v-container>
        <v-row>
          <v-col>
            <Tree style="position: relative; margin-top: -13rem" />
          </v-col>
          <v-col>
            <Tree style="position: relative; margin-top: -5rem; " />
          </v-col>
          <v-col cols="5">
            <Windmill style="margin-top: -28rem" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h2 class="display-1 text-center font-weight-bold">
              Schedule for November
            </h2>
            <br />
          </v-col>
          <v-col cols="12">
            <!-- <v-sheet height="400" class="rounded-lg"> -->
            <v-calendar
              ref="calendar"
              :events="events"
              color="primary"
              type="custom-daily"
              start="2020-11-14"
              end="2020-11-15"
              class="rounded-lg"
              first-time="08:00"
              interval-count="16"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar color="red" dark>
                  <v-toolbar-title
                    v-html="selectedEvent.name"
                  ></v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="secondary" @click="selectedOpen = false">
                    close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
            <!-- </v-sheet> -->
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <Tree style="position: relative;  top: 7rem;" />
          </v-col>
          <v-col>
            <Tree style="position: relative;  top: 1rem;" />
          </v-col>
          <v-col cols="5"></v-col>
        </v-row>
      </v-container>

      <Wave4 z-index="10" class="d-block mt-n16 mb-n1" />
    </div>

    <div id="FAQ" class="white--text basicTextShadow green darken-1">
      <h2 class="display-1 pt-15 text-center font-weight-bold">
        Frequently Asked Questions
      </h2>
      <v-container class="pb-16">
        <v-row justify="start">
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>What is BostonHacks?</h2>
              <p>
                BostonHacks is a 36-hour event where students from different
                backgrounds gather together to use technology to create cool
                projects. Come to BostonHacks to expand your knowledge and
                skills, make new friends, win prizes and network with recruiters
                from our corporate sponsors!
              </p>
            </div>
          </v-col>
          <v-col cols="6" offset="2" md="4">
            <Tree style="position: relative; margin-top: 0rem" />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>When and where is BostonHacks?</h2>
              <p>
                BostonHacks is a virtual 36-hour hackathon on November 14-15th,
                2020.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="6" md="4">
            <Tree style="position: relative; margin-top: 0rem" />
          </v-col>
          <v-col cols="12" offset-md="2" offset-lg="4" md="6" lg="4">
            <div class="qna">
              <h2>Who can attend?</h2>
              <p>
                All students including undergraduate, graduate and high school
                students with any background, all across the world are welcome!
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>Do I need experience?</h2>
              <p>
                No experience is necessary. We will have plenty of mentors and
                resources available, along with several workshops targeted for
                beginners. Come learn and experience your first hackathon at
                BostonHacks!
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>Does it cost anything?</h2>
              <p>
                BostonHacks is 100% free. You don’t have to spend a dime!
                Unfortunately, we won’t be providing any travel reimbursements
                this year.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>Can we form teams?</h2>
              <p>
                Of course you can! We encourage people to work in teams of up to
                5 people. You may opt-in to team formation through our Slack
                Channel which will match you with an ideal team. You can work
                alone, but it won’t be the same.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>Are there any rules?</h2>
              <p>
                We want to ensure a positive experience for all participants. We
                encourage you to read the
                <a
                  href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                  alt="Our Code of Conduct"
                  class="white--text"
                  target="_blank"
                  rel="noreferrer"
                  >Code of Conduct.</a
                >
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <River />
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>What do I need to bring?</h2>
              <p>
                Remember it’s an overnight event! You should bring your laptop,
                phone, chargers.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col cols="12" md="6" lg="4">
            <div class="qna">
              <h2>What if I have a different question?</h2>
              <p>
                We’re here for you! Shoot us an email at
                <a href="mailto:contact@bostonhacks.io" class="white--text"
                  >contact@bostonhacks.io</a
                >, or a message on any of our social media platforms.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <Wave3 z-index="10" class="d-block" />
    </div>

    <div id="sponsors" class="pb-16 white--text basicTextShadow">
      <v-container>
        <h2 class="display-1 py-15 text-center font-weight-bold">
          Thank You To Our Sponsors!
        </h2>
        <v-row justify="center">
          <v-col cols="11" sm="7" md="5" lg="3">
            <Twilio />
          </v-col>

          <v-col cols="11" sm="7" md="5" lg="3">
            <RStudio />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </main>
</template>

<script>
import Wave from "@/components/common/SVG/Wave";
import Wave2 from "@/components/common/SVG/Wave2";
import Wave3 from "@/components/common/SVG/Wave3";
import Wave4 from "@/components/common/SVG/Wave4";
import Cloud9 from "@/components/common/SVG/Cloud9";
import Tree from "@/components/common/SVG/Tree";
import Windmill from "@/components/common/SVG/Windmill";
import RedHotAirBalloon from "@/components/common/SVG/RedHotAirBalloon";
import GreenHotAirBalloon from "@/components/common/SVG/GreenHotAirBalloon";
import BostonHacksLogoTextShadowed from "@/components/common/SVG/BostonHacksLogoTextShadowed";
import River from "@/components/common/SVG/River";
import Feliz from "@/components/common/SVG/Feliz";
import Twilio from "@/assets/sponsorlogos/Twilio.svg.vue";
import RStudio from "@/assets/sponsorlogos/RStudio.svg.vue";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    navigate(url) {
      window.scrollTo(0, 0);
      this.$router.push(`${url}`);
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    }
  },
  components: {
    Wave,
    Wave2,
    Wave3,
    Wave4,
    Cloud9,
    Tree,
    Windmill,
    RedHotAirBalloon,
    GreenHotAirBalloon,
    BostonHacksLogoTextShadowed,
    River,
    Feliz,
    Twilio,
    RStudio
  },
  data: () => ({
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    today: "2020-11-14",
    today2: "2020-11-15",
    maxDays: 2,
    weekdays: [5, 6],
    events: [
      {
        name: "Opening Ceremony",
        start: "2020-11-14 09:00",
        end: "2020-11-14 09:45",
        details: "More details coming soon!"
      },
      {
        name: "Team Formation",
        start: "2020-11-14 09:45",
        end: "2020-11-14 10:45",
        details: "More details coming soon!"
      },
      {
        name: "Hacking",
        start: "2020-11-14 10:45",
        end: "2020-11-14 11:45",
        details: "More details coming soon!"
      },
      {
        name: "Lunch Break",
        start: "2020-11-14 11:45",
        end: "2020-11-14 12:30",
        details: "More details coming soon!"
      },
      {
        name: "Workshop",
        start: "2020-11-14 12:30",
        end: "2020-11-14 13:30",
        details: "More details coming soon!"
      },
      {
        name: "Workshop",
        start: "2020-11-14 14:00",
        end: "2020-11-14 15:00",
        details: "More details coming soon!"
      },
      {
        name: "Workshop",
        start: "2020-11-14 15:30",
        end: "2020-11-14 16:30",
        details: "More details coming soon!"
      },
      {
        name: "Workshop",
        start: "2020-11-14 17:00",
        end: "2020-11-14 18:00",
        details: "More details coming soon!"
      },
      {
        name: "Dinner Break",
        start: "2020-11-14 18:00",
        end: "2020-11-14 18:30",
        details: "More details coming soon!"
      },
      {
        name: "Workshops",
        start: "2020-11-14 19:15",
        end: "2020-11-14 20:15",
        details: "More details coming soon!"
      },
      {
        name: "Workshops",
        start: "2020-11-14 20:45",
        end: "2020-11-14 21:45",
        details: "More details coming soon!"
      },
      {
        name: "Workshops",
        start: "2020-11-14 22:15",
        end: "2020-11-14 23:00",
        details: "More details coming soon!"
      },

      {
        name: "Morning Energizers",
        start: "2020-11-15 09:00",
        end: "2020-11-15 10:00",
        details: "More details coming soon!"
      },
      {
        name: "Brunch",
        start: "2020-11-15 10:30",
        end: "2020-11-15 11:30",
        details: "More details coming soon!"
      },
      {
        name: "Judging Sign-ups Open",
        start: "2020-11-15 12:00",
        end: "2020-11-15 12:00",
        details: "More details coming soon!"
      },
      {
        name: "Workshops",
        start: "2020-11-15 12:15",
        end: "2020-11-15 13:00",
        details: "More details coming soon!"
      },
      {
        name: "Judging Orientation",
        start: "2020-11-15 13:30",
        end: "2020-11-15 14:00",
        details: "More details coming soon!"
      },
      {
        name: "Judging Setup",
        start: "2020-11-15 14:00",
        end: "2020-11-15 14:45",
        details: "More details coming soon!"
      },
      {
        name: "Submissions and Signups Due",
        start: "2020-11-15 14:45",
        end: "2020-11-15 15:00",
        details: "More details coming soon!"
      },
      {
        name: "First Round Judging",
        start: "2020-11-15 15:30",
        end: "2020-11-15 17:00",
        details: "More details coming soon!"
      },
      {
        name: "Final Round Judging",
        start: "2020-11-15 18:00",
        end: "2020-11-15 19:00",
        details: "More details coming soon!"
      },
      {
        name: "Closing Ceremony",
        start: "2020-11-15 19:15",
        end: "2020-11-15 20:15",
        details: "More details coming soon!"
      },
      {
        name: "Loose Ends",
        start: "2020-11-15 20:15",
        end: "2020-11-15 21:15",
        details: "More details coming soon!"
      }
    ]
  })
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
#schedule {
  background: var(--v-green-base);
}
#sponsors {
  background: #683614;
}

.qna h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
.qna p {
  font-size: 1.25rem;
  font-weight: normal;
}

@media only screen and (max-width: 600px) {
  .switchOnSmall {
    flex-direction: column-reverse;
  }
}

.mt-n20em {
  margin-top: -20em;
}

.basicTextShadow {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.sectionTitle {
  font-weight: bold;
  font-size: 2.5rem;
}
.size-1-25 {
  font-size: 1.25em;
}
</style>
