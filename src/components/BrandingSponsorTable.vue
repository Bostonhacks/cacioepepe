<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="brandings"
      hide-default-footer
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  name: "BrandingSponsorTable",
  data() {
    return {
      brandings: [
        {
          branding: "Distribute swag",
          twoPointFive: "✓",
          five: "✓",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          branding: "Give branded/API prize",
          twoPointFive: "✓",
          five: "✓",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          branding: "Logo on website & T-shirt",
          twoPointFive: "✓",
          five: "✓",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          branding: "Branded meal/event",
          twoPointFive: "",
          five: "",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          branding: "Sponsored Track (contact us!)",
          twoPointFive: "",
          five: "",
          sevenPointFive: "",
          fifteen: "✓"
        }
      ],
      headers: [
        {
          text: "Branding",
          align: "start",
          sortable: false,
          value: "branding",
          width: "300px"
        },
        {
          text: "",
          value: "twoPointFive",
          width: "100px",
          fixed: true,
          align: "center"
        },
        {
          text: "",
          value: "five",
          width: "100px",
          fixed: true,
          align: "center"
        },
        {
          text: "",
          value: "sevenPointFive",
          width: "100px",
          fixed: true,
          align: "center"
        },
        {
          text: "",
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
