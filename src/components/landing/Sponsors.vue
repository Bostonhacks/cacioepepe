<template>
  <div v-scrollanimation>
    <div class="crd-shadow">
      <div class="crd">
        <div class="title font-weight-bold text-h3">OUR SPONSORS</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.crd {
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
  border-radius: 11px;
}

.crd-shadow {
  border-radius: 11px;
  background: #ec602d;
}
.title {
  text-align: center;
  margin-right: 5%;
  margin-top: 3%;
}
.content {
  text-align: center;
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
