<template>
  <v-container>
    <v-card>
      <v-list-item-content v-if="checkUser == false && retrieveLinks()">
        <v-list-item-title class="headline mb-1">
          You didn't join our slack yet!
        </v-list-item-title>
        <v-list-item-subtitle>
          <a :href="links[0]"> Join Our Slack! </a>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-content v-else>
        <v-list-item-title class="headline mb-1">
          Check out our channels
        </v-list-item-title>
        <v-list-item-subtitle v-for="link in links" :key="link">
          <a :href="link[0]"> View the {{ link[1] }} channel</a>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-card>
  </v-container>
</template>

<script>
import { functions } from "@/firebase/init";
export default {
  name: "SlackComponent",
  props: ["uid", "channels"],
  data() {
    return {
      userExists: null,
      links: null,
      test: false
    };
  },
  methods: {
    async checkUser() {
      this.userExists = await functions.httpsCallable("checkSlackUser")(
        this.uid
      );
      return this.userExists;
    },
    async retrieveLinks() {
      this.links = await functions.httpsCallable("populateSlackComponent")({
        userAdded: this.userExists,
        channel: this.channels
      });
    }
  }
};
</script>
