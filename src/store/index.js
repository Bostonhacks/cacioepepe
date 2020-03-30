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
  },
  setSponsor: (state, payload) => {
    state.user = payload;
  },
  setMentor: (state, payload) => {
    state.user = payload;
  },
  setVolunteer: (state, payload) => {
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
    if (!raid.data) {
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
  setSponsor: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    var raid = await functions.httpsCallable("getUserData")({
      uid: user.uid
    });
    if (!raid.data) {
      await functions.httpsCallable("createNewSponsor")({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email
      });
      raid = await functions.httpsCallable("getUserData")({
        uid: user.uid
      });
      context.commit("setSponsor", raid.data);
    } else {
      context.commit("setSponsor", raid.data);
    }
  },
  setMentor: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    var raid = await functions.httpsCallable("getUserData")({
      uid: user.uid
    });
    if (!raid.data) {
      await functions.httpsCallable("createNewMentor")({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email
      });
      raid = await functions.httpsCallable("getUserData")({
        uid: user.uid
      });
      context.commit("setMentor", raid.data);
    } else {
      context.commit("setMentor", raid.data);
    }
  },
  setVolunteer: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    var raid = await functions.httpsCallable("getUserData")({
      uid: user.uid
    });
    if (!raid.data) {
      await functions.httpsCallable("createNewVolunteer")({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email
      });
      raid = await functions.httpsCallable("getUserData")({
        uid: user.uid
      });
      context.commit("setVolunteer", raid.data);
    } else {
      context.commit("setVolunteer", raid.data);
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
