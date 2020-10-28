<!-- For use after Google Signup Route -->
<template>
  <v-row
    class="blue pb-10 px-5 justify-center align-center"
    style="min-height: calc(100vh - 120px)"
  >
    <v-container class="mt-5">
      <v-row justify="space-between" class="mx-md-n8 mb-n16">
        <v-col cols="6" class="pa-0">
          <Cloud9
            type="light"
            style=" position: relative"
            class="d-none d-sm-flex ml-sm-4 mt-n16"
          />
        </v-col>
        <v-col cols="4">
          <Cloud9
            type="light"
            style=" position: relative"
            class="d-none d-sm-flex ml-sm-4 mt-1 pt-16"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <v-card-title
          class="justify-center font-weight-bold red--text"
          style="width: 80%;"
        >
          <BostonHacksLogo width="50%" class="pt-10 mr-n10" />
          <h3>Finish Sign Up</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="form-input">
            <v-text-field
              class="form-input"
              v-model="displayName"
              type="text"
              label="Name"
              placeholder="Jone Doe"
            ></v-text-field>
            <v-select
              class="form-input"
              v-model="accountType"
              :items="accountTypes"
              outlined
              required
              dense
              prepend-inner-icon="mdi-account-box-outline"
            ></v-select>
            <v-btn color="primary" class="mr-4" @click="finishSignUp">
              Submit
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <v-container class="mt-5">
      <v-row justify="space-between" class="mx-md-n8 mb-n16">
        <v-col cols="4" class="pa-0">
          <Cloud9
            type="light"
            style=" position: relative"
            class="d-none d-sm-flex ml-sm-4 mt-n16"
          />
        </v-col>
        <v-col cols="4">
          <Cloud9
            type="light"
            style=" position: relative"
            class="d-none d-sm-flex ml-sm-4 mt-1 pt-16"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/firebase/init.js";
import store from "@/store";
import Cloud9 from "@/components/common/SVG/Cloud9";
import BostonHacksLogo from "@/components/login/BostonHacksLogo.svg";

export default {
  name: "FinishSignUpForm",
  data() {
    return {
      displayName: null,
      accountType: "Hacker",
      accountTypes: ["Hacker", "Volunteer", "Mentor"]
    };
  },
  components: {
    Cloud9,
    BostonHacksLogo
  },
  methods: {
    async finishSignUp() {
      let user = firebase.auth().currentUser;
      // you cant update role, user must be created with the right role
      db.collection("users")
        .doc(user.uid)
        .set({
          displayName: this.displayName,
          uid: user.uid,
          email: user.email,
          role: this.accountType.toLowerCase()
        })
        .then(() => {
          store.dispatch("getUser").then(() => {
            this.$router.push("/");
          });
        });
    }
  },
  mounted() {
    this.displayName = firebase.auth().currentUser.displayName;
  }
};
</script>
<style scoped>
.form-input {
  width: 95%;
}
</style>
