import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import { functions } from "@/firebase/init.js";

Vue.use(Vuex);

const state = {
  user: null
};

const getters = {
  getUser: state => state.user
};

const mutations = {
  setUser: (state, payload) => {
    state.user = payload;
  }
};

const actions = {
  setUser: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    var raid = await functions.httpsCallable("getUserData")({
      uid: user.uid
    });
    if (!raid) {
      await functions.httpsCallable("createNewUser")({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email
      });
      raid = await functions.httpsCallable("getUserData")({
        uid: user.uid
      });
      context.commit("setUser", raid.data);
    } else {
      context.commit("setUser", raid.data);
    }
  },
  getUser: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    var raid = await functions.httpsCallable("getUserData")({
      uid: user.uid
    });
    context.commit("setUser", raid.data);
  },
  logOut: async context => {
    await firebase.auth().signOut();
    context.commit("setUser", null);
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store;
