<template>
  <div>
    <v-row justify="center" class="my-16" v-if="!$vuetify.breakpoint.mobile">
      <v-col class="my-16" cols="12" lg="4">
        <SponsorInformation />
      </v-col>
      <v-col class="my-16" cols="0" lg="1"></v-col>
      <v-col class="my-16" cols="12" lg="4">
        <Diamond />
      </v-col>
    </v-row>
    <v-row v-else class="my-16" justify="center">
      <SponsorInformationMobile />
    </v-row>
    <v-row>
      <TwilioQuoteMobile v-if="$vuetify.breakpoint.mobile" />
      <TwilioQuote v-else />
    </v-row>
    <v-row justify="center">
      <WhoweareWhyusMobile v-if="$vuetify.breakpoint.mobile" />
      <!-- fix padding -->
      <WhoweareWhyus v-else />
    </v-row>
    <v-row>
      <SponsorshipOpportunitiesMobile v-if="$vuetify.breakpoint.mobile" />
      <SponsorshipOpportunities v-else />
    </v-row>
    <v-row justify="center" class="tableRow">
      <SponsorBenefitsTable class="table" />
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="2"><GeneralEmail /></v-col>
      <v-col cols="12" lg="2"><SpecialSideEvent /></v-col>
      <v-col cols="12" lg="2"><EarlyBird /></v-col>
    </v-row>

    <v-row class="mx-12 justify-center justify-lg-space-between">
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/balsamiq.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/SketchLogo.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <v-img src="@/components/sponsor/logos/GoogleCloud.png" />
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
        <v-img src="@/components/sponsor/logos/echoar.png" />
      </v-col>
      <v-col cols="12" md="6" lg="3" class="my-12">
        <taskade_logo />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="!$vuetify.breakpoint.mobile">
        <StatisticsPolygon />
      </v-col>
      <v-col class="my-16 d-flex justify-center" v-else>
        <LetsTalkStatistics />
      </v-col>
    </v-row>
    <div v-if="!$vuetify.breakpoint.mobile">
      <v-row justify="center" class="my-16">
        <v-col cols="1" lg="1"></v-col>
        <v-col class="left" cols="12" lg="3"
          ><AttendeePlanet class="attendeePlanet"
        /></v-col>
        <v-col class="center" cols="12" lg="3">
          <ApplicantPlanet />
        </v-col>
        <v-col
          v-if="!$vuetify.breakpoint.mobile"
          cols="12"
          lg="5"
          sm="0"
          class="text-right"
          ><ReviewPolygon
        /></v-col>
      </v-row>
      <v-row justify="space-around">
        <v-col cols="12" lg="5">
          <v-row justify="center">
            <ApplicantChart />
          </v-row>
          <v-row>
            <ApplicantMap />
          </v-row>
        </v-col>
        <v-col class="reviewsRight" cols="12" lg="3"><Reviews /></v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="10">
          <AttendeePlanet />
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-col cols="7">
          <ApplicantPlanet />
        </v-col>
      </v-row>
      <v-row class="ma-5">
        <v-col>
          <ApplicantChart />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="ma-5">
          <ApplicantMap />
        </v-col>
      </v-row>
      <v-row class="ma-5">
        <Reviews />
      </v-row>
    </div>
  </div>
</template>

<script>
import SponsorInformation from "@/components/sponsor/SponsorInformation/SponsorInformation.vue";
import SponsorInformationMobile from "@/components/sponsor/SponsorInformation/SponsorInformationMobile.vue";
import Diamond from "@/components/sponsor/Diamond.vue";
import TwilioQuote from "@/components/sponsor/TwilioQuote/TwilioQuote.vue";
import TwilioQuoteMobile from "@/components/sponsor/TwilioQuote/TwilioQuoteMobile.vue";
import WhoweareWhyus from "@/components/sponsor/WhoweareWhyus/WhoweareWhyus.vue";
import WhoweareWhyusMobile from "@/components/sponsor/WhoweareWhyus/WhoweareWhyusMobile.vue";
import SponsorshipOpportunities from "@/components/sponsor/SponsorshipOpportunities/SponsorshipOpportunities.vue";
import SponsorshipOpportunitiesMobile from "@/components/sponsor/SponsorshipOpportunities/SponsorshipOpportunitiesMobile.vue";
import SponsorBenefitsTable from "@/components/sponsor/SponsorBenefitsTable.vue";
import ApplicantPlanet from "@/components/sponsor/ApplicantPlanet.vue";
import ApplicantMap from "@/components/sponsor/ApplicantMap.vue";
import ApplicantChart from "@/components/sponsor/ApplicantChart.vue";
import AttendeePlanet from "@/components/sponsor/AttendeePlanet.vue";
import StatisticsPolygon from "@/components/sponsor/StatisticsPolygon.vue";
import ReviewPolygon from "@/components/sponsor/ReviewPolygon.vue";
import Reviews from "@/components/sponsor/Reviews.vue";
import GeneralEmail from "@/components/sponsor/TableAsterisks/GeneralEmail.vue";
import SpecialSideEvent from "@/components/sponsor/TableAsterisks/SpecialSideEvent.vue";
import EarlyBird from "@/components/sponsor/TableAsterisks/EarlyBird.vue";
import LetsTalkStatistics from "@/components/sponsor/LetsTalkStatistics.vue";
import taskade_logo from "@/components/sponsor/logos/Taskade_logo.vue";
import Axure_logo_400 from "./logos/Axure_logo_400.vue";

export default {
  name: "SponsorPage",
  components: {
    SponsorInformation,
    SponsorInformationMobile,
    Diamond,
    TwilioQuote,
    TwilioQuoteMobile,
    WhoweareWhyus,
    WhoweareWhyusMobile,
    SponsorshipOpportunities,
    SponsorshipOpportunitiesMobile,
    SponsorBenefitsTable,
    ApplicantPlanet,
    ApplicantMap,
    ApplicantChart,
    AttendeePlanet,
    StatisticsPolygon,
    ReviewPolygon,
    Reviews,
    GeneralEmail,
    SpecialSideEvent,
    EarlyBird,
    LetsTalkStatistics,
    Axure_logo_400,
    // Sketch_logo,
    taskade_logo
  }
};
</script>

<style scoped>
.left {
  margin-top: 10%;
}
.center {
  margin-top: -8%;
}
.text-right {
  margin-top: 20%;
}
.reviewsRight {
  margin-top: -7%;
  margin-left: 5%;
  text-align: right;
  padding-bottom: 3%;
}
.pieChart {
  margin-left: 30%;
  margin-bottom: 10%;
}
/* .table {
  display: inline-block;
  position: absolute;
  width: 55%;
} */
.background {
  width: 50%;
}
.tableRow {
  margin-top: 10%;
}
</style>
