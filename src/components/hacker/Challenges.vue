<template>
  <v-col cols="12" xs="12" md="4">
    <v-card shaped class="mx-auto" elevation="10">
      <v-card-text>
        <v-row class="Test">
          <div class="Title">Challenges</div>
        </v-row>
        <v-divider></v-divider>
        <v-row v-for="company in companies" :key="company.name">
          <v-col cols="12" xs="12" md="12">
            <v-card shaped cols="12" xs="12" md="12" class="mx-auto">
              <img :src="require(`@/assets/${company.logo}`)" width="160px" />

              <v-expansion-panels multiple flat hover>
                <v-expansion-panel>
                  <v-expansion-panel-header class="Dropdown"
                    >Challenge</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>{{
                    company.challenge
                  }}</v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header class="Dropdown"
                    >Prize</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>{{
                    company.prize
                  }}</v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Status",
  data() {
    return {
      companies: [
        {
          name: "Google",
          logo: "pinata.svg",
          challenge: "Best use of API",
          prize: "Dog"
        },
        {
          name: "Bose",
          logo: "pinata.svg",
          challenge: "Big Time Rush",
          prize: "Cat"
        },
        {
          name: "Raytheon",
          logo: "pinata.svg",
          challenge: "Lary",
          prize: "Fish"
        }
      ]
    };
  }
};
</script>

<style>
.status {
  padding: 0.5em;
  border-radius: 20px;
  text-align: center;
}

.Started {
  color: rgba(0, 100, 0, 1);
  background: rgba(0, 200, 0, 0.5);
}

.Submitted {
  color: rgb(0, 85, 100);
  background: rgba(0, 200, 0, 0.5);
}

.Dropdown {
  color: rgb(9, 104, 9);
  font-weight: bold;
}

.Title {
  color: rgb(9, 104, 9);
  font-weight: bold;
  text-align: center;
  align-self: center;
  width: 100;
}

.Test {
  justify-content: center;
}
</style>
