<template>
  <v-container>
    <v-card v-if="links">
      <v-list-item-content v-if="!userExists">
        <v-list-item-title class="headline mb-1">
          You didn't join our slack yet!
        </v-list-item-title>
        <v-list-item-subtitle>
          <a :href="links['Invite Link']" target="_blank" rel="noreferrer">
            Join Our Slack!
          </a>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content v-else>
        <v-list-item-title class="headline mb-1">
          Check out our channels
        </v-list-item-title>
        <v-list-item-subtitle
          v-for="(link, channel) in links"
          v-bind:key="link.id"
        >
          <a :href="link" target="_blank" rel="noreferrer">
            {{ channel.toProperCase() }}</a
          >
        </v-list-item-subtitle>
      </v-list-item-content>
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
  name: "SlackComponent",
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
    var slackUserData = await functions.httpsCallable("checkSlackUser")({
      email: this.user.email
    });
    this.userExists = slackUserData.data;
    console.log(this.userExists);
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
