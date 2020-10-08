<template>
  <main class="pt-70px blue">
    <v-container class="blue py-16" v-if="this.user">
      <v-row style="height: 0">
        <v-col cols="4" class="pa-0">
          <Cloud9
            alt="Blue Cloud"
            type="light"
            style="position: relative; top: -9rem;"
          />
        </v-col>
      </v-row>
      <h1 class="py-4 white--text basicTextShadow">
        Apply to be a Volunteer!
      </h1>
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
            >Application Question</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step step="3" :editable="editable">Consent</v-stepper-step>
        </v-stepper-header>
        <v-form ref="form" lazy-validation>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-row class="smallVertical">
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="firstName"
                    label="First Name"
                    :rules="requiredRule"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="lastName"
                    label="Last Name"
                    :rules="requiredRule"
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
                    :rules="requiredRule"
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
                    :rules="requiredRule"
                    return-object
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="age"
                    type="number"
                    label="Age"
                    :rules="requiredRule"
                    onkeydown="javascript: return event.keyCode == 69 ? false : true"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="4" sm="2">
                  <v-autocomplete
                    v-model="countryCode"
                    label="Country Code"
                    :items="countryCodeList"
                    :rules="requiredRule"
                    outlined
                  >
                    <template v-slot:selection="data">
                      <!-- HTML that describe how select should render selected items -->
                      {{ data.item.substring(data.item.indexOf("+")) }}
                    </template>
                  </v-autocomplete>
                </v-col>
                <v-col cols="8" sm="4">
                  <v-text-field
                    v-model="phone"
                    label="Phone Number"
                    :rules="requiredRule"
                    outlined
                    type="number"
                    onkeydown="javascript: return event.keyCode == 69 ? false : true"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="timeZone"
                    :items="timeZoneList"
                    hint="Don't Google - Boston Time Zone is GMT-5"
                    color="primary"
                    label="Time Zone"
                    :rules="requiredRule"
                    outlined
                    persistent-hint
                    return-object
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-btn color="primary" class="mt-5" @click="e1 = 2"
                >Continue</v-btn
              >

              <v-btn @click="saveApplication" class="mt-5 ml-5">Save</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-row class="smallVertical">
                <v-col cols="12" sm="6">
                  <v-autocomplete
                    v-model="university"
                    :items="universityList"
                    color="primary"
                    label="University/High School"
                    :rules="requiredRule"
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
                    :rules="requiredRule"
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
                    :rules="requiredRule"
                    outlined
                    return-object
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-autocomplete
                    class="auto"
                    v-model="timeSlot"
                    :items="timeSlots"
                    color="primary"
                    label="Select all your availiable time slots"
                    :rules="requiredRule"
                    outlined
                    multiple
                    chips
                    return-object
                  >
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-switch
                v-model="attendedBHacks"
                label="Have you attended BostonHacks previously?"
                class="pl-3"
              ></v-switch>
              <label>How many hackathons have you attended before?</label>
              <v-radio-group
                v-model="beenToHackathon"
                :rules="requiredRule"
                class="pl-5"
              >
                <v-radio label="0" value="0"></v-radio>
                <v-radio label="1" value="1"></v-radio>
                <v-radio label="2" value="2"></v-radio>
                <v-radio label="3+" value="3+"></v-radio>
              </v-radio-group>
              <v-btn color="primary" @click="e1 = 3" class="mt-5"
                >Continue</v-btn
              >

              <v-btn @click="saveApplication" class="mt-5 ml-5">Save</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-switch
                class="pl-3"
                v-model="marketingData"
                label="Do you consent to your picture or your likeness being used in future BostonHacks marketing material?"
              ></v-switch>
              <v-switch
                class="pl-3"
                v-model="tAndC1"
                label="Do you agree to abide by the MLH code of conduct?"
                :rules="requiredRule"
              >
                <template v-slot:label>
                  <div>
                    Do you agree to abide by the
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                          @click.stop
                          v-on="on"
                        >
                          MLH code of conduct
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip>
                    ？
                  </div>
                </template>
              </v-switch>
              <v-switch
                class="pl-3"
                v-model="tAndC2"
                label="Do you agree to abide by the Boston University code of conduct?"
                :rules="requiredRule"
              >
                <template v-slot:label>
                  <div>
                    Do you agree to abide by the
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="http://www.bu.edu/dos/policies/student-responsibilities/"
                          @click.stop
                          v-on="on"
                        >
                          Boston University code of conduct
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip>
                    ？
                  </div>
                </template>
              </v-switch>
              <v-btn color="primary" class="mt-5" @click="submitApplication"
                >Submit</v-btn
              >

              <v-btn @click="saveApplication" class="mt-5 ml-5">Save</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-form>
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
import { db } from "@/firebase/init";
import store from "@/store/index";
import BostonHacksLoadingLogo from "@/components/common/SVG/BostonHacksLoadingLogo";
export default {
  components: {
    Cloud9,
    BostonHacksLoadingLogo
  },
  name: "ApplicationUI",
  data() {
    return {
      city: null,
      address: null,
      zip: null,
      countryCode: "United States +1",
      requiredRule: [v => !!v || "Input is required."],
      valid: false,
      role: null,
      timeSlot: null,
      timeSlots: [
        "November 14 morning",
        "November 14 afternoon",
        "November 14 night",
        "November 15 morning",
        "November 15 afternoon",
        "November 15 night"
      ],
      wordCounter: input => (input ? input.split(" ").length : 0),
      e1: 1,
      loading: false,
      search: null,
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
      country: null,
      timeZone: null,
      email: null,
      emailRules: [
        v =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "Please enter a valid email"
      ],
      urlRules: [
        v =>
          /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(
            v
          ) || "Please enter a valid URL"
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
      beenToHackathon: null,
      attendedBHacks: 0,
      marketingData: 0,
      tAndC1: 0,
      tAndC2: 0,
      countryCodeList: [
        "Afghanistan (\u202bافغانستان\u202c\u200e) +93",
        "Albania (Shqipëri) +355",
        "Algeria (\u202bالجزائر\u202c\u200e) +213",
        "American Samoa +1",
        "Andorra +376",
        "Angola +244",
        "Anguilla +1",
        "Antigua and Barbuda +1",
        "Argentina +54",
        "Armenia (Հայաստան) +374",
        "Aruba +297",
        "Australia +61",
        "Austria (Österreich) +43",
        "Azerbaijan (Azərbaycan) +994",
        "Bahamas +1",
        "Bahrain (\u202bالبحرين\u202c\u200e) +973",
        "Bangladesh (বাংলাদেশ) +880",
        "Barbados +1",
        "Belarus (Беларусь) +375",
        "Belgium (België) +32",
        "Belize +501",
        "Benin (Bénin) +229",
        "Bermuda +1",
        "Bhutan (འབྲུག) +975",
        "Bolivia +591",
        "Bosnia and Herzegovina (Босна и Херцеговина) +387",
        "Botswana +267",
        "Brazil (Brasil) +55",
        "British Indian Ocean Territory +246",
        "British Virgin Islands +1",
        "Brunei +673",
        "Bulgaria (България) +359",
        "Burkina Faso +226",
        "Burundi (Uburundi) +257",
        "Cambodia (កម្ពុជា) +855",
        "Cameroon (Cameroun) +237",
        "Canada +1",
        "Cape Verde (Kabu Verdi) +238",
        "Caribbean Netherlands +599",
        "Cayman Islands +1",
        "Central African Republic (République centrafricaine) +236",
        "Chad (Tchad) +235",
        "Chile +56",
        "China (中国) +86",
        "Christmas Island +61",
        "Cocos (Keeling) Islands +61",
        "Colombia +57",
        "Comoros (\u202bجزر القمر\u202c\u200e) +269",
        "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo) +243",
        "Congo (Republic) (Congo-Brazzaville) +242",
        "Cook Islands +682",
        "Costa Rica +506",
        "Côte d’Ivoire +225",
        "Croatia (Hrvatska) +385",
        "Cuba +53",
        "Curaçao +599",
        "Cyprus (Κύπρος) +357",
        "Czech Republic (Česká republika) +420",
        "Denmark (Danmark) +45",
        "Djibouti +253",
        "Dominica +1",
        "Dominican Republic (República Dominicana) +1",
        "Ecuador +593",
        "Egypt (\u202bمصر\u202c\u200e) +20",
        "El Salvador +503",
        "Equatorial Guinea (Guinea Ecuatorial) +240",
        "Eritrea +291",
        "Estonia (Eesti) +372",
        "Ethiopia +251",
        "Falkland Islands (Islas Malvinas) +500",
        "Faroe Islands (Føroyar) +298",
        "Fiji +679",
        "Finland (Suomi) +358",
        "France +33",
        "French Guiana (Guyane française) +594",
        "French Polynesia (Polynésie française) +689",
        "Gabon +241",
        "Gambia +220",
        "Georgia (საქართველო) +995",
        "Germany (Deutschland) +49",
        "Ghana (Gaana) +233",
        "Gibraltar +350",
        "Greece (Ελλάδα) +30",
        "Greenland (Kalaallit Nunaat) +299",
        "Grenada +1",
        "Guadeloupe +590",
        "Guam +1",
        "Guatemala +502",
        "Guernsey +44",
        "Guinea (Guinée) +224",
        "Guinea-Bissau (Guiné Bissau) +245",
        "Guyana +592",
        "Haiti +509",
        "Honduras +504",
        "Hong Kong (香港) +852",
        "Hungary (Magyarország) +36",
        "Iceland (Ísland) +354",
        "India (भारत) +91",
        "Indonesia +62",
        "Iran (\u202bایران\u202c\u200e) +98",
        "Iraq (\u202bالعراق\u202c\u200e) +964",
        "Ireland +353",
        "Isle of Man +44",
        "Israel (\u202bישראל\u202c\u200e) +972",
        "Italy (Italia) +39",
        "Jamaica +1",
        "Japan (日本) +81",
        "Jersey +44",
        "Jordan (\u202bالأردن\u202c\u200e) +962",
        "Kazakhstan (Казахстан) +7",
        "Kenya +254",
        "Kiribati +686",
        "Kosovo +383",
        "Kuwait (\u202bالكويت\u202c\u200e) +965",
        "Kyrgyzstan (Кыргызстан) +996",
        "Laos (ລາວ) +856",
        "Latvia (Latvija) +371",
        "Lebanon (\u202bلبنان\u202c\u200e) +961",
        "Lesotho +266",
        "Liberia +231",
        "Libya (\u202bليبيا\u202c\u200e) +218",
        "Liechtenstein +423",
        "Lithuania (Lietuva) +370",
        "Luxembourg +352",
        "Macau (澳門) +853",
        "Macedonia (FYROM) (Македонија) +389",
        "Madagascar (Madagasikara) +261",
        "Malawi +265",
        "Malaysia +60",
        "Maldives +960",
        "Mali +223",
        "Malta +356",
        "Marshall Islands +692",
        "Martinique +596",
        "Mauritania (\u202bموريتانيا\u202c\u200e) +222",
        "Mauritius (Moris) +230",
        "Mayotte +262",
        "Mexico (México) +52",
        "Micronesia +691",
        "Moldova (Republica Moldova) +373",
        "Monaco +377",
        "Mongolia (Монгол) +976",
        "Montenegro (Crna Gora) +382",
        "Montserrat +1",
        "Morocco (\u202bالمغرب\u202c\u200e) +212",
        "Mozambique (Moçambique) +258",
        "Myanmar (Burma) (မြန်မာ) +95",
        "Namibia (Namibië) +264",
        "Nauru +674",
        "Nepal (नेपाल) +977",
        "Netherlands (Nederland) +31",
        "New Caledonia (Nouvelle-Calédonie) +687",
        "New Zealand +64",
        "Nicaragua +505",
        "Niger (Nijar) +227",
        "Nigeria +234",
        "Niue +683",
        "Norfolk Island +672",
        "North Korea (조선 민주주의 인민 공화국) +850",
        "Northern Mariana Islands +1",
        "Norway (Norge) +47",
        "Oman (\u202bعُمان\u202c\u200e) +968",
        "Pakistan (\u202bپاکستان\u202c\u200e) +92",
        "Palau +680",
        "Palestine (\u202bفلسطين\u202c\u200e) +970",
        "Panama (Panamá) +507",
        "Papua New Guinea +675",
        "Paraguay +595",
        "Peru (Perú) +51",
        "Philippines +63",
        "Poland (Polska) +48",
        "Portugal +351",
        "Puerto Rico +1",
        "Qatar (\u202bقطر\u202c\u200e) +974",
        "Réunion (La Réunion) +262",
        "Romania (România) +40",
        "Russia (Россия) +7",
        "Rwanda +250",
        "Saint Barthélemy +590",
        "Saint Helena +290",
        "Saint Kitts and Nevis +1",
        "Saint Lucia +1",
        "Saint Martin (Saint-Martin (partie française)) +590",
        "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon) +508",
        "Saint Vincent and the Grenadines +1",
        "Samoa +685",
        "San Marino +378",
        "São Tomé and Príncipe (São Tomé e Príncipe) +239",
        "Saudi Arabia (\u202bالمملكة العربية السعودية\u202c\u200e) +966",
        "Senegal (Sénégal) +221",
        "Serbia (Србија) +381",
        "Seychelles +248",
        "Sierra Leone +232",
        "Singapore +65",
        "Sint Maarten +1",
        "Slovakia (Slovensko) +421",
        "Slovenia (Slovenija) +386",
        "Solomon Islands +677",
        "Somalia (Soomaaliya) +252",
        "South Africa +27",
        "South Korea (대한민국) +82",
        "South Sudan (\u202bجنوب السودان\u202c\u200e) +211",
        "Spain (España) +34",
        "Sri Lanka (ශ්\u200dරී ලංකාව) +94",
        "Sudan (\u202bالسودان\u202c\u200e) +249",
        "Suriname +597",
        "Svalbard and Jan Mayen +47",
        "Swaziland +268",
        "Sweden (Sverige) +46",
        "Switzerland (Schweiz) +41",
        "Syria (\u202bسوريا\u202c\u200e) +963",
        "Taiwan (台灣) +886",
        "Tajikistan +992",
        "Tanzania +255",
        "Thailand (ไทย) +66",
        "Timor-Leste +670",
        "Togo +228",
        "Tokelau +690",
        "Tonga +676",
        "Trinidad and Tobago +1",
        "Tunisia (\u202bتونس\u202c\u200e) +216",
        "Turkey (Türkiye) +90",
        "Turkmenistan +993",
        "Turks and Caicos Islands +1",
        "Tuvalu +688",
        "U.S. Virgin Islands +1",
        "Uganda +256",
        "Ukraine (Україна) +380",
        "United Arab Emirates (\u202bالإمارات العربية المتحدة\u202c\u200e) +971",
        "United Kingdom +44",
        "United States +1",
        "Uruguay +598",
        "Uzbekistan (Oʻzbekiston) +998",
        "Vanuatu +678",
        "Vatican City (Città del Vaticano) +39",
        "Venezuela +58",
        "Vietnam (Việt Nam) +84",
        "Wallis and Futuna (Wallis-et-Futuna) +681",
        "Western Sahara (\u202bالصحراء الغربية\u202c\u200e) +212",
        "Yemen (\u202bاليمن\u202c\u200e) +967",
        "Zambia +260",
        "Zimbabwe +263",
        "Åland Islands +358"
      ]
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async saveApplication() {
      this.loading = true;
      const applications = db.collection("volunteers").doc(this.user.uid);
      await applications.update({
        firstName: this.firstName,
        lastName: this.lastName,
        timeZone: this.timeZone,
        email: this.email,
        countryCode: this.countryCode,
        timeSlot: this.timeSlot,
        phone: this.phone,
        age: this.age,
        gender: this.gender,
        pronouns: this.pronouns,
        educationLevel: this.educationLevel,
        university: this.university,
        major: this.major,
        beenToHackathon: this.beenToHackathon,
        attendedBHacks: this.attendedBHacks,
        marketingData: this.marketingData,
        tAndC1: this.tAndC1,
        tAndC2: this.tAndC2
      });
      this.loading = false;
      this.$router.push({ name: "dashboard" });
    },
    async submitApplication() {
      this.loading = true;
      this.$refs.form.validate();
      this.check();
      if (this.valid) {
        const userdb = db.collection("users").doc(this.user.uid);
        await userdb.update({
          applicationStatus: 1
        });
        const userApplication = db.collection("volunteers").doc(this.user.uid);
        await userApplication.update({
          status: 1,
          firstName: this.firstName,
          lastName: this.lastName,
          timeZone: this.timeZone,
          email: this.email,
          countryCode: this.countryCode,
          timeSlot: this.timeSlot,
          phone: this.phone,
          age: this.age,
          gender: this.gender,
          pronouns: this.pronouns,
          educationLevel: this.educationLevel,
          university: this.university,
          major: this.major,
          beenToHackathon: this.beenToHackathon,
          attendedBHacks: this.attendedBHacks,
          marketingData: this.marketingData,
          tAndC1: this.tAndC1,
          tAndC2: this.tAndC2
        });
        await store.dispatch("getUser");
        this.loading = false;
        this.$router.push({ name: "dashboard" });
      } else {
        this.loading = false;
        this.e1 = 1;
      }
    },
    async check() {
      if (
        this.firstName == null ||
        this.lastName == null ||
        this.phone == null ||
        this.email == null ||
        this.gender == null ||
        this.pronouns == null ||
        this.educationLevel == null ||
        this.university == null ||
        this.timeSlot == null ||
        this.countryCode == null ||
        this.timeZone == null ||
        this.major == null ||
        this.tAndC1 == false ||
        this.tAndC1 == null ||
        this.tAndC2 == false ||
        this.tAndC2 == null ||
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          this.email
        )
      ) {
        this.valid = false;
        return;
      }
      this.valid = true;
    }
  },
  async mounted() {
    this.loading = true;
    if (this.user.applicationStatus >= 0) {
      const userApplication = db.collection("volunteers").doc(this.user.uid);
      var userApplicationDoc = await userApplication.get();
      (this.language = userApplicationDoc.data().language),
        (this.firstName = userApplicationDoc.data().firstName),
        (this.lastName = userApplicationDoc.data().lastName),
        (this.countryCode = userApplicationDoc.data().countryCode),
        (this.email = userApplicationDoc.data().email),
        (this.timeZone = userApplicationDoc.data().timeZone),
        (this.phone = userApplicationDoc.data().phone),
        (this.age = userApplicationDoc.data().age),
        (this.timeSlot = userApplicationDoc.data().timeSlot),
        (this.gender = userApplicationDoc.data().gender),
        (this.pronouns = userApplicationDoc.data().pronouns),
        (this.educationLevel = userApplicationDoc.data().educationLevel),
        (this.university = userApplicationDoc.data().university),
        (this.major = userApplicationDoc.data().major),
        (this.beenToHackathon = userApplicationDoc.data().beenToHackathon),
        (this.marketingData = userApplicationDoc.data().marketingData),
        (this.tAndC1 = userApplicationDoc.data().tAndC1),
        (this.tAndC2 = userApplicationDoc.data().tAndC2);
    } else {
      const userdb = db.collection("users").doc(this.user.uid);
      await userdb.update({
        applicationStatus: 0
      });
      const userApplication = db.collection("volunteers").doc(this.user.uid);
      await userApplication.set({
        uid: this.user.uid,
        status: 0,
        firstName: null,
        lastName: null,
        phone: null,
        countryCode: "United States +1",
        email: null,
        timeZone: null,
        timeSlot: null,
        age: null,
        gender: null,
        pronouns: null,
        educationLevel: null,
        university: null,
        major: null,
        beenToHackathon: null,
        attendedBHacks: false,
        marketingData: false,
        tAndC1: false,
        tAndC2: false
      });
      await store.dispatch("getUser");
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
  margin-bottom: -1em;
}
.auto {
  padding: 0px;
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
