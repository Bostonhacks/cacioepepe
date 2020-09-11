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
  },
  setSponsor: (state, payload) => {
    state.user = payload;
  },
  setVolunteer: (state, payload) => {
    state.user = payload;
  },
  setMentor: (state, payload) => {
    state.user = payload;
  }
};

const actions = {
  setUser: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    var raid = await db
      .collection("users")
      .doc(user.uid)
      .get();
    if (!raid.exists) {
      const userDocRef = db.collection("users").doc(user.uid);
      await userDocRef.set({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        role: "user"
      });
      raid = await db
        .collection("users")
        .doc(user.uid)
        .get();
      context.commit("setUser", raid.data());
    } else {
      context.commit("setUser", raid.data());
    }
  },
  setSponsor: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    var raid = await db
      .collection("users")
      .doc(user.uid)
      .get();
    if (!raid.exists) {
      const userDocRef = db.collection("users").doc(user.uid);
      await userDocRef.set({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        role: "sponsor"
      });
      raid = await db
        .collection("users")
        .doc(user.uid)
        .get();
      context.commit("setSponsor", raid.data());
    } else {
      context.commit("setSponsor", raid.data());
    }
  },
  setVolunteer: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    var raid = await db
      .collection("users")
      .doc(user.uid)
      .get();
    if (!raid.exists) {
      const userDocRef = db.collection("users").doc(user.uid);
      await userDocRef.set({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        role: "volunteer"
      });
      raid = await db
        .collection("users")
        .doc(user.uid)
        .get();
      context.commit("setVolunteer", raid.data());
    } else {
      context.commit("setVolunteer", raid.data());
    }
  },
  setMentor: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    var raid = await db
      .collection("users")
      .doc(user.uid)
      .get();
    if (!raid.exists) {
      const userDocRef = db.collection("users").doc(user.uid);
      await userDocRef.set({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        role: "mentor"
      });
      raid = await db
        .collection("users")
        .doc(user.uid)
        .get();
      context.commit("setMentor", raid.data());
    } else {
      context.commit("setMentor", raid.data());
    }
  },
  getUser: async context => {
    const user = firebase.auth().currentUser;
    if (!user) {
      return;
    }
    const raid = await db
      .collection("users")
      .doc(user.uid)
      .get();
    context.commit("setUser", raid.data());
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
