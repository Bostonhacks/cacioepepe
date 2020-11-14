<template>
  <div id="Mentors">
    <v-row class="justify-center">
      <v-container class="justify-center align-center">
        <v-card class="mx-auto">
          <v-toolbar color="deep-orange" dark class="d-flex justify-center">
            <v-toolbar-title class="display-1 font-weight-bold"
              >Challenges</v-toolbar-title
            >
          </v-toolbar>
          <v-text-field
            class="mx-12"
            v-model="searchM"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
          <div class="mx-8">
            <v-list three-line>
              <template v-for="(mentor, index) in filteredItemsM">
                <v-subheader
                  v-if="mentor.header"
                  :key="mentor.header"
                  v-text="mentor.header"
                ></v-subheader>

                <v-divider
                  v-else-if="mentor.divider"
                  :key="index"
                  :inset="mentor.inset"
                ></v-divider>

                <v-list-item v-else :key="mentor.title">
                  <v-list-item-avatar>
                    <v-avatar>
                      <v-icon orange>
                        mdi-alarm
                      </v-icon>
                    </v-avatar>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title
                      v-html="mentor.title"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="mentor.description"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </div>
        </v-card>
      </v-container>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mentorList: [
        { header: "Challenge List" },
        {
          value: "Best Use of Twilio API",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Best Use of Twilio API",
          description: "Price: Logitech C925e Webcam"
        },
        { divider: true, inset: true },
        {
          value: "Best Use of Google Cloud - Use any Google Cloud product",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Best Use of Google Cloud - Use any Google Cloud product",
          description:
            "Price: Google Cloud branded backpack, water bottle, and trophy"
        },
        { divider: true, inset: true },
        {
          value: "Prizes for incorporating echoAR platform",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Prizes for incorporating echoAR platform",
          description:
            "Price: $50 Amazon gift card per team 1-month free Business Tier access (per team member) Selected projects will be featured on our “Inspiration” Page"
        },
        { divider: true, inset: true },
        {
          value: "BostonHacks Best FitTech Track",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "BostonHacks Best FitTech Track",
          description: "Price: JBL Speaker"
        },
        { divider: true, inset: true },
        {
          value: "BostonHacks Best Conservation for Society",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "BostonHacks Best Conservation for Society",
          description: "Price: Self cleaning water bottle"
        },
        { divider: true, inset: true },
        {
          value: "BU Spark! Fellowship Grant",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "BU Spark! Fellowship Grant",
          description:
            "Price: BU Spark! will provide grant stipends of $4500 to continue their project by participating in the Spark! Fellowship Program Spring Semester. To be eligible, the winners must be Boston University Students and each team member can receive a maximum of $1500 individually or up to $4500 as a group."
        },
        { divider: true, inset: true },
        {
          value: "Best Use of Google Cloud - COVID-19 Hackathon Fund",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Best Use of Google Cloud - COVID-19 Hackathon Fund",
          description:
            "Price: Select projects may receive an invitation to apply to the Google Cloud COVID-19 hackathon fund awarding up to $5,000 in cloud credits and guidance from Google developers"
        },
        { divider: true, inset: true },
        {
          value: "BostonHacks Best General Hack",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "BostonHacks Best General Hack",
          description: "Price: Airpod Pros"
        },
        { divider: true, inset: true },
        {
          value: "BostonHacks Best Smart Home Track",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "BostonHacks Best Smart Home Track",
          description: "Price: Projector"
        }
      ],
      null: "No result",
      searchM: "",
      searchItemM: []
    };
  },
  mounted() {
    this.searchItemM = this.mentorList;
  },
  computed: {
    mentor() {
      return this.$store.state.mentor;
    },
    filteredItemsM() {
      return this.searchItemM.filter(item => {
        if ("value" in item) {
          return item.value.toLowerCase().match(this.searchM);
        } else {
          return this.null;
        }
      });
    }
  }
};
</script>
