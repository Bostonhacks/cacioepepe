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
      <div v-if="resume">
        <v-btn color="primary" class="mr-4" :href="resume[0]"
          >View Uploaded Resume</v-btn
        >
        <v-btn color="primary" class="mr-4" @click="deleteResume"
          >Delete Resume</v-btn
        >
      </div>
      <div v-else>
        <v-file-input
          chips
          multiple
          label="Resume Upload (PDF Only)"
          accept="application/pdf"
          @change="uploadResume"
          v-model="uploadedResume"
        ></v-file-input>
      </div>
      <v-select
        :items="educationLevels"
        v-model="educationLevel"
        label="Select your Level of Education (required)"
      ></v-select>
      <v-btn color="primary" class="mr-4" @click="saveApplication">Save</v-btn>
      <v-btn
        type="submit"
        color="primary"
        class="mr-4"
        @click="submitApplication"
        :disabled="
          name == null ||
            phone == null ||
            age == null ||
            gender == null ||
            pronouns == null ||
            educationLevel == null ||
            university == null ||
            major == null ||
            minor == null ||
            resume == null ||
            githubURL == null ||
            linkedinURL == null ||
            otherURL == null ||
            beenToHackathon == null ||
            attendedBHacks == null ||
            marketingData == null ||
            tAndC1 == null ||
            tAndC2 == null
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
      pronouns: null,
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
      await functions.httpsCallable("saveApplication")({
        uid: this.user.uid,
        name: this.name,
        phone: this.phone,
        age: this.age,
        gender: this.gender,
        pronouns: this.pronouns,
        educationLevel: this.educationLevel,
        university: this.university,
        major: this.major,
        minor: this.minor,
        resume: this.resume,
        githubURL: this.githubURL,
        linkedinURL: this.linkedinURL,
        otherURL: this.otherURL,
        beenToHackathon: this.beenToHackathon,
        attendedBHacks: this.attendedBHacks,
        marketingData: this.marketingData,
        tAndC1: this.tAndC1,
        tAndC2: this.tAndC2
      });
    },
    async submitApplication() {
      await functions.httpsCallable("submitApplication")({
        uid: this.user.uid,
        name: this.name,
        phone: this.phone,
        age: this.age,
        gender: this.gender,
        pronouns: this.pronouns,
        educationLevel: this.educationLevel,
        university: this.university,
        major: this.major,
        minor: this.minor,
        resume: this.resume,
        githubURL: this.githubURL,
        linkedinURL: this.linkedinURL,
        otherURL: this.otherURL,
        beenToHackathon: this.beenToHackathon,
        attendedBHacks: this.attendedBHacks,
        marketingData: this.marketingData,
        tAndC1: this.tAndC1,
        tAndC2: this.tAndC2
      });
    },
    async uploadResume() {
      const reader = new FileReader();
      reader.readAsDataURL(this.uploadedResume[0]);
      reader.onload = async () => {
        functions
          .httpsCallable("uploadResume")({
            file: reader.result.split(",")[1],
            displayName: this.user.displayName,
            type: this.uploadedResume[0].type,
            uid: this.user.uid
          })
          .then(async data => {
            this.resume = [data.data.URL, data.data.location];
            this.uploadedResume = null;
          });
      };
    },
    async deleteResume() {
      await functions.httpsCallable("deleteResume")({
        uid: this.user.uid,
        location: this.resume[1]
      });
      this.resume = null;
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
        (this.pronouns = rawAppData.data.pronouns),
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
