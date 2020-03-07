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
      <v-file-input
        chips
        multiple
        label="Resume Upload"
        v-model="uploadedResume"
      ></v-file-input>
      <v-select
        :items="educationLevels"
        v-model="educationLevel"
        label="Select your Level of Education (required)"
      ></v-select>
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
    <v-btn color="primary" class="mr-4" @click.stop="saveApplication"
      >Save</v-btn
    >
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
      educationLevels: [
        "High School",
        "College Freshman",
        "College Sophomore",
        "College Junior",
        "College Senior",
        "Masters",
        "PhD"
      ],
      educationLevel: null,
      university: null,
      major: null,
      minor: null,
      uploadedResume: null,
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
  methods: {
    async saveApplication() {
      await functions.httpsCallable("uploadResume")({
        file: this.uploadedResume[0]
      });
      console.log(this.uploadedResume[0]);
      //   await functions.httpsCallable("saveApplication")({
      //     uid: this.user.uid,
      //     name: this.name,
      //     phone: this.phone,
      //     age: this.age,
      //     gender: this.gender,
      //     prounouns: this.pronouns,
      //     educationLevel: this.educationLevel,
      //     university: this.university,
      //     major: this.major,
      //     minor: this.minor,
      //     resume: this.resume,
      //     githubURL: this.githubURL,
      //     linkedinURL: this.linkedinURL,
      //     otherURL: this.otherURL,
      //     beenToHackathon: this.beenToHackathon,
      //     attendedBHacks: this.attendedBHacks,
      //     marketingData: this.marketingData,
      //     tAndC1: this.tAndC1,
      //     tAndC2: this.tAndC2
      //   });
    }
  },
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
