<template>
  <v-row
    class="pb-10 px-5 justify-center align-center"
    style="min-height: 100vh;"
  >
    <v-container style="width: 100vw;">
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
    <v-row justify="center" style="width: 100vw;">
      <v-col v-if="!this.renderLogin" cols="12" sm="6" md="4">
        <v-row no-gutters class="flex-row-reverse">
          <RedHotAirBalloon class="align-self-end red-balloon"
        /></v-row>
        <v-row class="justify-space-between">
          <v-btn
            style="text-transform: none; width: 40%; height: 72px; font-size: 2em; z-index: 1;"
            class="align-self-center red white--text ma-3"
            rounded
            x-large
            @click="$router.push(`/signup`)"
            >Sign Up</v-btn
          >
          <v-btn
            style="text-transform: none; width: 40%; height: 72px; font-size: 2em;"
            class="align-self-center red white--text ma-3"
            rounded
            x-large
            @click="renderLogin = !renderLogin"
            >Log In</v-btn
          >
        </v-row>
        <v-row class="justify-space-between">
          <GreenHotAirBalloon class="green-balloon" />
        </v-row>
      </v-col>
      <v-col v-else cols="12" sm="6" md="4" lg="3">
        <v-card>
          <v-row class="justify-center">
            <BostonHacksLogo width="50%" class="pt-10 mr-n10" /><v-card-title
              class="display-1 font-weight-bold red--text ml-n10"
              style="width: 50%;"
              >Log In</v-card-title
            >
          </v-row>
          <v-row class="flex-column align-center pa-6 pt-0">
            <v-form
              style="width: 100%"
              class="d-flex flex-column align-center"
              ref="form"
            >
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
                <v-subheader class="pl-0 font-weight-bold"
                  >Password</v-subheader
                >
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
              style="text-transform: none; width: 70%;"
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
import RedHotAirBalloon from "@/components/common/SVG/RedHotAirBalloon";
import GreenHotAirBalloon from "@/components/common/SVG/GreenHotAirBalloon";
import GoogleLoginButton from "@/components/login/GoogleLoginButton";
import BostonHacksLogo from "@/components/login/BostonHacksLogo.svg";

export default {
  name: "LoginForm",
  data() {
    return {
      email: null,
      password: null,
      renderLogin: false,
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
    Cloud9,
    GoogleLoginButton,
    RedHotAirBalloon,
    GreenHotAirBalloon,
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
          this.$router.push("/");
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

<style scoped>
.form-input {
  width: 95%;
}

.divider span {
  overflow: visible;
  padding: 0;
  margin-top: 12px;
  margin-left: 5px;
  margin-right: 5px;
  border: none;
  border-top: 1px solid #e0e0e0;
  color: #6e6d7a;
  text-align: center;
  width: 33%;
}

.divider p {
  color: #6e6d7a;
}

.green-balloon {
  width: 30%;
  margin-top: -5rem;
  margin-left: -5rem;
}

.red-balloon {
  width: 30%;
  margin-top: -5rem;
  margin-right: -5rem;
}

@media screen and (max-width: 600px) {
  .red-balloon {
    margin-top: 0;
    margin-right: 0;
  }

  .green-balloon {
    margin-top: 0;
    margin-left: 0;
  }
}
</style>
