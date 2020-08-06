<template>
  <v-simple-table dense fixed-header>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Branding</th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in brandings" :key="item.general">
          <td>{{ item.branding }}</td>
          <td class="text-center">{{ item.twoPointFive }}</td>
          <td class="text-center">{{ item.five }}</td>
          <td class="text-center">{{ item.sevenPointFive }}</td>
          <td class="text-center">{{ item.fifteen }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
