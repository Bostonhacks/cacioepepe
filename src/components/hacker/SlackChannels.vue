<template>
  <v-container class="justify-center">
    <v-card max-width="450" class="mx-auto">
      <v-toolbar color="orange" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Slack Channels</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list-item three-line>
        <v-list-item-content v-if="!userExists">
          <v-list-item-subtitle class="pd-10"
            >You didn't join our slack yet!</v-list-item-subtitle
          >
          <v-list-item-subtitle>
            <a :href="links['Invite Link']" target="_blank" rel="noreferrer">
              Join Our Slack!
            </a>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content v-else>
          <v-list-item-subtitle class="pd-10"
            >Communicate with hundreds of hackers! Reach out to learn about our
            workshops, update with announcements!</v-list-item-subtitle
          >
          <v-card-actions>
            <v-list>
              <v-list-item>
                <v-btn block color="secondary" dark
                  >Open #general Channel</v-btn
                >
              </v-list-item>
              <v-list-item>
                <v-btn block color="secondary" dark
                  >Open #sponsor Channel</v-btn
                >
              </v-list-item>
              <v-list-item>
                <v-btn block color="secondary" dark
                  >Open #workshops Channel</v-btn
                >
              </v-list-item>
            </v-list>
          </v-card-actions>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>
<script>
import { functions, db } from "@/firebase/init";
String.prototype.toProperCase = function() {
  return this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
export default {
  name: "SlackChannels",
  data() {
    return {
      userExists: null,
      links: null,
      channels: null
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  async mounted() {
    var slackUserData = await functions.httpsCallable("checkSlackUser")({});
    this.userExists = slackUserData.data;
    const slackdb = db.collection("admin").doc("slackInfo");
    var allChannels = await slackdb.get().then(doc => {
      return doc.data();
    });
    this.channels = allChannels[this.user.role + "Channels"];
    var slackComponentData = await functions.httpsCallable(
      "populateSlackComponent"
    )({
      userAdded: this.userExists,
      channels: this.channels
    });

    this.links = slackComponentData.data;
    console.log(this.links);
  }
};
</script>
