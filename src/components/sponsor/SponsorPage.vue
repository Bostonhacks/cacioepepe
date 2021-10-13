<template>
  <div>
    <v-container>
      <v-row justify="center" class="my-16" v-if="!useMobileImages">
        <v-col class="my-16" cols="12" lg="4">
          <SponsorInformation />
        </v-col>
        <v-col class="my-16" cols="0" lg="1"></v-col>
        <v-col class="my-16" cols="12" lg="4">
          <Diamond />
        </v-col>
      </v-row>
      <v-row v-else class="my-16 d-flex justify-center">
        <SponsorInformationMobile />
      </v-row>
      <v-row>
        <TwilioQuoteMobile v-if="useMobileImages" />
        <TwilioQuote v-else />
      </v-row>
      <v-row class="d-flex justify-center">
        <WhoweareWhyusMobile v-if="useMobileImages" />
        <!-- fix padding -->
        <WhoweareWhyus v-else />
      </v-row>
      <v-row>
        <SponsorshipOpportunitiesMobile v-if="useMobileImages" />
        <SponsorshipOpportunities v-else />
      </v-row>
      <v-row>
        <SponsorBenefitsTable />
      </v-row>
      <v-row>
        <v-col>
          <StatisticsPolygon />
        </v-col>
      </v-row>
      <v-row justify="center" class="my-16">
        <v-col cols="3"></v-col>
        <v-col cols="6">
          <ApplicantPlanet />
        </v-col>
        <v-col cols="3"></v-col>
      </v-row>
      <v-row justify="center" class="my-16">
        <v-col cols="5"><AttendeePlanet /></v-col>
        <v-col cols="1"></v-col>
        <v-col cols="6" class="text-right"><ReviewPolygon /></v-col>
      </v-row>
      <ApplicantChart />
      <ApplicantMap />
      <Reviews />
    </v-container>
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
    Reviews
  },
  computed: {
    useMobileImages() {
      return ["xs", "sm", "md"].includes(this.$vuetify.breakpoint.name);
    }
  }
};
</script>
