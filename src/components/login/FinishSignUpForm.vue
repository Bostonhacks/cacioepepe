<!-- For use after Google Signup Route -->
<template>
  <v-row
    class="pb-10 px-5 justify-center align-center"
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
        <v-card-title class="justify-center">
          <h3>Finish Sign Up</h3>
        </v-card-title>
        <v-card-text>
          <v-form class="login-form">
            <v-text-field
              v-model="displayName"
              type="text"
              label="Name"
              placeholder="Jone Doe"
            ></v-text-field>
            <v-select
              label="Account Type"
              item-text="name"
              v-model="accountType"
              :items="accountTypes"
            ></v-select>
            <v-btn color="accent" class="mr-4" @click="finishSignUp">
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

export default {
  name: "FinishSignUpForm",
  data() {
    return {
      displayName: null,
      accountType: null,
      accountTypes: ["Hacker", "Volunteer", "Mentor", "Sponsor"]
    };
  },
  components: {
    Cloud9
  },
  methods: {
    async finishSignUp() {
      let user = firebase.auth().currentUser;
      db.collection("users")
        .doc(user.uid)
        .update({
          displayName: this.displayName,
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
