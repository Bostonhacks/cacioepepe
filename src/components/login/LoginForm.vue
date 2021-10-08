<template>
  <v-row justify="center">
    <v-col v-if="!this.renderLogin" cols="12" sm="6" md="4">
      <v-row class="justify-space-between">
        <v-btn rounded x-large @click="$router.push(`/signup`)">Sign Up</v-btn>
        <v-btn rounded x-large @click="renderLogin = !renderLogin"
          >Log In</v-btn
        >
      </v-row>
    </v-col>
    <v-col v-else cols="12" sm="6" md="4" lg="3">
      <v-card>
        <v-row class="justify-center">
          <BostonHacksLogo width="50%" class="pt-10 mr-n10" /><v-card-title
            >Log In</v-card-title
          >
        </v-row>
        <v-row class="flex-column align-center pa-6 pt-0">
          <v-form class="d-flex flex-column align-center" ref="form">
            <v-row class="mb-n3  justify-space-between form-input">
              <v-subheader class="pl-0 font-weight-bold"
                >Email Address</v-subheader
              >
            </v-row>
            <v-text-field
              dense
              :rules="emailRules"
              class="form-input"
              v-model="email"
              placeholder="jane@example.com"
              type="text"
              prepend-inner-icon="mdi-email-outline"
              outlined
            ></v-text-field>
            <v-row class="mb-n3 mt-n5 justify-space-between form-input">
              <v-subheader class="pl-0 font-weight-bold">Password</v-subheader>
              <router-link
                style="z-index: 1;"
                class="pr-0 d-flex align-center caption"
                to="/resetPw"
                >Forgot Password?</router-link
              >
            </v-row>
            <v-text-field
              dense
              :rules="passwordRules"
              class="form-input"
              v-model="password"
              placeholder="••••••••••••"
              type="password"
              prepend-inner-icon="mdi-lock-outline"
              outlined
            ></v-text-field>
          </v-form>
          <v-btn
            class="mb-6 align-self-center red white--text"
            rounded
            @click="login()"
            >Log In</v-btn
          >
          <v-row style="width: 95%;" class="justify-center divider">
            <span></span>
            <p>Or</p>
            <span></span>
          </v-row>
          <GoogleLoginButton buttonName="Log In with Google" />
        </v-row>
        <v-btn
          absolute
          dark
          fab
          bottom
          left
          small
          color="red"
          @click="renderLogin = !renderLogin"
        >
          <v-icon small>mdi-arrow-left</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase/app";
import GoogleLoginButton from "@/components/login/GoogleLoginButton";
import BostonHacksLogo from "@/components/login/BostonHacksLogo.svg";

export default {
  name: "LoginForm",
  data() {
    return {
      email: null,
      password: null,
      renderLogin: true,
      emailRules: [
        value => !!value || "Email is Required.",
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      ],
      passwordRules: [value => !!value || "Password is Required."]
    };
  },
  components: {
    GoogleLoginButton,
    BostonHacksLogo
  },
  methods: {
    async forgetPW() {
      var auth = firebase.auth();
      var emailAddress = this.email;

      auth
        .sendPasswordResetEmail(emailAddress)
        .then(function() {
          var message =
            "An email has been sent to help you reset your password.";
          alert(message);
        })
        .catch(function(error) {
          var errorMessage = error.message;
          alert(errorMessage);
        });
    },
    async login() {
      if (!this.$refs.form.validate()) return;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorMessage = error.message;
          alert(errorMessage);
        });
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
