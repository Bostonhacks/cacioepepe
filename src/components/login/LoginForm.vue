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
      <h1 class="py-4 white--text basicTextShadow">Login</h1>
      <v-card>
        <v-row>
          <v-col></v-col>
          <v-col>
            <v-row
              no-gutters
              class="flex-column justify-center align-center pa-6"
            >
              <v-text-field
                style="width: 100%;"
                v-model="email"
                type="text"
                prepend-inner-icon="mdi-email-outline"
                placeholder="Email"
                outlined
              ></v-text-field>
              <v-text-field
                style="width: 100%;"
                v-model="password"
                type="password"
                prepend-inner-icon="mdi-lock-outline"
                placeholder="Password"
                outlined
              ></v-text-field>
              <router-link
                style="z-index: 1"
                class=" mt-n5 mb-3 align-self-end caption"
                to="/resetPw"
                >Forgot Password?</router-link
              >

              <v-btn elevation="10" class=" align-self-center red white--text"
                >Login</v-btn
              >
              <v-subheader class="align-self-center font-weight-bold"
                >OR</v-subheader
              >
              <p class="text-caption align-self-center">
                Log in with
              </p>
              <v-btn class=" px-1 py-6 darkBlue white--text">
                <google />
              </v-btn>
              <v-card-subtitle>Don't have an account?</v-card-subtitle>
            </v-row>
          </v-col>
        </v-row>
      </v-card>

      <!-- <v-card>
        <v-card-title class="justify-center">
          <h3>Login</h3>
        </v-card-title>
        <v-card-text>
          <v-form v-if="switchbt">
            <v-container>
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
                placeholder="********"
              ></v-text-field>
              <v-btn color="info white--text" @click="login"> Login </v-btn>
              <v-btn class="ml-2" color="red white--text" @click="cancel">
                Cancel
              </v-btn>
              <router-link class="ml-2" to="/resetPw"
                >Forgot Password?</router-link
              >
            </v-container>
          </v-form>
          <v-form v-else>
            <v-card-actions>
              <v-btn block color="info white--text" @click="switchpage"
                >Login with Email</v-btn
              >
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-actions>
              <GoogleLoginButton
                buttonName="Login with Google"
                class="google-signup"
              />
            </v-card-actions>
            <v-card-text>
              Hackers, don't have an account?
              <router-link to="/signup">Sign Up</router-link>
            </v-card-text>
          </v-form>
        </v-card-text>
      </v-card> -->
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
import Cloud9 from "@/components/common/SVG/Cloud9";
import GoogleLoginButton from "@/components/login/GoogleLoginButton.vue";
import google from "./google.svg.vue";

export default {
  name: "LoginForm",
  data() {
    return {
      email: null,
      password: null,
      switchbt: false,
    };
  },
  components: {
    Cloud9,
    GoogleLoginButton,
    google,
  },
  methods: {
    cancel() {
      this.switchbt = false;
    },
    switchpage() {
      this.switchbt = true;
    },
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
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorMessage = error.message;
          alert(errorMessage);
        });
    },
  },
};
</script>
