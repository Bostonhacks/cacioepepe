<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="generals"
      hide-default-footer
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  name: "GeneralSponsorTable",
  data() {
    return {
      generals: [
        {
          general: "Table Space",
          twoPointFive: "✓",
          five: "✓",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          general: "General Email",
          twoPointFive: "✓",
          five: "✓",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          general: "Bring API/Hardware",
          twoPointFive: "  ✓  ",
          five: "✓",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          general: "Bring Mentors",
          twoPointFive: 2,
          five: 4,
          sevenPointFive: "∞",
          fifteen: "∞"
        },
        {
          general: "Give a Workshop",
          twoPointFive: "",
          five: "✓",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          general: "Host Special Side Event",
          twoPointFive: "",
          five: "",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          general: "Speak at Opening Ceremony",
          twoPointFive: "",
          five: "2 min",
          sevenPointFive: "4 min",
          fifteen: "8 min"
        }
      ],
      headers: [
        {
          text: "General",
          align: "start",
          sortable: false,
          value: "general",
          width: "300px"
          // font-size: "30px"
        },
        {
          text: "$2.5K",
          value: "twoPointFive",
          width: "100px",
          fixed: true,
          align: "center"
        },
        {
          text: "$5k",
          value: "five",
          width: "100px",
          fixed: true,
          align: "center"
        },
        {
          text: "$7.5K",
          value: "sevenPointFive",
          width: "100px",
          fixed: true,
          align: "center"
        },
        {
          text: "$15K",
          value: "fifteen",
          width: "100px",
          fixed: true,
          align: "center"
        }
      ]
    };
  }
};
</script>
<style>
table.v-table thead th {
  font-size: 30px !important;
}
</style>
