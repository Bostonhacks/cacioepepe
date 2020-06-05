<template>
  <v-col md="6" xs="12" cols="12">
    <v-card class="mx-auto" id="teamCard" v-if="inTeam">
      <v-card-text>
        <div class="flex-container">
          <p class="display-1 text--primary rmar">{{ teamName }}</p>
          <img v-on:click="remove" class="svg" src="../../assets/exit.svg" alt />
        </div>
        <h2>Members</h2>
        <div class="people">
          <img class="person" src="../../assets/person.png" alt />
          <img class="person" src="../../assets/person.png" alt />
          <img class="person" src="../../assets/person.png" alt />
          <img class="person" src="../../assets/person.png" alt />
          <img class="person" src="../../assets/person.png" alt />
          <img class="person" src="../../assets/person.png" alt />
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto" id="addTeam" v-if="!inTeam">
      <v-card-text>
        <p class="display-1 text--primary">Add your team!</p>
        <input type="text" v-model="name" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      inTeam: true,
      teamName: "Totally Radical"
    };
  },
  methods: {
    remove() {
      this.inTeam = false;
      this.teamName = "Undefined";
    }
  }
};
</script>

<style scoped>
.people,
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.person {
  object-fit: cover;
  width: 4.5rem;
  height: 4.5rem;
  margin-right: 0.25rem;
  margin-top: 0.25rem;
  border-radius: 50%;
}

.svg {
  height: 3rem;
}

.svg:hover {
  cursor: pointer;
}

.rmar {
  margin-right: auto;
}
</style>