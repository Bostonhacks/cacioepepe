<template>
  <v-data-table
    disable-pagination
    disable-sort=""
    :headers="headers"
    :items="testData"
  ></v-data-table>
</template>
<script>
export default {
  name: "GeneralSponsorTable",
  data() {
    return {
      headers: [
        {
          text: "Sponsorship Benefits",
          value: "name"
        },
        {
          text: "$1.5k",
          value: "onePointFive"
        },
        {
          text: "$3k",
          value: "three"
        },
        {
          text: "$5k",
          value: "five"
        },
        {
          text: "$7.5k",
          value: "sevenPointFive"
        }
      ],
      testData: [
        {
          name: "General"
        },
        {
          name: "Table Space",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "General Email",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Bring API/Hardware",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Bring Mentors",
          onePointFive: "2",
          three: "4",
          five: "∞",
          sevenPointFive: "∞"
        },
        {
          name: "Give a Workshop",
          onePointFive: "",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Host a Special Side Event",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Speak at Opening Ceremony",
          onePointFive: "",
          three: "2 min",
          five: "4 min",
          sevenPointFive: "8 min"
        },
        { name: "Recruiting" },
        {
          name: "Distribute Recruiting Materials",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Access to resumes",
          onePointFive: "",
          three: "Post-event",
          five: "Pre-event",
          sevenPointFive: "Pre-event"
        },
        {
          name: "Send Recruiters",
          onePointFive: "",
          three: "1",
          five: "2",
          sevenPointFive: "4"
        },
        {
          name: "Email Hackathon Attendees",
          onePointFive: "",
          three: "",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Branding"
        },
        {
          name: "Distribute Swag",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Give Branded/API Prize",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Logo on Website & T-Shirt",
          onePointFive: "✓",
          three: "✓",
          five: "✓",
          sevenPointFive: "✓"
        },
        {
          name: "Branded Meal/Event",
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
td:nth-child(odd) {
  background-color: #ecd5cc;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 1em !important;
}

td:nth-child(even) {
  background-color: #e6c7bb;
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 1em !important;
}

td:first-child {
  background-color: #4abb79;
  color: white !important;
  text-align: left;
  font-size: 1em !important;
}

tbody > tr:nth-child(1) > td:nth-child(1) {
  background-color: #4abb79;
  color: white !important;
  text-align: left;
  font-weight: bold;
  font-size: 2em !important;
}

tbody > tr:nth-child(9) > td:nth-child(1) {
  background-color: #4abb79;
  color: white !important;
  text-align: left;
  font-weight: bold;
  font-size: 2em !important;
}

tbody > tr:nth-child(14) > td:nth-child(1) {
  background-color: #4abb79;
  color: white !important;
  text-align: left;
  font-weight: bold;
  font-size: 2em !important;
}

th {
  color: black !important;
  font-size: 1.5em !important;
  font-weight: bold !important;
}
</style>
