<template>
  <v-container fluid>
    <v-form>
      <v-row>
        <v-col cols="6" sm="6">
          <v-text-field
            v-model="token"
            label="Slack API Token"
            single-line
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="6" sm="6">
          <v-text-field
            v-model="invitelink"
            label="Slack Workspace Invite link"
            single-line
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" sm="6">
          <v-flex>Admin Channels</v-flex>
          <v-select
            v-model="admin"
            :items="channels"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            hint="Pick Slack Channels"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-flex>Sponsor Channels</v-flex>
          <v-select
            v-model="sponsor"
            :items="channels"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            hint="Pick Slack Channels"
            persistent-hint
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-flex>Volunteer Channels</v-flex>
          <v-select
            v-model="volunteer"
            :items="channels"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            hint="Pick Slack Channels"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6">
          <v-flex>Hacker Channels</v-flex>
          <v-select
            v-model="hacker"
            :items="channels"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            hint="Pick Slack Channels"
            persistent-hint
          ></v-select>
        </v-col>
      </v-row>
      <v-row align="end">
        <v-col cols="12" sm="6">
          <v-flex>Mentor Channels</v-flex>
          <v-select
            v-model="mentor"
            :items="channels"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            hint="Pick Slack Channels"
            persistent-hint
          ></v-select>
        </v-col>

        <v-col cols="12" sm="1" align-center>
          <v-btn
            color="primary"
            class="mr-4"
            @click="submitToken"
            :disabled="token == null || invitelink == null"
          >
            Submit
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { db } from "@/firebase/init";
export default {
  name: "SlackInfoUpload",
  data() {
    return {
      channels: [
        "General",
        "Announcements",
        "Events",
        "Workshops",
        "Bots",
        "Q&A"
      ],
      token: null,
      invitelink: null,
      mentor: null,
      volunteer: null,
      admin: null,
      sponsor: null,
      hacker: null
    };
  },
  methods: {
    async submitToken() {
      // uploadSlackInfo
      const slackdb = db.collection("admin").doc("slackInfo");
      await slackdb.set({
        slackToken: this.token,
        slackInviteLink: this.invitelink,
        hackerChannels: this.hacker,
        sponsorChannels: this.sponsor,
        adminChannels: this.admin,
        volunteerChannels: this.volunteer,
        mentorChannels: this.mentor
      });
    }
  }
};
</script>
