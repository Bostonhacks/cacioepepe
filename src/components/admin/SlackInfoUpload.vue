<template>
  <v-container fluid>
    <v-form>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="token"
            label="Slack API Token"
            single-line
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="inviteLink"
            label="Slack Workspace Invite link"
            single-line
            outlined
          ></v-text-field>
          <v-btn
            color="primary"
            class="mr-4"
            @click="submitToken"
            :disabled="token == null || inviteLink == null"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { functions } from "@/firebase/init";
export default {
  name: "SlackInfoUpload",
  data() {
    return {
      token: null,
      inviteLink: null
    };
  },
  methods: {
    async submitToken() {
      await functions.httpsCallable("uploadSlackInfo")({
        token: this.token,
        inviteLink: this.inviteLink
      });
    }
  }
};
</script>
