<template>
  <div class="overflow-wrapper mt-0 mt-md-12">
    <v-row justify="center" class="my-16">
      <v-col cols="12" lg="4"><Logo /></v-col>
      <v-col cols="0" lg="1"></v-col>
      <v-col cols="12" lg="4"> <Section1 /></v-col>
    </v-row>
    <v-row v-if="!user" justify="center" class="my-16">
      <v-col cols="5" lg="2" class="d-flex justify-center"
        ><LoginButton />
      </v-col>
      <v-col cols="5" lg="2" class="d-flex justify-center"
        ><SignupButton />
      </v-col>
    </v-row>
    <v-row v-else justify="center" class="my-16">
      <v-col cols="5" lg="2" class="d-flex justify-center"
        ><LogoutButton />
      </v-col>
      <v-col cols="5" lg="2" class="d-flex justify-center"
        ><ApplyButton v-if="!user.applicationStatus" />
        <DashboardButton v-else />
      </v-col>
    </v-row>

    <v-row class="my-16">
      <v-col cols="0" lg="1"></v-col>
      <v-col cols="12" lg="6"><Schedule /></v-col>
    </v-row>
    <v-row justify="center" class="my-16">
      <v-col cols="10" lg="3"><Track1 /></v-col>
      <v-col cols="10" lg="3"><Track2 /></v-col>
      <v-col cols="10" lg="3"><Track3 /></v-col>
    </v-row>
    <v-row class="flex-row-reverse my-16">
      <v-col cols="0" lg="1"></v-col>
      <v-col cols="12" lg="6"><FAQ /></v-col>
    </v-row>
    <v-row class="mx-12 justify-center justify-lg-space-between">
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img
          margin-top="10px"
          src="@/components/sponsor/logos/SketchLogo.png"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/google_cloud.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/balsamiq.png" />
      </v-col>
    </v-row>
    <v-row class="mx-12 justify-center justify-lg-space-between">
      <v-col cols="12" md="6" lg="3" class="my-12">
        <Axure_logo_400 />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img
          margin-top="10px"
          src="@/components/sponsor/logos/thunkableLogo.png"
        />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/ReplitLogo.png" />
      </v-col>
    </v-row>
    <v-row class="mx-12 justify-center justify-lg-space-between">
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/RStudio-Logo-Gray.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/InterviewCakeLogo.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/taskade.png" />
      </v-col>
    </v-row>
    <v-row class="mx-12 justify-center justify-lg-space-between">
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/StickerGiantLogo.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/echo3D.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/voiceflow_logo1.png" />
      </v-col>
    </v-row>
    <v-row class="mx-12 justify-center justify-lg-space-between">
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/twilio-logo.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/spark-logo-round.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/AssemblyAI.png" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { db } from "@/firebase/init";
import Logo from "@/components/landing/Logo.vue";
import Section1 from "@/components/landing/Section1.vue";
import LoginButton from "@/components/landing/LoginButton.vue";
import LogoutButton from "@/components/landing/LogoutButton.vue";
import SignupButton from "@/components/landing/SignupButton.vue";
import ApplyButton from "@/components/landing/ApplyButton.vue";
import DashboardButton from "@/components/landing/DashboardButton.vue";
import Schedule from "@/components/landing/Schedule.vue";
import FAQ from "@/components/landing/FAQ.vue";
import Track1 from "@/components/landing/Track1.vue";
import Track2 from "@/components/landing/Track2.vue";
import Track3 from "@/components/landing/Track3.vue";
import Axure_logo_400 from "@/components/sponsor/logos/Axure_logo_400.vue";
export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  components: {
    Logo,
    Section1,
    LoginButton,
    LogoutButton,
    SignupButton,
    ApplyButton,
    DashboardButton,
    Schedule,
    Track1,
    Track2,
    Track3,
    FAQ,
    Axure_logo_400
  },
  async mounted() {
    this.getEvents();
  },
  data() {
    return {};
  },
  methods: {
    navigate(url) {
      window.scrollTo(0, 0);
      this.$router.push(`${url}`);
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    async getEvents() {
      const eventsDb = db.collection("admin").doc("schedules");
      var allEvents = await eventsDb.get();
      var out = allEvents.data().events;
      if (out) {
        this.events = out;
      } else {
        this.events = [];
      }
    }
  }
};
</script>

<style scoped>
.overflow-wrapper > div {
  overflow: visible;
}
</style>
