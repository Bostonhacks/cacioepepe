<template>
  <v-layout align-center justify-center>
    <v-container>
      <v-layout text-center wrap>
        <v-flex xs12></v-flex>
        <v-flex mb-4>
          <h1 class="display-2 font-weight-bold mb-3">
            Welcome to the Sponsor Dashboard
          </h1>
          <v-card flat tile>
            <v-card-text>
              <HackerTable :data="currentData" />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import HackerTable from "@/components/common/HackerTable";
import { functions } from "@/firebase/init";
export default {
  name: "SponsorDashboard",
  components: {
    HackerTable
  },
  data() {
    return {
      data: null,
      currentData: null,
      itemStatus: ["Accepted", "Confirmed", "Checked In"],
      statusList: [
        "Started",
        "Submitted",
        "Rejected",
        "Waitlisted",
        "Accepted",
        "Confirmed",
        "Declined",
        "Checked In"
      ];
      const out = await functions.httpsCallable("retrieveAllApplications")({});
      const applicants = out.data;
      this.data = await applicants.filter(applicant =>
        applicantStatus.includes(statusList[applicant.status])
      );
    },
    getGender() {
      const genders = ["Male", "Female", "Other"];
      let genderData = [0, 0, 0];
      let index = 0;
      this.data.map(applicant => {
        index = genders.indexOf(applicant.gender);
        genderData[index]++;
      });
      this.genderChartData.datasets[0].data = genderData;
    },

    getMajor() {
      const majors = [
        "Computer Science",
        "Electrical Engineering",
        "Computer Engineering"
      ];
      let majorData = [0, 0, 0, 0];
      let index = 0;
      this.data.map(applicant => {
        index = majors.indexOf(applicant.major);
        if (index == -1) {
          //indexOf() returns -1 if item not found in array
          index = 3;
        }
        majorData[index]++;
      });
      this.majorChartData.datasets[0].data = majorData;
    },

    getEducation() {
      const educationLevels = [
        "High School",
        "College Freshman",
        "College Sophomore",
        "College Junior",
        "College Senior"
      ];
      let educationData = [0, 0, 0];
      let index = 0;
      this.data.map(applicant => {
        index = educationLevels.indexOf(applicant.educationLevel);
        if (index == -1) {
          index = 2;
        } else if (index != 0) {
          index = 1;
        }
        educationData[index]++;
      });
      this.educationChartData.datasets[0].data = educationData;
    },

    getHackathons() {
      const hackathonNumbers = ["0", "1", "2", "3+"];
      let hackathonData = [0, 0, 0, 0];
      let index = 0;
      this.data.map(applicant => {
        index = hackathonNumbers.indexOf(applicant.beenToHackathon);
        hackathonData[index]++;
      });
      this.hackathonsChartData.datasets[0].data = hackathonData;
    }
      ]
    };
  },

  async mounted() {
    var out = await functions.httpsCallable("retrieveAllApplications")({});
    this.data = out.data;
    this.currentData = this.data.filter(item =>
      this.itemStatus.includes(this.statusList[item.status])
    );
  }
};
</script>
