<template>
  <v-container>
    <v-card v-if="qrCode">
      <div v-if="typeof qrCode == 'string'" v-html="qrCode"></div>
      <div v-else>
        Error Code {{ qrCode["code"] + " " + qrCode["message"] }}
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { functions } from "@/firebase/init";
export default {
  name: "QRCode",
  data() {
    return {
      qrCode: null
    };
  },
  async mounted() {
    var qr = await functions.httpsCallable("generateQRCode")({});
    this.qrCode = qr.data;
  }
};
</script>
