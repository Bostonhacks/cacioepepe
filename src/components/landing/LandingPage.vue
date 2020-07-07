<template>
  <v-layout class="d-inline">
    <header style="background: #80d2ff">
      <div class="flexc" style="justify-content: flex-end; margin: 0;">
        <div style="padding-top:0; padding-right: 1rem">
          <a
            id="mlh-trust-badge"
            rel="noreferrer"
            href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2020-season&amp;utm_content=gray"
            target="_blank"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-gray.svg"
              alt="Major League Hacking 2020 Hackathon Season"
              style="width: 5rem"
              id="mlh"
            />
          </a>
        </div>
      </div>
    </header>

    <div id="home" style="padding-bottom: 0px, margin-bottom: 0px">
      <div class="flexc" style="margin: 0; justify-content: space-between">
        <img
          src="../../assets/landing/cloud1.png"
          alt="cloud1"
          style="width: 18rem; position: relative; top: -5rem; left: 7rem;"
          id="c11"
          class="cloud"
        />
        <img
          src="../../assets/landing/cloud1.png"
          alt="cloud1"
          style="width: 18rem; position: relative; top: 10rem; right: 7rem"
          id="c12"
          class="cloud"
        />
      </div>
      <div class="container">
        <div class="flexc" style="justify-content: center">
          <h2
            style="font-size: 2rem; text-align: center; color: white; font-weight: bold; margin-top: -3rem"
          >
            We're turning 6.
            <br />And you're invited <br />to our virtual hackathon!
          </h2>
        </div>
        <div class="flexc" style="justify-content: center">
          <v-btn rounded depressed @click="login()">Login</v-btn>
        </div>
      </div>
      <div class="container">
        <div
          class="flexc headerFlex"
          style="justify-content: space-between; height: 9rem"
        >
          <img
            class="feliz"
            src="@/assets/landing/feliz.png"
            alt="pinata"
            width="352"
            height="640"
            style="margin-top: -20rem; width: 22rem"
          />
          <div class="sponsor-flexc" style="width: 22rem">
            <div class="sponsor-info">
              <h2
                style="font-size: 1.5rem; text-align: center; color: white; font-weight: bold"
              >
                Interested in Sponsoring?
              </h2>
              <h2
                style="font-size: 1.25rem; text-align: center; color: white; font-weight: normal"
              >
                We’d love to have you on board. Contact us at
                sponsor@bostonhacks.io or check out our sponsor document!
              </h2>
              <div class="flexc" style="justify-content: center">
                <v-btn depressed rounded @click="sponsor()">Learn more</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="curve1 flexc"
        style="margin:0; justify-content: space-between"
      >
        <div style="margin: 0;">
          <img
            src="../../assets/landing/cloud2.png"
            alt="cloud2"
            style="width: 18rem; height: 8rem; position: relative; left: 5rem; top: -15rem;"
            id="c21"
            class="cloud"
          />
          <img
            src="../../assets/landing/hotair1.png"
            alt="hotair1"
            style="position: relative; left: -5rem; top: 17rem; height: 32rem"
            id="ha1"
          />
        </div>

        <img
          src="../../assets/landing/hotair2.png"
          alt="hotair2"
          style="position: relative; right: 6rem; height: 20rem;"
          id="ha2"
        />
      </div>
    </div>

    <div id="tracks" style="margin-top: 0; padding-top: 0;">
      <div class="container">
        <h2
          style="color: white; text-align: center; font-weight: bold; font-size: 2rem;"
        >
          Tracks and Work­shops
        </h2>
        <div class="flexc" style="justify-content: flex-end">
          <div class="tracks-info">
            <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
              Conservation for Society
            </h2>
            <p style="font-size: 1.25rem; color: white; font-weight: normal">
              Scientists continue to release research about the effects humans
              have on varying types of pollution. What can be done to facilitate
              research, increase awareness, lessen our carbon footprint, and in
              general just leave earth in a better state than we found it?
            </p>
          </div>
        </div>
        <div class="flexc" style="justify-content: center">
          <div class="tracks-info">
            <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
              Smart Home
            </h2>
            <p style="font-size: 1.25rem; color: white; font-weight: normal">
              Quarantine has us realizing that the home is not as efficient and
              optimized as it could be. How can we incorporate software and
              hardware to create a more comprehensive experience at home?
            </p>
          </div>
        </div>
        <div class="flexc" style="justify-content: flex-start">
          <div class="tracks-info">
            <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
              Fit-Tech
            </h2>
            <p style="font-size: 1.25rem; color: white; font-weight: normal">
              Current fitness tech encourages people to stay indoors (Peloton,
              online classes), or simply tracks data and provides analytics. How
              can we revamp fitness with technology that makes exercise more
              interactive and engaging, giving people more excuses to enjoy the
              outdoors?
            </p>
          </div>
        </div>
      </div>
      <div
        class="flexc"
        style="width: 100%; margin: 0; justify-content: space-between"
      >
        <img
          src="../../assets/landing/cloud2.png"
          alt="cloud2"
          style="width: 18rem; position: relative; top: 0rem; left: 5rem;"
          id="c22"
          class="cloud"
        />
        <img
          src="../../assets/landing/cloud2.png"
          alt="cloud2"
          style="width: 18rem; position: relative; top: -25rem; right: 5rem;"
          id="c23"
          class="cloud"
        />
      </div>
      <div class="curve2">
        <div class="flexc" style="justify-content: space-between">
          <div>
            <img
              src="../../assets/landing/tree.png"
              alt="tree"
              style="height: 17rem;position: relative;"
              class="tree"
              id="t1"
            />
            <img
              src="../../assets/landing/tree.png"
              alt="tree"
              style="height: 17rem;position: relative; top: 10rem; left: 1rem;"
              class="tree"
              id="t2"
            />
          </div>
          <img
            src="../../assets/landing/windmill.png"
            alt="windmill"
            height="800"
            style="margin-top: -24rem; margin-right: 5rem;"
            class="windmill"
          />
        </div>
      </div>
    </div>

    <div id="schedule">
      <div class="container">
        <h2
          class="display-1"
          style="color: white; text-align: center; font-weight: bold; margin: 0;"
        >
          Schedule
        </h2>
        <br />
        <div class="schedulec">
          <div class="sevent" style="color: white">7:00AM Event Starts</div>
          <div class="sevent" style="color: white">8:00AM Event Continues</div>
          <div class="sevent" style="color: white">9:00AM Still Continues!</div>
          <div class="sevent" style="color: white">
            10:00AM Still Continues!
          </div>
          <div class="sevent" style="color: white">
            11:00AM Still Continues!
          </div>
          <div class="sevent" style="color: white">12:00PM End!</div>
        </div>
      </div>
      <div class="flexc" style="justify-content: space-between">
        <div>
          <img
            src="../../assets/landing/tree.png"
            alt="tree"
            style="height: 17rem; position: relative; left: 5rem; top: -13rem;"
            class="tree"
            id="t3"
          />
          <img
            src="../../assets/landing/tree.png"
            alt="tree"
            style="height: 17rem;position: relative; left: 5rem; top: 3rem;"
            class="tree"
            id="t4"
          />
        </div>
        <img
          src="../../assets/landing/pond.png"
          alt="tree"
          style="height: 13rem; margin-top: 4rem; margin-right: 4rem;"
          id="pond"
        />
      </div>
      <div class="curve3"></div>
    </div>

    <div id="FAQ">
      <h2
        class="display-1"
        style="color: white; text-align: center; font-weight: bold"
      >
        Frequently Asked Questions
      </h2>
      <div class="container faq-grid">
        <div class="qna">
          <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
            What is BostonHacks?
          </h2>
          <p style="font-size: 1.25rem; color: white; font-weight: normal">
            BostonHacks is a 36-hour event where students from different
            backgrounds gather together to use technology to create cool
            projects. Come to BostonHacks to expand your knowledge and skills,
            make new friends, win prizes and network with recruiters from our
            corporate sponsors!
          </p>
        </div>
        <div class="qna">
          <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
            When and where is BostonHacks?
          </h2>
          <p style="font-size: 1.25rem; color: white; font-weight: normal">
            BostonHacks is a virtual 36-hour hackathon on November 14-15th,
            2020.
          </p>
        </div>
        <div class="qna">
          <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
            Who can attend?
          </h2>
          <p style="font-size: 1.25rem; color: white; font-weight: normal">
            All students including undergraduate, graduate and high school
            students with any background, all across the world are welcome!
          </p>
        </div>
        <div class="qna">
          <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
            Do I need experience?
          </h2>
          <p style="font-size: 1.25rem; color: white; font-weight: normal">
            No experience is necessary. We will have plenty of mentors and
            resources available, along with several workshops targeted for
            beginners. Come learn and experience your first hackathon at
            BostonHacks!
          </p>
        </div>
        <div class="qna">
          <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
            Does it cost anything?
          </h2>
          <p style="font-size: 1.25rem; color: white; font-weight: normal">
            BostonHacks is 100% free. You don’t have to spend a dime!
            Unfortunately, we won’t be providing any travel reimbursements this
            year.
          </p>
        </div>
        <div class="qna">
          <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
            Can we form teams?
          </h2>
          <p style="font-size: 1.25rem; color: white; font-weight: normal">
            Of course you can! We encourage people to work in teams of up to 5
            people. You may opt-in to team formation through our Slack Channel
            which will match you with an ideal team. You can work alone, but it
            won’t be the same.
          </p>
        </div>
        <div class="qna">
          <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
            Are there any rules?
          </h2>
          <p style="font-size: 1.25rem; color: white; font-weight: normal">
            We want to ensure a positive experience for all participants. We
            encourage you to read the Code of Conduct.
          </p>
        </div>
        <div class="qna">
          <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
            What do I need to bring?
          </h2>
          <p style="font-size: 1.25rem; color: white; font-weight: normal">
            Remember it’s an overnight event! You should bring your laptop,
            phone, chargers.
          </p>
        </div>
        <div class="qna">
          <h2 style="font-size: 1.5rem; color: white; font-weight: bold">
            What if I have a different question?
          </h2>
          <p style="font-size: 1.25rem; color: white; font-weight: normal">
            We’re here for you! Shoot us an email at contact@bostonhacks.io, or
            a message on any of our social media platforms.
          </p>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    sponsor() {
      this.$router.push("/sponsor");
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

.container {
  max-width: 1400px !important;
  margin: auto !important;
}

#home {
  background: #80d2ff;
}

#tracks {
  background: #aee2ff;
}

#schedule {
  background: #53d186;
}

#FAQ {
  background: #e6c8bc;
}

.flexc {
  display: flex;
  margin: 1rem 1rem;
}

.tracks-info {
  width: 32rem;
  padding: 0.5rem;
}

.schedulec {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sevent {
  text-align: center;
  padding: 0.5rem;
  font-size: 1.5rem;
}

.faq-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
}

.qna {
  padding: 1.5rem;
}

.curve1 {
  height: 16rem !important;
  width: 100% !important;
  background: url("../../assets/landing/wave.svg") no-repeat center bottom/cover !important;
  background-size: 100% 16rem !important;
}

.curve2 {
  height: 16rem !important;
  width: 100% !important;
  background: url("../../assets/landing/wave2.svg") no-repeat center
    bottom/cover !important;
  background-size: 100% 16rem !important;
}
.curve3 {
  height: 16rem !important;
  width: 100% !important;
  background: url("../../assets/landing/wave3.svg") no-repeat center
    bottom/cover !important;
  background-size: 100% 16rem !important;
}

@media screen and (max-width: 1650px) {
  #ha1 {
    left: -16rem !important;
  }
}

@media screen and (max-width: 1263px) {
  #ha1 {
    height: 24rem !important;
    left: -16rem !important;
  }
  .tree {
    height: 15rem !important;
  }
  #c12 {
    right: 1rem !important;
  }
  #c21 {
    top: -6rem !important;
  }
  #t2 {
    left: -3rem !important;
  }
  #t4 {
    left: 0rem !important;
  }
  #pond {
    margin-right: 0 !important;
    height: 10rem !important;
  }
}

@media screen and (max-width: 1100px) {
  .windmill {
    margin-right: 1rem !important;
  }
  #t2 {
    left: 3rem !important;
    top: 3rem !important;
  }
  #t3 {
    left: -1rem !important;
    top: 5rem !important;
  }
  #t4 {
    left: 1rem !important;
    top: -1rem !important;
  }
  #ha1 {
    left: -18rem !important;
  }
  #c21 {
    left: 2rem !important;
  }
  #c23 {
    right: 1rem !important;
  }
}

@media screen and (max-width: 950px) {
  .headerFlex {
    justify-content: center !important;
    flex-direction: column-reverse;
    height: 50rem !important;
    width: 19rem !important;
    margin: auto;
  }

  .feliz {
    margin: 0rem !important;
    margin: auto;
    width: 19rem !important;
    height: 553px !important;
  }

  .sponsor-info {
    margin: 0 !important;
    width: 19rem;
  }

  .windmill {
    height: 650px !important;
    margin-right: 0 !important;
    margin-top: -20rem !important;
  }

  .faq-grid {
    grid-template-columns: auto;
  }
  .tree {
    height: 13rem !important;
  }
  .cloud {
    width: 10rem !important;
    height: 4.44rem !important;
  }
  #c11 {
    top: 16rem !important;
    left: 1rem !important;
  }
  #t2 {
    top: 4rem !important;
  }
  #ha2 {
    right: 0rem !important;
  }
  #ha1 {
    left: -15rem !important;
  }
  #pond {
    height: 7rem !important;
  }
}

@media screen and (max-width: 768px) {
  .windmill {
    margin-top: -7rem !important;
    height: 350px !important;
    margin-right: 0rem !important;
  }

  .tree {
    height: 7rem !important;
  }

  #pond {
    height: 7rem !important;
  }

  .cloud {
    display: none !important;
  }

  .curve1,
  .curve2,
  .curve3 {
    height: 10rem !important;
    background-size: 100% 10rem !important;
  }
  #ha1 {
    height: 12rem !important;
    left: 1rem !important;
    top: -1rem !important;
  }

  #ha2 {
    height: 9rem !important;
    top: -3rem !important;
  }
  #t4 {
    top: 2rem !important;
  }
}

@media screen and (max-width: 600px) {
  #pond {
    height: 4rem !important;
  }
}

@media screen and (max-width: 480px) {
  #mlh {
    width: 4rem !important;
  }
  .sponsor-info {
    width: 18rem !important;
    margin-left: 0.25rem !important;
  }
  .sponsor-flexc {
    width: 18rem !important;
  }
  .tree {
    height: 5rem !important;
  }
  #pond {
    height: 3rem !important;
  }
  #t1 {
    top: 2rem !important;
  }
  #t2 {
    top: 5rem !important;
    left: 0rem !important;
  }
  #t4 {
    left: -1rem !important;
  }
}
</style>
