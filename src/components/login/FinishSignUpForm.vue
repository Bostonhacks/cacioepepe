<!-- For use after Google Signup Route -->
<template>
  <v-container
    class="#ffcf93 justify-center align-center pb-10 pt-12 mx-0 mt-16"
    fluid
  >
    <v-row justify="center">
      <v-card>
        <v-card-title>
          <BostonHacksLogo width="50%" />
          <h3>Finish Sign Up</h3>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="displayName"
              type="text"
              label="Name"
              placeholder="Jone Doe"
            ></v-text-field>
            <v-select
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
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import { db } from "@/firebase/init.js";
import store from "@/store";
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
