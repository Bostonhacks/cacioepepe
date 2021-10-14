<template>
  <div
    :class="$vuetify.breakpoint.mobile ? `table-shadow-mobile` : `table-shadow`"
  >
    <v-data-table
      :class="$vuetify.breakpoint.mobile ? `my-table-mobile` : `my-table`"
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="sponsorshipBenefit"
      :items="generalData"
    ></v-data-table>
  </div>
  <!-- <v-container>
      <br />
    </v-container> -->
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
  background-color: transparent !important;
  color: #f7f7f7 !important;
  position: relative;
  padding: 10px 20px;
  top: -3rem;
  right: -2rem;
  background: linear-gradient(
    54.26deg,
    rgba(255, 220, 129, 0.68) -0.7%,
    rgba(239, 121, 135, 0.46) 70.5%
  );
  border-radius: 11px;
}

.my-table-mobile {
  background-color: transparent !important;
  color: #f7f7f7 !important;
  position: relative;
  background: linear-gradient(
    54.26deg,
    rgba(255, 220, 129, 0.68) -0.7%,
    rgba(239, 121, 135, 0.46) 70.5%
  );
  border-radius: 11px;
}

.table-shadow {
  display: inline-block;
  border-radius: 11px;
  /* background: linear-gradient(180deg, #EC602D 0%, rgba(236, 96, 45, 0.86) 14.58%, #FFDA78 88.54%, #FFEBB7 100%); */
  background: linear-gradient(
    180deg,
    #ec602d 0%,
    rgba(236, 96, 45, 0.86) 50%,
    #ffda78 100%
  );
  overflow: visible;
}

.table-shadow-mobile {
  display: inline-block;
  border-radius: 11px;
  background: rgba(236, 96, 45, 0.86);
  overflow: visible;
}

div.my-table td,
div.my-table th {
  font-weight: bold;
  font-size: large !important;
  border: 1px solid white;
  border-bottom: 1px solid white !important;
}

.my-table tr:hover:not(.v-table__expanded__content) {
  background: transparent !important;
}

div.my-table span {
  color: #f7f7f7 !important;
  font-size: larger !important;
}

.button-1:hover {
  box-shadow: 0 0 10px 0 #ff7b46 inset, 0 0 20px 2px #ff7b46;
  border: 3px #ffcf93;
}
</style>
