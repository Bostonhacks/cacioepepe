<template>
  <v-row
    class="pb-10 px-5 justify-center align-center"
    style="min-height: calc(100vh - 120px)"
  >
    <v-col cols="12" sm="6" md="4">
      <v-card>
        <v-card-title class="justify-center">
          <h3>Reset Password</h3>
        </v-card-title>
        <v-card-subtitle class="justify-center">
          <v-card-text>
            <h4>Please enter your email address to reset yout password</h4>
          </v-card-text>
        </v-card-subtitle>
        <v-form>
          <v-container>
            <v-text-field
              v-model="email"
              type="text"
              label="Email"
              placeholder="jone@example.com"
            ></v-text-field>
            <v-divider></v-divider>
            <v-btn v-btn block color="info white--text" @click="forgetPW">
              Reset Password
            </v-btn>
          </v-container>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "ResetPw",
  data() {
    return {
      email: null
    };
  },
  methods: {
    async forgetPW() {
      var auth = firebase.auth();
      var emailAddress = this.email;

      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function() {
          var message = "An Email has been sent to reset your password.";
          alert(message);
        })
        .catch(function(error) {
          var errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }
};
</script>
