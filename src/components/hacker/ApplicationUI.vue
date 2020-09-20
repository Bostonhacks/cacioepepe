<template>
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
                <v-autocomplete
                  v-model="gender"
                  :items="genderList"
                  color="primary"
                  label="Gender"
                  outlined
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="pronouns"
                  :items="pronounList"
                  color="primary"
                  label="Pronoun"
                  outlined
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="age"
                  type="number"
                  label="Age"
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
                <v-autocomplete
                  v-model="timeZone"
                  :items="timeZoneList"
                  hint="Don't Google - Boston Timezone is GMT+5"
                  color="primary"
                  label="Time Zone"
                  outlined
                  persistent-hint
                  return-object
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="country"
                  :items="countryList"
                  color="primary"
                  label="Country"
                  outlined
                  return-object
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-btn color="primary" class=" mt-5" @click="e1 = 2"
              >Continue</v-btn
            >

            <v-btn @click="saveApplication" class=" mt-5">Save</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-row class="smallVertical">
              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="university"
                  :items="universityList"
                  color="primary"
                  label="University"
                  outlined
                  return-object
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="major"
                  :items="courseList"
                  color="primary"
                  label="Major"
                  outlined
                  return-object
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="minor"
                  :items="courseList"
                  color="primary"
                  label="Minor"
                  outlined
                  return-object
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" sm="6">
                <v-autocomplete
                  v-model="educationLevel"
                  :items="educationLevels"
                  color="primary"
                  label="Select your Level of Education (required)"
                  outlined
                  return-object
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6">
                <v-combobox
                  v-model="language"
                  :items="languageList"
                  :search-input.sync="languageSearch"
                  hide-selected
                  hint="Maximum of 5 tags"
                  label="List proficient programming languages"
                  multiple
                  persistent-hint
                  outlined
                  small-chips
                >
                  <template v-slot:no-data>
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          No results matching "<strong>{{ search }}</strong
                          >". Press <kbd>enter</kbd> to create a new one
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-combobox>
              </v-col>
            </v-row>

            <v-btn color="primary" class=" mt-5" @click="e1 = 3"
              >Continue</v-btn
            >

            <v-btn @click="saveApplication" class=" mt-5">Save</v-btn>
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
            <Filedrop
              v-on:change="test"
              v-on:click="test"
              :loading.sync="resumeLoading"
              :file="resume"
            />
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

            <v-btn color="primary" @click="e1 = 4" class=" mt-5"
              >Continue</v-btn
            >

            <v-btn @click="saveApplication" class=" mt-5">Save</v-btn>
          </v-stepper-content>

          <v-stepper-content step="4">
            <v-switch
              class="pl-3"
              v-model="miniHacks"
              label="Did you attend BostonHacks Mini Hacks 2020?"
            ></v-switch>
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
              class=" mt-5"
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
                  miniHacks == 0 ||
                  miniHacks == null ||
                  marketingData == null ||
                  tAndC1 == 0 ||
                  tAndC1 == null ||
                  tAndC2 == 0 ||
                  tAndC2 == null
              "
              >Submit</v-btn
            >

            <v-btn @click="saveApplication" class=" mt-5">Save</v-btn>
          </v-stepper-content>
        </v-stepper-items>
        <v-fade-transition>
          <v-overlay v-if="loading == true" absolute color="#c7c3c3">
            <div>
              <bostonHacksLoadingLogo class="loadingSVG" />
            </div>
          </v-overlay>
        </v-fade-transition>
      </v-stepper>
    </v-container>
  </main>
</template>
<script>
import Cloud9 from "@/components/common/SVG/Cloud9";
import { functions, db } from "@/firebase/init";
import store from "@/store/index";
import BostonHacksLoadingLogo from "@/components/common/SVG/BostonHacksLoadingLogo";
import Filedrop from "@/components/common/Filedrop";
export default {
  components: {
    Cloud9,
    BostonHacksLoadingLogo,
    Filedrop
  },
  name: "ApplicationUI",
  data() {
    return {
      languageSearch: null,
      language: [],
      languageList: [
        "ABAP",
        "ActionScript",
        "Ada",
        "ALGOL",
        "Alice",
        "APL",
        "ASP / ASP.NET",
        "Assembly Language",
        "Awk",
        "BBC Basic",
        "C",
        "C++",
        "C#",
        "COBOL",
        "Cascading Style Sheets",
        "D",
        "Delphi",
        "Dreamweaver",
        "Erlang and Elixir",
        "F#",
        "FORTH",
        "FORTRAN",
        "Functional Programming",
        "Go",
        "Haskell",
        "HTML",
        "IDL",
        "INTERCAL",
        "Java",
        "Javascript",
        "jQuery",
        "LabVIEW",
        "Lisp",
        "Logo",
        "MetaQuotes Language",
        "ML",
        "Modula-3",
        "MS Access",
        "MySQL",
        "NXT-G",
        "Object-Oriented Programming",
        "Objective-C",
        "OCaml",
        "Pascal",
        "Perl",
        "PHP",
        "PL/I",
        "PL/SQL",
        "PostgreSQL",
        "PostScript",
        "PROLOG",
        "Pure Data",
        "Python",
        "R",
        "RapidWeaver",
        "RavenDB",
        "Rexx",
        "Ruby on Rails",
        "S-PLUS",
        "SAS",
        "Scala",
        "Sed",
        "SGML",
        "Simula",
        "Smalltalk",
        "SMIL",
        "SNOBOL",
        "SQL",
        "SQLite",
        "SSI",
        "Stata",
        "Swift",
        "Tcl/Tk",
        "TeX and LaTeX",
        "Unified Modeling Language",
        "Unix Shells",
        "Verilog",
        "VHDL",
        "Visual Basic",
        "Visual FoxPro",
        "VRML",
        "WAP/WML",
        "XML",
        "XSL"
      ],
      resumeLoading: false,
      essayRules: [v => v.split(" ").length <= 200 || "Max 200 words!"],
      wordCounter: input => (input ? input.split(" ").length : 0),
      e1: 1,
      loading: false,
      search: null,
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
      miniHacks: 0,
      marketingData: 0,
      tAndC1: 0,
      tAndC2: 0,
      phoneRules: [
        v =>
          /^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/.test(
            v
          ) ||
          "Please enter phone numbers with the international access code identifier of '+'"
      ]
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    test(value) {
      if (value == "viewFile") {
        window.open(this.resume[0], "_blank");
      } else if (value == "deleteFile") {
        this.deleteResume();
      } else {
        this.uploadResume(value);
      }
    },
    async saveApplication() {
      this.loading = true;
      const applications = db.collection("applications").doc(this.user.uid);
      await applications.update({
        language: this.language,
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
        miniHacks: this.miniHacks,
        tAndC1: this.tAndC1,
        tAndC2: this.tAndC2
      });
      this.loading = false;
      this.$router.push({ name: "dashboard" });
    },
    async submitApplication() {
      this.loading = true;
      const userdb = db.collection("users").doc(this.user.uid);
      await userdb.update({
        applicationStatus: 1
      });
      const userApplication = db.collection("applications").doc(this.user.uid);
      await userApplication.update({
        status: 1,
        name: this.name,
        uid: this.user.uid,
        language: this.language,
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
        miniHacks: this.miniHacks,
        tAndC1: this.tAndC1,
        tAndC2: this.tAndC2
      });
      await store.dispatch("getUser");
      this.loading = false;
      this.$router.push({ name: "dashboard" });
    },
    async uploadResume(value) {
      this.resumeLoading = true;
      this.uploadedResume = value;
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
            await db
              .collection("applications")
              .doc(this.user.uid)
              .update({
                resume: this.resume
              });
            this.uploadedResume = null;
            this.resumeLoading = false;
          });
      };
    },
    async deleteResume() {
      this.resumeLoading = true;
      await functions.httpsCallable("deleteResume")({
        uid: this.user.uid,
        location: this.resume[1]
      });
      this.resume = null;
      this.resumeLoading = false;
    }
  },
  async mounted() {
    this.loading = true;
    if (!this.user.applicationStatus) {
      const userdb = db.collection("users").doc(this.user.uid);
      await userdb.update({
        applicationStatus: 0
      });
      const userApplication = db.collection("applications").doc(this.user.uid);
      await userApplication.set({
        uid: this.user.uid,
        status: 0,
        name: null,
        phone: null,
        age: null,
        gender: null,
        pronouns: null,
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
        tAndC2: null,
        miniHacks: null
      });
    } else {
      const userApplication = db.collection("applications").doc(this.user.uid);
      var userApplicationDoc = await userApplication.get();
      (this.essayAns = userApplicationDoc.data().essayAns),
        (this.language = userApplicationDoc.data().language),
        (this.firstName = userApplicationDoc.data().firstName),
        (this.lastName = userApplicationDoc.data().lastName),
        (this.country = userApplicationDoc.data().country),
        (this.timeZone = userApplicationDoc.data().timeZone),
        (this.phone = userApplicationDoc.data().phone),
        (this.age = userApplicationDoc.data().age),
        (this.gender = userApplicationDoc.data().gender),
        (this.pronouns = userApplicationDoc.data().pronouns),
        (this.educationLevel = userApplicationDoc.data().educationLevel),
        (this.university = userApplicationDoc.data().university),
        (this.major = userApplicationDoc.data().major),
        (this.minor = userApplicationDoc.data().minor),
        (this.resume = userApplicationDoc.data().resume),
        (this.githubURL = userApplicationDoc.data().githubURL),
        (this.linkedinURL = userApplicationDoc.data().linkedinURL),
        (this.otherURL = userApplicationDoc.data().otherURL),
        (this.beenToHackathon = userApplicationDoc.data().beenToHackathon),
        (this.attendedBHacks = userApplicationDoc.data().attendedBHacks),
        (this.marketingData = userApplicationDoc.data().marketingData),
        (this.tAndC1 = userApplicationDoc.data().tAndC1),
        (this.tAndC2 = userApplicationDoc.data().tAndC2);
      this.miniHacks = userApplicationDoc.data().miniHacks;
    }
    this.loading = false;
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
  },
  watch: {
    language(val) {
      if (val && val.length > 5) {
        this.$nextTick(() => this.language.pop());
      }
    }
  }
};
</script>

<style scoped>
.smallVertical .col-sm-6 {
  margin-bottom: -2em;
}

.loadingSVG {
  position: relative;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.v-menu__content {
  margin-top: 3rem !important;
}
</style>
