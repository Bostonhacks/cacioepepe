<template>
  <v-container>
    <v-card class="mx-auto" max-width="500" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1"
            >Sorry, our Application has been closed</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn text @click="home()">Back to Home</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    }
  }
};
</script>
