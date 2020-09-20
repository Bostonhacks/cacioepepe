<template>
  <!-- [Started, Submitted, Rejected, Waitlisted, Accepted, Confirmed, Declined, Checked In] -->
  <div></div>
</template>
<script>
export default {
  props: ["applicationStatus"],
  mounted() {
    if (this.applicationStatus === null) {
      console.log("Not logged in");
    } else {
      this.status[this.applicationStatus].isCurrentStatus = true;
    }
  },
  data() {
    return {
      status: [
        {
          name: "Started",
          isCurrentStatus: false
        },
        {
          name: "Submitted",
          isCurrentStatus: false
        },
        {
          name: "Rejected",
          isCurrentStatus: false
        },
        {
          name: "Waitlisted",
          isCurrentStatus: false
        },
        {
          name: "Accepted",
          isCurrentStatus: false
        },
        {
          name: "Confirmed",
          isCurrentStatus: false
        },
        {
          name: "Declined",
          isCurrentStatus: false
        },
        {
          name: "Checked In",
          isCurrentStatus: false
        }
      ]
    };
  }
};
</script>

<style scoped></style>
