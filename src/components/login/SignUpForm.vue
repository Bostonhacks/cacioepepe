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
            <router-link class="blue" to="/login">Login</router-link>
          </h5>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
              <v-text-field
                v-model="displayName"
                type="text"
                label="Name"
                placeholder="Jone Doe"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                type="text"
                label="Email"
                placeholder="jone@example.com"
              ></v-text-field>
              <v-text-field
                v-model="password"
                type="password"
                label="Password"
                placeholder="***"
              ></v-text-field>
              <v-select
                label="Account Type"
                item-text="name"
                v-model="accountType"
                :items="accountTypes"
              ></v-select>
              <v-btn color="accent" class="mr-4" @click="signUp">
                Submit
              </v-btn>
            </v-container>
          </v-form>
          <v-divider></v-divider>
          <v-card-actions>
            <GoogleLoginButton class="google-signup justify-center" />
          </v-card-actions>
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
import { functions } from "@/firebase/init.js";
import Cloud9 from "@/components/common/SVG/Cloud9";
import GoogleLoginButton from "@/components/login/GoogleLoginButton.vue";

export default {
  name: "SignUpForm",
  data() {
    return {
      email: null,
      password: null,
      displayName: null,
      accountType: null,
      accountTypes: ["Hacker", "Volunteer", "Mentor"]
    };
  },
  components: {
    Cloud9,
    GoogleLoginButton
  },
  methods: {
    async signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          var user = firebase.auth().currentUser;
          console.log("UserID: " + user.uid);
          functions.httpsCallable("createNewUser")({
            displayName: this.displayName,
            email: this.email,
            role: this.accountType
          });
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Error code" + errorCode);
          console.log("Error message" + errorMessage);
        });
      this.$router.push("/");
    }
  }
};
</script>
