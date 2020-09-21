<template>
  <div v-if="'parseDate(date)' > 'parseDate(deadline)'">
    <RefuseUI />
  </div>
  <div v-else>
    <ApplicationUI />
  </div>
</template>

<script>
import ApplicationUI from "@/components/hacker/ApplicationUI";
import RefuseUI from "@/components/reject/RefuseUI";
import { db } from "@/firebase/init";

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
      // readDeadline
      const deadlineDb = db.collection("admin").doc("regDeadline");
      var deadlineDoc = await deadlineDb.get();
      var out = deadlineDoc.data();
      this.deadline = out["finishTime"];
    }
  },
  components: {
    ApplicationUI,
    RefuseUI
  }
};
</script>
