<template>
  <v-container
    class="#ffcf93 justify-center align-center pb-10 pt-12 mx-0 mt-16"
    fluid
  >
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-card>
          <v-row class="justify-center">
            <BostonHacksLogo width="50%" class="pt-10 mr-n10" /><v-card-title
              class="display-1 font-weight-bold primary--text ml-n10"
              >Sign Up</v-card-title
            >
          </v-row>
          <v-row class="flex-column align-center pa-6 pt-0">
            <v-btn
              v-if="!form"
              class="btn mb-6 align-self-center primary white--text"
              rounded
              @click="appear"
              >Sign Up with Email</v-btn
            >
            <v-form v-if="form" class="w-100p" ref="form">
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
              v-if="form"
              class="btn mb-6 align-self-center white--text"
              color="primary"
              rounded
              @click="signUp"
              >Submit</v-btn
            >
            <v-row class="justify-center">
              <span></span>
              <p>Or</p>
              <span></span>
            </v-row>
            <GoogleLoginButton buttonName="Sign Up with Google" />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoogleLoginButton from "@/components/login/GoogleLoginButton.vue";
import { db } from "@/firebase/init.js";
import firebase from "firebase/app";
import BostonHacksLogo from "@/components/login/BostonHacksLogo.svg";

export default {
  name: "SignUpForm",
  data() {
    return {
      form: false,
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
    GoogleLoginButton,
    BostonHacksLogo
  },
  methods: {
    appear() {
      this.form = true;
    },
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

<style scoped></style>
