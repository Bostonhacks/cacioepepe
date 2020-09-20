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
          <h3>Login</h3>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-container>
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
                placeholder=" "
              ></v-text-field>
              <v-btn color="info white--text" @click="login"> Login </v-btn>
              <router-link to="/resetpw" class="ml-8"
                >Forgot Password?</router-link
              >
            </v-container>
          </v-form>
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
            <v-spacer></v-spacer>
            Interested in sponsoring and helping?
            <router-link to="/signup">Sign Up</router-link>
          </v-card-text>
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
import Cloud9 from "@/components/common/SVG/Cloud9";
import GoogleLoginButton from "@/components/login/GoogleLoginButton.vue";

export default {
  name: "LoginForm",
  data() {
    return {
      email: null,
      password: null
    };
  },
  components: {
    Cloud9,
    GoogleLoginButton
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
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // var user = firebase.auth().currentUser;
          this.$router.push("/");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("Error code" + errorCode);
          alert(errorMessage);
        });
    }
  }
};
</script>
