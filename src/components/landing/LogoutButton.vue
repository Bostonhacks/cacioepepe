<template>
  <div>
    <div v-scrollanimation>
      <div class="btn-shadow">
        <button
          class="btn button-1 font-weight-bold text-sm-h4 text-h6"
          @click="logOut"
        >
          LOG OUT
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginButton",
  methods: {
    async logOut() {
      await this.$store.dispatch("logOut");
      this.navigate("/");
    }
  }
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
  border-radius: 11px;
  text-shadow: 1px 1px 3px #f7f7f7;
}

.button-1 {
  background-color: transparent;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
}
.button-1:hover {
  box-shadow: 0 0 10px 0 #ff7b46 inset, 0 0 20px 2px #ff7b46;
  border: 3px #ffcf93;
}

.btn:active {
  transform: translateY(8px) translateX(5px);
  background: #fff0c8;
  color: #ec602d;
  text-shadow: 1px 1px 3px #ff7b46;
}

.btn-shadow {
  display: inline-block;
  border-radius: 11px;
  background: #ec602d;
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
