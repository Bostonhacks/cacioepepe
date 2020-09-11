<template>
  <div>
    <SignUp class="google-signup" />
  </div>
</template>

<style scoped>
.google-signup {
  margin-top: 200px;
}
</style>

<script>
import SignUp from "@/components/login/SignUp";

export default {
  components: {
    SignUp
  }
};
</script>
