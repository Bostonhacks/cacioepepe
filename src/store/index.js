import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import { db } from "@/firebase/init.js";

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
  getUser: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    const raid = await db
      .collection("users")
      .doc(user.uid)
      .get();
    if (raid.exists) {
      context.commit("setUser", raid.data());
    } else {
      context.commit("setUser", { role: null });
    }
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
