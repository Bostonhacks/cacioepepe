<template>
  <!-- [Started, Submitted, Rejected, Waitlisted, Accepted, Confirmed, Declined, Checked In] -->
  <div class="timeline">
    <div class="timestamp" v-for="(item, i) in status" :key="i">
      <div class="status">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["applicationStatus"],
  mounted() {
    if (this.applicationStatus === null) {
      console.log("Not logged in");
    } else {
      this.status[this.applicationStatus].isCurrentStatus = true;
      console.log(this.applicationStatus);
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

<style scoped>
.timeline {
  margin: 50px 0;
  display: flex;
  text-align: center;
}
.timestamp {
  margin-bottom: 20px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 100;
}
.status {
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  border-top: 4px solid #e8eeff;
  position: relative;
}
.status span {
  font-weight: 600;
  padding-top: 20px;
}
.status span:before {
  content: "";
  width: 25px;
  height: 25px;
  background-color: #e8eeff;
  border-radius: 25px;
  border: 4px solid #e8eeff;
  position: absolute;
  top: -15px;
  left: calc(50% - 12px);
  transition: all 200ms ease-in;
}
</style>
