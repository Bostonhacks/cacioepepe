<template>
  <v-container class="blue justify-center align-center pb-10 pt-12 mx-0" fluid>
    <v-row justify="space-between" class="pt-sm mt-5 mx-md-n8 mb-n16">
      <v-col cols="6" class="pa-0">
        <Cloud9 type="light" class="cloud d-none d-sm-flex ml-sm-4 mt-n16" />
      </v-col>
      <v-col cols="4">
        <Cloud9
          type="light"
          class="cloud d-none d-sm-flex ml-sm-4 mt-1 pt-16"
        />
      </v-col>
    </v-row>
    <v-row justify="center" style="width: 100vw;">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card>
          <v-row class="justify-center">
            <BostonHacksLogo width="50%" class="pt-10 mr-n10" /><v-card-title
              class="display-1 font-weight-bold red--text ml-n10"
              style="width: 50%;"
              >Sign Up</v-card-title
            >
          </v-row>
          <v-row class="flex-column align-center pa-6 pt-0">
            <v-form class="w-100p" ref="form">
              <div
                class="d-flex flex-column align-center"
                v-for="(field, index) in formFields"
                :key="index"
              >
                <v-row class="w-100p mb-n3 mt-n5 justify-space-between">
                  <v-subheader class="font-weight-bold">{{
                    field.name
                  }}</v-subheader>
                </v-row>
                <v-text-field
                  :rules="field.rules"
                  dense
                  v-model="field.model"
                  :placeholder="field.placeholder"
                  :type="field.type"
                  :prepend-inner-icon="field.icon"
                  outlined
                  required
                  password
                  class="form-input"
                ></v-text-field>
              </div>
              <div class="d-flex flex-column align-center">
                <v-row class="w-100p mb-n3 mt-n5 justify-space-between">
                  <v-subheader class="font-weight-bold">I am a...</v-subheader>
                </v-row>

                <v-select
                  class="form-input"
                  v-model="accountType"
                  :items="accountTypes"
                  outlined
                  required
                  dense
                  prepend-inner-icon="mdi-account-box-outline"
                ></v-select>
              </div>
            </v-form>
            <v-btn
              class="btn mb-6 align-self-center red white--text"
              rounded
              @click="signUp"
              >Sign Up</v-btn
            >
            <v-row class="justify-center divider">
              <span></span>
              <p>Or</p>
              <span></span>
            </v-row>
            <GoogleLoginButton
              buttonName="Sign Up with Google"
              :role="this.accountType"
            />
            <v-btn
              absolute
              dark
              fab
              bottom
              left
              small
              color="red"
              @click="$router.push(`/login`)"
            >
              <v-icon small>mdi-arrow-left</v-icon>
            </v-btn>
          </v-row>
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
  </v-container>
</template>

<script>
import firebase from "firebase/app";
import Cloud9 from "@/components/common/SVG/Cloud9";
import GoogleLoginButton from "@/components/login/GoogleLoginButton.vue";
import { db } from "@/firebase/init.js";
import BostonHacksLogo from "@/components/login/BostonHacksLogo.svg";

export default {
  name: "SignUpForm",
  data() {
    return {
      email: null,
      password: null,
      displayName: null,
      accountType: "Hacker",
      accountTypes: ["Hacker", "Volunteer", "Mentor"],
      formFields: {
        name: {
          name: "Name",
          type: "text",
          rules: [value => !!value || "Name is Required."],
          model: null,
          placeholder: "Jane Doe",
          icon: "mdi-account-outline"
        },
        email: {
          name: "Email",
          type: "text",
          rules: [
            value => !!value || "Email is Required.",
            value => {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return pattern.test(value) || "Invalid e-mail.";
            }
          ],
          model: null,
          placeholder: "jane@example.com",
          icon: "mdi-email-outline"
        },
        password: {
          name: "Password",
          type: "password",
          rules: [value => !!value || "Password is Required."],
          model: null,
          placeholder: "••••••••••••",
          icon: "mdi-lock-outline"
        }
      }
    };
  },
  components: {
    Cloud9,
    GoogleLoginButton,
    BostonHacksLogo
  },
  methods: {
    async signUp() {
      if (!this.$refs.form.validate()) return;
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formFields.email.model,
          this.formFields.password.model
        )
        .then(() => {
          var user = firebase.auth().currentUser;
          db.collection("users")
            .doc(user.uid)
            .set({
              displayName: this.formFields.name.model,
              email: this.formFields.email.model,
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

<style scoped>
.cloud {
  position: relative;
}

.btn {
  text-transform: none;
  width: 70%;
}

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

.divider {
  width: 100%;
}

.w-100p {
  width: 100%;
}

@media screen and (max-width: 600px) {
  .pt-sm {
    padding-top: 15vh;
  }
}
</style>
