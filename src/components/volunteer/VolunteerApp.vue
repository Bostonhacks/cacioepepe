<template>
  <v-form>
    <v-container>
      <h1>Sign up to be a BostonHacks Volunteer!</h1>
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
      <div class="inline">Choose as many interests as you want</div>
      <v-row>
        <v-col class="d-flex" cols="12" sm="6">
          <v-checkbox-group column>
            <v-checkbox
              v-model="tablingEvent"
              label="Tabling at the Boston Hack Event"
              value="Tabling at the Boston Hack Event"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="preEvent"
              label="Pre-Event Set Up"
              value="Pre-Event Set Up"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="postEvent"
              label="Post Event Cleaning"
              value="Post Event Cleaning"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="eventVolunteer"
              label="During Event Volunteering"
              value="During Event Volunteering"
              hide-details
            ></v-checkbox>
          </v-checkbox-group>
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
            university == null ||
            email == null ||
            picturePermission == null ||
            tAandC == null
        "
        >Submit</v-btn
      >
    </v-container>
  </v-form>
</template>

<script>
import { functions } from "../../firebase/init";
export default {
  name: "volunteer",
  data() {
    return {
      first: null,
      last: null,
      email: null,
      gender: null,
      phone: null,
      educationLevel: null,
      pronoun: null,
      preEvent: null,
      postEvent: null,
      tablingEvent: null,
      eventVolunteer: null,
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
  methods: {
    async submitApplication() {
      await functions.httpsCallable("submitVolunteerApplication")({
        first: this.first,
        last: this.last,
        phone: this.phone,
        gender: this.gender,
        pronoun: this.pronoun,
        educationLevel: this.educationLevel,
        university: this.university,
        email: this.email,
        preEvent: this.preEvent,
        postEvent: this.postEvent,
        tablingEvent: this.tablingEvent,
        eventVolunteer: this.eventVolunteer,
        picturePermission: this.picturePermission,
        tAandC: this.tAandC
      });
      this.$router.push("/");
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
