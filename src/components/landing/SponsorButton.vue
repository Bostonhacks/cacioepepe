<template>
  <div class="btn-shadow">
    <button class="btn font-weight-bold text-sm-h4 text-h6">
      SPONSOR<br />SIGN<br/>IN
    </button>
  </div>
</template>

<script>
export default {
  name: "SponsorButton"
};
</script>

<style scoped>
.btn {
  color: #f7f7f7;
  position: relative;
  padding: 10px 20px;
  top: -8px;
  left: -5px;
  background: linear-gradient(
    128.47deg,
    #ffa767 7.86%,
    rgba(255, 217, 116, 0.13) 79.44%
  );
  border-radius: 50%;
  text-shadow: 1px 1px 3px #f7f7f7;
}

.btn:active {
  transform: translateY(3px) translateX(3px);
}

.btn-shadow {
  display: inline-block;
  border-radius: 50%;
  background: #ec602d;
}
</style>
