<template>
  <main class="pt-70px">
    <v-form class="py-12">
      <v-container>
        <h1>Sign up to be a BostonHacks Mentor!</h1>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="first"
              label="First Name"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="last"
              label="Last Name"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="email"
              label="Email"
              outlined
              :rules="emailRules"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              :items="genderList"
              v-model="gender"
              label="Gender"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              :items="pronounList"
              v-model="pronoun"
              label="Pronoun"
              outlined
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="phone"
              label="Phone Number"
              :rules="phoneRules"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              :items="universityList"
              v-model="university"
              label="University"
              outlined
            ></v-select>
          </v-col>

          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              :items="educationLevels"
              v-model="educationLevel"
              label="Select your Level of Education (required)"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex" cols="12" sm="6">
            <v-select
              v-model="major"
              :items="courseList"
              label="Major"
              outlined
            ></v-select>
          </v-col>
          <v-col class="d-flex" cols="12" sm="6">
            <v-flex v-if="resume">
              <v-btn
                color="primary"
                class="mr-4"
                :href="resume[0]"
                target="_blank"
                rel="noreferrer"
                >View Uploaded Resume</v-btn
              >
              <v-btn color="primary" class="mr-4" @click="deleteResume"
                >Delete Resume</v-btn
              >
            </v-flex>
            <v-flex v-else>
              <v-file-input
                chips
                multiple
                label="Resume Upload (PDF Only)"
                accept="application/pdf"
                @change="uploadResume"
                v-model="uploadedResume"
              ></v-file-input>
            </v-flex>
          </v-col>
        </v-row>
        <v-switch
          v-model="picturePermission"
          label="Do you consent to us taking a picture or video during the event?"
        ></v-switch>
        <v-switch
          v-model="tAandC"
          label="Do you accept the terms and conditions?"
        ></v-switch>
        <v-btn
          color="primary"
          class="mr-4"
          @click="submitApplication"
          :disabled="
            first == null ||
              last == null ||
              phone == null ||
              gender == null ||
              pronoun == null ||
              educationLevel == null ||
              resume == null ||
              university == null ||
              email == null ||
              picturePermission == null ||
              tAandC == null
          "
          >Submit</v-btn
        >
      </v-container>
    </v-form>
  </main>
</template>

<script>
import { functions, db } from "@/firebase/init";
export default {
  name: "mentor",
  data() {
    return {
      first: null,
      last: null,
      email: null,
      gender: null,
      phone: null,
      educationLevel: null,
      major: null,
      pronoun: null,
      uploadedResume: null,
      resume: null,
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
      university: null,
      picturePermission: null,
      universityList: null,
      tAandC: null,
      emailRules: [
        v =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "Please enter a valid email"
      ],
      pronounList: ["He/Him", "She/Her", "They/Them"],
      phoneRules: [
        v =>
          (/\d/g.test(v) && v.length === 10) ||
          "Phone Number must be a valid US phone number"
      ],
      genderList: ["Female", "Male", "Other"],
      educationLevels: [
        "High School",
        "College Freshman",
        "College Sophomore",
        "College Junior",
        "College Senior",
        "Masters",
        "PhD"
      ]
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async submitApplication() {
      const userDoc = db.collection("users").doc(this.user.uid);
      await userDoc.update({
        applicationStatus: 1
      });
      const mentorDoc = db.collection("mentors").doc(this.user.uid);
      await mentorDoc.add({
        status: 1,
        first: this.first,
        last: this.last,
        phone: this.phone,
        gender: this.gender,
        pronoun: this.pronoun,
        educationLevel: this.educationLevel,
        university: this.university,
        email: this.email,
        resume: this.resume,
        picturePermission: this.picturePermission,
        tAandC: this.tAandC,
        uid: this.user.uid
      });
      this.$router.push("/");
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

<style scoped>
div {
  background-image: "../assets/background.png";
}
h1 {
  margin: 1em;
}
</style>
