<template>
  <v-container>
    <v-form>
      <div>
        <h2>Application</h2>
      </div>
      <v-text-field
        v-model="name"
        type="text"
        label="Name"
        placeholder="John Doe"
      ></v-text-field>
      <label>Place of Incarceration</label>
      <v-select
        :items="prisons"
        v-model="location"
        label="Select the prison (required)"
      ></v-select>
      <v-btn type="submit" color="primary" class="mr-4" @click="saveApplication"
        >Save</v-btn
      >
      <v-btn
        type="submit"
        color="primary"
        class="mr-4"
        @click="submitApplication"
        :disabled="
          firstname == null ||
            lastname == null ||
            inmateID == null ||
            birthdate == null ||
            location == null ||
            race == null ||
            sex == null
        "
        >Submit</v-btn
      >
    </v-form>
  </v-container>
</template>
<script>
import { functions } from "../firebase/init";
export default {
  name: "ApplicationUI",
  data() {
    return {
      name: null,
      phone: null,
      age: null,
      gender: null,
      prounouns: null,
      educationLevel: null,
      university: null,
      major: null,
      minor: null,
      resume: null,
      githubURL: null,
      linkedinURL: null,
      otherURL: null,
      beenToHackathon: null,
      attendedBHacks: null,
      marketingData: null,
      tAndC1: null,
      tAndC2: null
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {},
  async mounted() {
    if (!this.user.applicationStatus) {
      await functions.httpsCallable("createApplication")({
        uid: this.user.uid
      });
    } else {
      var rawAppData = await functions.httpsCallable("loadApplication")({
        uid: this.user.uid
      });
      (this.name = rawAppData.data.name),
        (this.phone = rawAppData.data.phone),
        (this.age = rawAppData.data.age),
        (this.gender = rawAppData.data.gender),
        (this.prounouns = rawAppData.data.pronouns),
        (this.educationLevel = rawAppData.data.educationLevel),
        (this.university = rawAppData.data.university),
        (this.major = rawAppData.data.major),
        (this.minor = rawAppData.data.minor),
        (this.resume = rawAppData.data.resume),
        (this.githubURL = rawAppData.data.githubURL),
        (this.linkedinURL = rawAppData.data.linkedinURL),
        (this.otherURL = rawAppData.data.otherURL),
        (this.beenToHackathon = rawAppData.data.beenToHackathon),
        (this.attendedBHacks = rawAppData.data.attendedBHacks),
        (this.marketingData = rawAppData.data.marketingData),
        (this.tAndC1 = rawAppData.data.tAndC1),
        (this.tAndC2 = rawAppData.data.tAndC2);
    }
  }
};
</script>
