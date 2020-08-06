<template>
  <div>
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Recruiting</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in recruitings" :key="item.general">
            <td>{{ item.recruiting }}</td>
            <td class="text-center">{{ item.twoPointFive }}</td>
            <td class="text-center">{{ item.five }}</td>
            <td class="text-center">{{ item.sevenPointFive }}</td>
            <td class="text-center">{{ item.fifteen }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  name: "RecruitingSponsorTable",
  data() {
    return {
      recruitings: [
        {
          recruiting: "Distribute recruiting materials",
          twoPointFive: "✓",
          five: "✓",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          recruiting: "Access to resumes",
          twoPointFive: "",
          five: "Post-event",
          sevenPointFive: "Pre-event",
          fifteen: "Pre-event"
        },
        {
          recruiting: "Send recruiters",
          twoPointFive: "",
          five: 1,
          sevenPointFive: 2,
          fifteen: 4
        },
        {
          recruiting: "Interview room onsite",
          twoPointFive: "",
          five: "",
          sevenPointFive: "✓",
          fifteen: "✓"
        },
        {
          recruiting: "Email hackathon attendees",
          twoPointFive: "",
          five: "",
          sevenPointFive: "✓",
          fifteen: "✓"
        }
      ],
      headers: [
        {
          text: "Recruiting",
          align: "start",
          sortable: false,
          value: "recruiting",
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
