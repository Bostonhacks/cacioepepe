<template>
  <!-- <div>Hello this is a status component in a actual vue-y component!</div> -->
  <v-col cols="12" xs="12" md="6">
    <v-card class="mx-auto">
      <v-card-text>
        <v-row>
          <v-col cols="12" xs="12" md="6">
            <div class="display-1 text--primary">Application Status</div>
          </v-col>
          <v-col cols="12" xs="12" md="6">
            <h3 class="status display-2 Started">TEST</h3>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
  <!-- statusList: [
        "Started",
        "Submitted",
        "Rejected",
        "Waitlisted",
        "Accepted",
        "Confirmed",
        "Declined",
        "Checked In"
  ],-->
</template>

<script>
export default {
  name: "Status"
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
</style>