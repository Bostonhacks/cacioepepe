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
          <h3>Sign Up</h3>
        </v-card-title>
        <v-card-title class="justify-center">
          <h5>
            Already signed up?
            <router-link to="/login">Login</router-link>
          </h5>
        </v-card-title>
        <v-card-text>
          <v-form v-if="switchbt">
            <v-container>
              <v-text-field
                v-model="displayName"
                type="text"
                label="Name"
                placeholder="Jane Doe"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                type="text"
                label="Email"
                placeholder="jane@example.com"
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                label="Password"
                placeholder="*******"
              ></v-text-field>
              <v-select
                v-if="rolechoice"
                label="Account Type"
                item-text="name"
                v-model="accountType"
                :items="accountTypes"
              ></v-select>
              <v-btn
                block
                color="info white--text"
                class="mr-4 mb-1"
                @click="signUp"
              >
                Submit
              </v-btn>
              <v-btn block color="red white--text" @click="cancel"
                >Cancel</v-btn
              >
            </v-container>
          </v-form>
          <v-form v-else>
            <v-card-actions>
              <v-btn block color="info white--text" @click="switchpage"
                >Sign up with Email</v-btn
              >
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-actions>
              <GoogleLoginButton
                buttonName="Sign up with Google"
                class="google-signup"
              />
            </v-card-actions>
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

<style scoped>
.login-form {
  margin-top: 10px;
}
</style>

<script>
import firebase from "firebase/app";
import Cloud9 from "@/components/common/SVG/Cloud9";
import GoogleLoginButton from "@/components/login/GoogleLoginButton.vue";
import { db } from "@/firebase/init.js";

export default {
  name: "SignUpForm",
  data() {
    return {
      email: null,
      password: null,
      displayName: null,
      accountType: "Hacker",
      rolechoice: false,
      switchbt: false,
      accountTypes: ["Hacker", "Volunteer", "Mentor", "Sponsor"]
    };
  },
  components: {
    Cloud9,
    GoogleLoginButton
  },
  methods: {
    cancel() {
      this.switchbt = false;
    },
    switchpage() {
      this.switchbt = true;
    },
    async signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          var user = firebase.auth().currentUser;
          db.collection("users")
            .doc(user.uid)
            .set({
              displayName: this.displayName,
              email: this.email,
              uid: user.uid,
              role: this.accountType.toLowerCase()
            })
            .then(() => {
              this.$router.push("/");
            });
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }
};
</script>
