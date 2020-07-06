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
      <v-text-field
        v-model="phone"
        label="Phone Number"
        placeholder="123-456-7890"
        :rules="phoneRules"
      ></v-text-field>
      <v-text-field
        v-model="age"
        type="number"
        label="Age"
        :rules="ageRules"
      ></v-text-field>
      <v-select v-model="gender" :items="genderList" label="Gender"></v-select>
      <v-select
        v-model="pronouns"
        :items="pronounList"
        label="Pronouns"
      ></v-select>
      <v-select
        v-model="university"
        :items="universityList"
        label="University"
      ></v-select>
      <v-select v-model="major" :items="courseList" label="Major"></v-select>
      <v-select v-model="minor" :items="courseList" label="Minor"></v-select>
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
      <v-text-field v-model="githubURL" label="Github URL"></v-text-field>
      <v-text-field v-model="linkedinURL" label="LinkedIn URL"></v-text-field>
      <v-text-field v-model="otherURL" label="Other URL"></v-text-field>
      <label>How many hackathons have you attended?</label>
      <v-radio-group v-model="beenToHackathon">
        <v-radio label="0" value="0"></v-radio>
        <v-radio label="1" value="1"></v-radio>
        <v-radio label="2" value="2"></v-radio>
        <v-radio label="3+" value="3+"></v-radio>
      </v-radio-group>
      <v-switch
        v-model="attendedBHacks"
        label="Have you attended BostonHacks?"
      ></v-switch>
      <v-switch
        v-model="marketingData"
        label="Do you consent to us stealing your data?"
      ></v-switch>
      <v-switch
        v-model="tAndC1"
        label="Do you accept the terms and conditions?"
      ></v-switch>
      <v-switch
        v-model="tAndC2"
        label="Do you accept the terms and conditions?"
      ></v-switch>
      <v-btn color="primary" class="mr-4" @click="saveApplication">Save</v-btn>
      <v-btn
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
            resume == null ||
            marketingData == 0 ||
            marketingData == null ||
            tAndC1 == 0 ||
            tAndC1 == null ||
            tAndC2 == 0 ||
            tAndC2 == null
        "
        >Submit</v-btn
      >
    </v-form>
  </v-container>
</template>
<script>
import { functions } from "@/firebase/init";
import store from "@/store/index";
export default {
  name: "ApplicationUI",
  data() {
    return {
      name: null,
      phone: null,
      age: null,
      gender: null,
      genderList: ["Female", "Male", "Other"],
      pronouns: null,
      pronounList: ["He/Him", "She/Her", "They/Them"],
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
      universityList: null,
      major: null,
      minor: null,
      courseList: [
        "Accounting",
        "Aerospace Engineering",
        "Agricultural Engineering",
        "Applied Mathematics",
        "Architecture",
        "Biochemistry",
        "Bioengineering",
        "Bioinformatics",
        "Biological Sciences",
        "Biology",
        "Biomedical Engineering",
        "Biotechnology",
        "Building Construction Management",
        "Business",
        "Business Administration",
        "Business Analytics",
        "Chemical Engineering",
        "Chemistry",
        "Civil Engineering",
        "Cognitive Science",
        "Communications",
        "Computational Biology",
        "Computational Media",
        "Computer Engineering",
        "Computer Science",
        "Computer Information Systems",
        "Computer Technologies",
        "Computing Security",
        "Culinary Arts",
        "Cyber Operations",
        "Data Science",
        "Design",
        "Economics",
        "Electrical Engineering",
        "Engineering",
        "Engineering Management",
        "Engineering Physics",
        "Engineering Science",
        "English",
        "Film",
        "Finance",
        "Game Design and Development",
        "Geophysics",
        "Graphic Design",
        "Human Centered Design",
        "Human Computer Interaction",
        "Humanities",
        "Individualized Major",
        "Industrial and Systems Engineering",
        "Industrial and Operations Engineering",
        "Industrial Engineering",
        "Informatics",
        "Information Science",
        "Information Systems",
        "Information Technology",
        "Interaction Design",
        "Interactive Multimedia",
        "Interactive Telecommunications Program (ITP)",
        "International Relations",
        "Journalism",
        "Linguistics",
        "Management",
        "Management Information Systems",
        "Marketing",
        "Materials Science",
        "Mathematics",
        "Mechanical Engineering",
        "Mechatronics",
        "Mechatronics Engineering",
        "Media Arts and Sciences",
        "Music Computing",
        "Nanoengineering",
        "Network Security",
        "Neurobiology/Cognitive Science",
        "Neuroscience",
        "New Media Design",
        "Operations Research Management Science",
        "Organizational",
        "Philosophy",
        "Physics",
        "Political Science",
        "Poultry Science",
        "Product Design",
        "Psych",
        "Psychology",
        "Robotics Engineering",
        "Robotics",
        "Software Engineering",
        "Statistics",
        "Systems Design Engineering",
        "Technology Management",
        "Theatre and Linguistics"
      ],
      uploadedResume: null,
      resume: null,
      githubURL: null,
      linkedinURL: null,
      otherURL: null,
      beenToHackathon: null,
      attendedBHacks: 0,
      marketingData: 0,
      tAndC1: 0,
      tAndC2: 0,
      phoneRules: [
        v =>
          (/\d/g.test(v) && v.length === 10) ||
          "Phone Number must be a valid US phone number"
      ],
      ageRules: [v => v >= 18 || "You must be over 18 to come to BostonHacks!"]
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
      await store.dispatch("getUser");
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
    fetch(
      "https://raw.githubusercontent.com/MLH/mlh-policies/master/schools.csv"
    )
      .then(response => response.text())
      .then(result => {
        let schoolList = result.split("\n").map(item => {
          item = item.startsWith('"')
            ? item.substring(1, item.length - 2)
            : item;
          return item;
        });
        schoolList.splice(0, 1);
        this.universityList = schoolList;
      });
  }
};
</script>
