<template>
  <div v-scrollanimation>
    <Person1 class="person mb-n16" />
    <div class="crd-shadow">
      <div class="crd">
        <div class="title font-weight-bold text-h4">SCHEDULE</div>
        <div class="content">
          Coming Soon!
        </div>
        <!-- <div class="content">
          <h3>NOVEMBER 13</h3>
          <div v-for="event in events1" :key="event.message">
            {{ (event.time + " " + event.title).toUpperCase() }}
          </div>
          <h3>NOVEMBER 14</h3>
          <div v-for="event in events2" :key="event.message">
            {{ (event.time + " " + event.title).toUpperCase() }}
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Person1 from "@/components/landing/Person1.vue";
import { db } from "@/firebase/init";
export default {
  components: {
    Person1
  },
  data() {
    return {
      events1: null,
      events2: null
    };
  },
  async mounted() {
    const eventsDb = db.collection("admin").doc("schedules");
    var allEvents = await eventsDb.get();
    var out = allEvents.data().lists;
    if (out) {
      this.events1 = out["November 13"];
      this.events2 = out["November 14"];
    } else {
      this.events = {};
    }
    // console.log(this.events);
  }
};
</script>

<style scoped>
.crd {
  color: #f7f7f7;
  position: relative;
  padding: 10px 20px;
  top: -8px;
  left: -5px;
  background: linear-gradient(
    128.47deg,
    #ffa767 7.86%,
    rgba(255, 217, 116, 0.13) 79.44%
  );
  border-radius: 11px;
}

.crd-shadow {
  border-radius: 11px;
  background: #ec602d;
}
.title {
  text-align: right;
  margin-top: 10%;
  margin-bottom: 3%;
  margin-right: 5%;
}
.content {
  text-align: center;
  font-weight: 600;
}

.person {
  z-index: 1;
  position: relative;
  max-width: 50vw;
  margin-left: 1%;
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
