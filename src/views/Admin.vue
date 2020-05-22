<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">Welcome to God Mode!</h1>
          <AdminStats :data="data" />
          <v-tabs
            v-model="tab"
            background-color="deep-purple accent-4"
            class="elevation-2"
            dark
            grow
          >
            <v-tab v-for="i in tabs" :key="i">
              {{ i }}
            </v-tab>

            <v-tab-item key="tabs[0]">
              <v-card flat tile>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item key="tabs[1]">
              <v-card flat tile>
                <v-card-text><UserTable :data="data"/></v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item key="tabs[2]">
              <v-card flat tile>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import UserTable from "../components/UserTable";
import AdminStats from "../components/AdminStats";
import { functions } from "../firebase/init";

export default {
  components: {
    UserTable,
    AdminStats
  },
  data() {
    return {
      data: null,
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tabs: ["Stats", "God Mode", "Settings"]
    };
  },
  async mounted() {
    var out = await functions.httpsCallable("retrieveAllApplications")({});
    this.data = out.data;
  }
};
</script>
