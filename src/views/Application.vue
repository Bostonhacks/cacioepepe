<template>
  <div v-if="'date' < 'deadline'">
    <RefuseUI />
  </div>
  <div v-else>
    <ApplicationUI />
  </div>
</template>

<script>
import ApplicationUI from "@/components/hacker/ApplicationUI";
import RefuseUI from "@/components/reject/RefuseUI";
import Timeline from "@/components/common/Timeline";

export default {
  data() {
    return {
      deadline: Timeline.data.date2,
      date: new Date()
    };
  },
  components: {
    ApplicationUI,
    RefuseUI
  }
};
</script>
