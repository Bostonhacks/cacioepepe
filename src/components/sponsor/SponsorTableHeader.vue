<template>
  <v-simple-table dense fixed-header>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Sponsorship Benefits</th>
          <th class="text-left">$1.5k</th>
          <th class="text-left">$3k</th>
          <th class="text-left">$5k</th>
          <th class="text-left">$7.5k</th>
        </tr>
      </thead>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "SponsorTableHeader"
};
</script>
