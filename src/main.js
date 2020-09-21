import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as firebase from "firebase/app";
import vuetify from "./plugins/vuetify";
import DatetimePicker from "vuetify-datetime-picker";
import VueMeta from "vue-meta";

Vue.use(DatetimePicker);
Vue.use(VueMeta);

Vue.config.productionTip = false;

var app = null;
firebase.auth().onAuthStateChanged(async () => {
  if (!app) {
    await store.dispatch("getUser");
    new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
