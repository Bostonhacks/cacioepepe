<template>
  <div v-if="'parseDate(date)' > 'parseDate(dealine)'">
    <RefuseUI />
  </div>
  <div v-else>
    <ApplicationUI />
  </div>
</template>

<script>
import ApplicationUI from "@/components/hacker/ApplicationUI";
import RefuseUI from "@/components/reject/RefuseUI";
import { functions } from "@/firebase/init";

export default {
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      deadline: ""
    };
  },
  async mounted() {
    this.getDate();
  },
  methods: {
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    async getDate() {
      var out = await functions.httpsCallable("readDeadline")({});
      this.deadline = out.data["finishTime"];
      console.log(this.date);
      console.log(this.deadline);
    }
  },
  components: {
    ApplicationUI,
    RefuseUI
  }
};
</script>
