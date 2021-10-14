<template>
  <div>
    <v-sheet></v-sheet>

    <v-data-table
      class="my-table"
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="sponsorshipBenefit"
      :items="generalData"
    ></v-data-table>
    <v-container>
      <br />
    </v-container>
    <!-- <v-data-table
      class="my-table"
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="recruitingHeader"
      :items="recruitingData"
    >
    </v-data-table>
    <v-container>
      <br />
    </v-container>
    <v-data-table
      class="my-table"
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="brandingHeader"
      :items="brandingData"
    ></v-data-table>-->
  </div>
</template>
<script>
export default {
  name: "GeneralSponsorTable",
  data() {
    return {
      sponsorshipBenefit: [
        {
          text: "SPONSORSHIP BENEFIT",
          value: "name",
          width: "20%"
        },
        {
          text: "$1.5k",
          value: "onePointFive",
          width: "18%"
        },
        {
          text: "$3k",
          value: "three",
          width: "18%"
        },
        {
          text: "$5k",
          value: "five",
          width: "18%"
        },
        {
          text: "$7.5k",
          value: "sevenPointFive",
          width: "18%"
        }
      ],

      generalHeader: [
        {
          text: "General",
          value: "name",
          width: "15%"
        },

        {
          text: "Recruit",
          value: "name",
          width: "15%"
        },

        {
          text: "Branding",
          value: "name",
          width: "15%"
        }
      ],
      recruitingHeader: [
        {
          text: "Recruit",
          value: "name",
          width: "15%"
        }
      ],
      brandingHeader: [
        {
          text: "Branding",
          value: "name",
          width: "15%"
        }
      ],
      generalData: [
        {
          name: "General email*",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Bring API",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Bring mentors",
          onePointFive: "2",
          three: "4",
          five: "∞",
          sevenPointFive: "∞"
        },
        {
          name: "Host special side challenge**",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Speak at opening ceremony (can be pre-recorded or live)",
          onePointFive: "",
          three: "2 min",
          five: "4 min",
          sevenPointFive: "8 min"
        },

        {
          name: "Access to emails to distribute recruiting materials",
          onePointFive: "Post-event",
          three: "Post-event",
          five: "Pre-event",
          sevenPointFive: "Pre-event"
        },
        {
          name: "Access to resumes",
          onePointFive: "",
          three: "Post-event",
          five: "Pre-event",
          sevenPointFive: "Pre-event"
        },
        {
          name: "Bring recruiters",
          onePointFive: "",
          three: "1",
          five: "2",
          sevenPointFive: "4"
        },
        {
          name: "Virtual interview Rooms",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Email hackathon attendees",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Distribute swag",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Give branded/API prize",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Logo on website & T-Shirt",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Branded virtual event",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Sponsored Track (contact us!)",
          onePointFive: "",
          three: "",
          five: "",
          sevenPointFive: "✓"
        }
      ],
      recruitingData: [
        {
          name: "Access to emails to distribute recruiting materials",
          onePointFive: "Post-event",
          three: "Post-event",
          five: "Pre-event",
          sevenPointFive: "Pre-event"
        },
        {
          name: "Access to resumes",
          onePointFive: "",
          three: "Post-event",
          five: "Pre-event",
          sevenPointFive: "Pre-event"
        },
        {
          name: "Bring recruiters",
          onePointFive: "",
          three: "1",
          five: "2",
          sevenPointFive: "4"
        },
        {
          name: "Virtual interview Rooms",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Email hackathon attendees",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        }
      ],
      brandingData: [
        {
          name: "Distribute swag",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Give branded/API prize",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Logo on website & T-Shirt",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Branded virtual event",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Sponsored Track (contact us!)",
          onePointFive: "",
          three: "",
          five: "",
          sevenPointFive: "✓"
        }
      ]
    };
  }
};
</script>
<style>
.my-table {
  table-layout: fixed;
  background-color: transparent;
}
td:nth-child(odd) {
  background: #e5e5e5;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1em !important;
}

td:nth-child(even) {
  background: #e5e5e5;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 1em !important;
}

td:first-child {
  background: #e5e5e5;
  color: white !important;
  text-align: left;
  font-size: 1em !important;
}

th {
  background: #e5e5e5;
  color: white !important;
  font-size: 1.5em !important;
  font-weight: bold !important;
}
</style>
