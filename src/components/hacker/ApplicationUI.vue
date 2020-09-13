<template>
  <!-- 
    <v-container class="blue py-16">
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
        <v-select
          v-model="gender"
          :items="genderList"
          label="Gender"
        ></v-select>
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
        <v-btn color="primary" class="mr-4" @click="saveApplication"
          >Save</v-btn
        >
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
  </main>-->
  <main class="pt-70px blue">
    <v-container class="blue py-16">
      <v-row style="height: 0">
        <v-col cols="4" class="pa-0">
          <Cloud9
            alt="Blue Cloud"
            type="light"
            style="position: relative; top: -9rem;"
          />
        </v-col>
      </v-row>
      <h1 class="py-4 white--text basicTextShadow">Apply to BostonHacks!</h1>
      <v-row style="height: 0">
        <v-col cols="4" offset="8" class="pa-0">
          <Cloud9
            alt="Blue Cloud"
            type="light"
            style="position: relative; top: -8rem;"
          />
        </v-col>
      </v-row>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1" :editable="editable"
            >Personal Information</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2" :editable="editable"
            >Education</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 3" step="3" :editable="editable"
            >Application Questions</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step step="4" :editable="editable">Consent</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-row class="smallVertical">
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="firstName"
                  label="First Name"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="lastName"
                  label="Last Name"
                  outlined
                ></v-text-field>
              </v-col>
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
              <v-col cols="12" sm="6">
                <v-select
                  :items="pronounList"
                  v-model="pronouns"
                  label="Pronoun"
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="age"
                  type="number"
                  label="Age"
                  :rules="ageRules"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="phone"
                  label="Phone Number"
                  :rules="phoneRules"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="timeZoneList"
                  v-model="timeZone"
                  label="Time Zone"
                  outlined
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="country"
                  label="Country"
                  :items="countryList"
                  outlined
                ></v-select>
              </v-col>
            </v-row>
            <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

            <v-btn @click="saveApplication">Save</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-row class="smallVertical">
              <v-col cols="12" sm="6">
                <v-select
                  v-model="university"
                  :items="universityList"
                  label="University"
                  outlined
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="major"
                  :items="courseList"
                  label="Major"
                  outlined
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="minor"
                  :items="courseList"
                  label="Minor"
                  outlined
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  :items="educationLevels"
                  v-model="educationLevel"
                  label="Select your Level of Education (required)"
                  outlined
                ></v-select>
              </v-col>
            </v-row>

            <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

            <v-btn @click="saveApplication">Save</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-textarea
              class="pt-3"
              counter="200"
              :counter-value="wordCounter"
              label="Why do you want to participate in BostonHacks? (200 word max) "
              :rules="essayRules"
              v-model="essayAns"
              outlined
            ></v-textarea>
            <div v-if="resume">
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
            </div>
            <div v-else-if="uploadedResume == null">
              <v-file-input
                chips
                multiple
                label="Resume Upload (PDF Only)"
                accept="application/pdf"
                @change="uploadResume"
                v-model="uploadedResume"
              ></v-file-input>
            </div>
            <div v-else>
              <v-progress-linear
                color="#FA9F98"
                indeterminate
              ></v-progress-linear>
            </div>
            <v-text-field v-model="githubURL" label="Github URL"></v-text-field>
            <v-text-field
              v-model="linkedinURL"
              label="LinkedIn URL"
            ></v-text-field>
            <v-text-field v-model="otherURL" label="Other URL"></v-text-field>
            <v-switch
              v-model="attendedBHacks"
              label="Have you attended BostonHacks?"
            ></v-switch>
            <label>How many hackathons have you attended?</label>
            <v-radio-group v-model="beenToHackathon">
              <v-radio label="0" value="0"></v-radio>
              <v-radio label="1" value="1"></v-radio>
              <v-radio label="2" value="2"></v-radio>
              <v-radio label="3+" value="3+"></v-radio>
            </v-radio-group>

            <v-btn color="primary" @click="e1 = 4">Continue</v-btn>

            <v-btn @click="saveApplication">Save</v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-switch
              class="pl-3"
              v-model="marketingData"
              label="Do you consent to us stealing your data?"
            ></v-switch>
            <v-switch
              class="pl-3"
              v-model="tAndC1"
              label="Do you accept the terms and conditions?"
            ></v-switch>
            <v-switch
              class="pl-3"
              v-model="tAndC2"
              label="Do you accept the terms and conditions?"
            ></v-switch>
            <v-btn
              color="primary"
              @click="submitApplication"
              :disabled="
                firstName == null ||
                  lastName == null ||
                  phone == null ||
                  country == null ||
                  timeZone == null ||
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

            <v-btn @click="saveApplication">Save</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </main>
</template>
<script>
import { functions } from "@/firebase/init";
import Cloud9 from "@/components/common/SVG/Cloud9";
import store from "@/store/index";
export default {
  components: {
    Cloud9
  },
  name: "ApplicationUI",
  data() {
    return {
      essayRules: [v => v.split(" ").length <= 200 || "Max 200 words!"],
      wordCounter: input => (input ? input.split(" ").length : 0),
      e1: 1,
      essayAns: "",
      editable: true,
      firstName: null,
      lastName: null,
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
      country: null,
      timeZone: null,
      email: null,
      emailRules: [
        v =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "Please enter a valid email"
      ],
      timeZoneList: [
        "GMT+1:00",
        "GMT+2:00",
        "GMT+3:00",
        "GMT+3:30",
        "GMT+4:00",
        "GMT+5:00",
        "GMT+5:30",
        "GMT+6:00",
        "GMT+7:00",
        "GMT+8:00",
        "GMT+9:00",
        "GMT+9:30",
        "GMT+10:00",
        "GMT+11:00",
        "GMT+12:00",
        "GMT-11:00",
        "GMT-10:00",
        "GMT-9:00",
        "GMT-8:00",
        "GMT-7:00",
        "GMT-6:00",
        "GMT-5:00",
        "GMT-4:00",
        "GMT-3:30",
        "GMT-3:00"
      ],
      countryList: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua &amp; Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia &amp; Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Cape Verde",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D Ivoire",
        "Croatia",
        "Cruise Ship",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Polynesia",
        "French West Indies",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyz Republic",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Pierre &amp; Miquelon",
        "Samoa",
        "San Marino",
        "Satellite",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St Kitts &amp; Nevis",
        "St Lucia",
        "St Vincent",
        "St. Lucia",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor L'Este",
        "Togo",
        "Tonga",
        "Trinidad &amp; Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks &amp; Caicos",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United States",
        "United Kingdom",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (US)",
        "Yemen",
        "Zambia",
        "Zimbabwe"
      ],
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
        "Theatre and Linguistics",
        "Other"
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
          /^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/.test(
            v
          ) ||
          "Please enter phone numbers with the international access code identifier of '+'"
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
        essayAns: this.essayAns,
        firstName: this.firstName,
        lastName: this.lastName,
        timeZone: this.timeZone,
        country: this.country,
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
      console.log("sucessfully saved");
      this.$router.push({ name: "dashboard" });
    },
    async submitApplication() {
      await functions.httpsCallable("submitApplication")({
        uid: this.user.uid,
        essayAns: this.essayAns,
        firstName: this.firstName,
        lastName: this.lastName,
        timeZone: this.timeZone,
        country: this.country,
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
      console.log("sucessfully submitted");
      this.$router.push({ name: "dashboard" });
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
      (this.essayAns = rawAppData.data.essayAns),
        (this.firstName = rawAppData.data.firstName),
        (this.lastName = rawAppData.data.lastName),
        (this.country = rawAppData.data.country),
        (this.timeZone = rawAppData.data.timeZone),
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
        schoolList.push("Other");
        54;
        this.universityList = schoolList;
      });
  }
};
</script>

<style scoped>
.smallVertical .col-sm-6 {
  margin-bottom: -2em;
}
</style>
