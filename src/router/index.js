import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/Admin.vue"),
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: "/application",
    name: "application",
    component: () => import("@/views/Application.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
    meta: {
      requiresAuth: false
    }
  },

  {
    path: "/sponsor",
    name: "sponsor",
    component: () => import("@/views/Sponsor.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/sponsorlogin",
    name: "sponsorlogin",
    component: () => import("@/views/Login.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/mentor",
    name: "mentor",
    component: () => import("@/views/Mentor.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/mentorlogin",
    name: "mentorlogin",
    component: () => import("@/views/Login.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/volunteer",
    name: "volunteer",
    component: () => import("@/views/Volunteer.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/volunteerlogin",
    name: "volunteerlogin",
    component: () => import("@/views/Login.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/live",
    name: "live",
    component: () => import("@/views/Live.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      requiresAuth: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = store.state.user;
    if (user) {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.isAdmin)) {
    let user = store.state.user;
    if (user.role == "admin") {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
