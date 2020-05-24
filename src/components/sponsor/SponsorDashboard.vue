<template>
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
</template>

<script>
// import HackerTable from "../common/HackerTable";
export default {};
</script>
