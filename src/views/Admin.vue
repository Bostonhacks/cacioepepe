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
            <v-tab v-for="i in tabs" :key="i">{{ i }}</v-tab>

            <v-tab-item key="tabs[0]">
              <v-card flat tile>
                <v-card-text>{{ text }}</v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item key="tabs[1]">
              <v-card flat tile>
                <v-card-actions>
                  <v-select
                    :items="statusList"
                    v-model="itemStatus"
                    label="Status"
                    multiple
                    @change="filterStatus"
                  ></v-select>
                </v-card-actions>
                <v-card-text>
                  <HackerTable :data="currentData" />
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item key="tabs[2]">
              <v-card flat tile>
                <v-card-text>
                  <Timeline />
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import HackerTable from "@/components/common/HackerTable";
import AdminStats from "@/components/admin/AdminStats";
import Timeline from "@/components/common/Timeline";
import { functions } from "@/firebase/init";

export default {
  name: "Admin",
  components: {
    HackerTable,
    AdminStats,
    Timeline
  },
  methods: {
    async filterStatus() {
      if (this.itemStatus.length == 0) {
        this.currentData = this.data;
      } else {
        this.currentData = this.data.filter(item =>
          this.itemStatus.includes(this.statusList[item.status])
        );
      }
    }
  },
  data() {
    return {
      data: null,
      currentData: null,
      tab: null,
      itemStatus: [],
      statusList: [
        "Started",
        "Submitted",
        "Rejected",
        "Waitlisted",
        "Accepted",
        "Confirmed",
        "Declined",
        "Checked In"
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tabs: ["Stats", "God Mode", "Settings"]
    };
  },
  async mounted() {
    var out = await functions.httpsCallable("retrieveAllApplications")({});
    this.data = out.data;
    this.currentData = this.data;
  }
};
</script>
