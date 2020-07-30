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

export default {
  data() {
    return {
      date: new Date()
    };
  },
  components: {
    ApplicationUI,
    RefuseUI
  }
};
</script>
