<template>
  <v-container>
    <v-card v-if="links">
      <v-list-item-content v-if="!userExists">
        <v-list-item-title class="headline mb-1">
          You didn't join our slack yet!
        </v-list-item-title>
        <v-list-item-subtitle>
          <a :href="links[0]" target="_blank"> Join Our Slack! </a>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content v-else>
        <v-list-item-title class="headline mb-1">
          Check out our channels
        </v-list-item-title>
        <v-list-item-subtitle v-for="link in links" :key="link.id">
          <a :href="link[0]" target="_blank"> View the {{ link[1] }} channel</a>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-card>
  </v-container>
</template>

<script>
import { functions } from "@/firebase/init";
export default {
  name: "SlackComponent",
  props: ["channels"],
  data() {
    return {
      userExists: null,
      links: null
    };
  },
  async mounted() {
    var slackUserData = await functions.httpsCallable("checkSlackUser")({});
    this.userExists = slackUserData.data;
    var slackComponentData = await functions.httpsCallable(
      "populateSlackComponent"
    )({
      userAdded: this.userExists,
      channels: this.channels
    });
    this.links = slackComponentData.data;
  }
};
</script>
