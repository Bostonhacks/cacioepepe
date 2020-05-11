import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebaseui/dist/firebaseui.css";
import vuetify from "./plugins/vuetify";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

var app = null;
firebase.auth().onAuthStateChanged(async () => {
  if (!app) {
    if (document.referrer.endsWith("sponsorlogin")) {
      await store.dispatch("setSponsor");
      new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
      }).$mount("#app");
    } else {
      await store.dispatch("setUser");
      new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
      }).$mount("#app");
    }
  }
});
