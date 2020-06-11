<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">Welcome to God Mode!</h1>
          <AdminStats :data="hackerData" />
          <SlackInfoUpload />
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
                <v-card-title>
                  Hacker Table
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="statusList"
                    v-model="itemStatus"
                    label="Status"
                    multiple
                    @change="filterStatus(hackerCurrentData, hackerData)"
                  ></v-select>
                </v-card-actions>
                <v-card-text>
                  <HackerTable :data="hackerCurrentData" />
                </v-card-text>
              </v-card>
              <v-card flat tile>
                <v-card-title>
                  Mentor Table
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="statusList"
                    v-model="itemStatus"
                    label="Status"
                    multiple
                    @change="filterStatus(mentorCurrentData, mentorData)"
                  ></v-select>
                </v-card-actions>
                <v-card-text>
                  <MentorTable :data="mentorCurrentData" />
                </v-card-text>
              </v-card>
              <v-card flat tile>
                <v-card-title>
                  Volunteer Table
                </v-card-title>
                <v-card-actions>
                  <v-select
                    :items="statusList"
                    v-model="itemStatus"
                    label="Status"
                    multiple
                    @change="filterStatus(volunteerCurrentData, volunteerData)"
                  ></v-select>
                </v-card-actions>
                <v-card-text>
                  <VolunteerTable :data="volunteerCurrentData" />
                </v-card-text>
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
import HackerTable from "@/components/common/HackerTable";
import AdminStats from "@/components/admin/AdminStats";
import VolunteerTable from "@/components/admin/VolunteerTable";
import MentorTable from "@/components/admin/MentorTable";
import SlackInfoUpload from "@/components/admin/SlackInfoUpload";
import { functions } from "@/firebase/init";

export default {
  name: "Admin",
  components: {
    HackerTable,
    AdminStats,
    VolunteerTable,
    MentorTable,
    SlackInfoUpload
  },
  methods: {
    async filterStatus(currentData, data) {
      if (this.itemStatus.length == 0) {
        currentData = data;
      } else {
        currentData = data.filter(item =>
          this.itemStatus.includes(this.statusList[item.status])
        );
      }
    }
  },
  data() {
    return {
      hackerData: null,
      hackerCurrentData: null,
      mentorData: null,
      mentorCurrentData: null,
      volunteerData: null,
      volunteerCurrentData: null,
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
    var hackOut = await functions.httpsCallable("retrieveAllApplications")({});
    var mentorOut = await functions.httpsCallable("retrieveAllMentors")({});
    var volunteerOut = await functions.httpsCallable("retrieveAllVolunteers")(
      {}
    );
    this.hackerData = hackOut.data;
    this.mentorData = mentorOut.data;
    this.volunteerData = volunteerOut.data;
    this.hackerCurrentData = this.hackerData;
    this.volunteerCurrentData = this.volunteerData;
    this.mentorCurrentData = this.mentorData;
  }
};
</script>
