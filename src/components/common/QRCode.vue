<template>
  <v-container>
    <v-card>
      <v-img
        :src="
          `https://chart.apis.google.com/chart?chs=200x200&cht=qr&chld=|1&chl=${user.uid}`
        "
      ></v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "QRCode",
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
