<template>
  <main class="pt-20px">
    <v-row
      class="pb-16 px-5 justify-center align-center"
      style="min-height: calc(100vh - 120px)"
    >
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="justify-center">
            <h3>Application</h3>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </main>
</template>

<style scoped>
.login-form {
  margin-top: 50px;
}
</style>

<script>
import firebase from "firebase/app";
import { functions } from "@/firebase/init.js";

export default {
  name: "SignUp",
  data() {
    return {
      email: null,
      password: null,
      displayName: null,
      accountType: null,
      accountTypes: ["Hacker", "Volunteer", "Mentor"]
    };
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
