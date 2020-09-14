<template>
  <div class="sky-background">
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

<style scoped>
.sky-background {
  background-color: #80d2ff;
}
</style>
