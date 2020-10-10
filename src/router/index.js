import store from "@/store/index.js";
// we want to NOT import Home dynamically because we will always
// want it on first render, so dont code-split it!
import Home from "@/views/Home";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
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
      requiresAuth: true,
      isEligible: true
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
  // {
  //   path: "/mentor",
  //   name: "mentor",
  //   component: () => import("@/views/Mentor.vue"),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: "/volunteer",
  //   name: "volunteer",
  //   component: () => import("@/views/Volunteer.vue"),
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
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
      requiresAuth: true
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignUp.vue"),
    meta: {
      requiresAuth: false
    }
  },
  /*  {
    path: "/finishsignup",
    name: "finishsignup",
    component: () => import("@/views/FinishSignUp.vue"),
    meta: {
      requiresAuth: true
    }
  },*/
  {
    path: "/resetpw",
    name: "resetpw",
    component: () => import("@/views/ResetPw.vue"),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/views/Privacy.vue"),
    meta: {
      requiresAuth: false
    }
  },
  // PLEASE MAKE SURE THAT THIS IS ALWAYS THE LAST ROUTE!!!
  {
    path: "*",
    name: "notFound",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      requiresAuth: false
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      // simulating the scroll to anchor
      // behavior with router-links
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          // this is a hack to change the router URL...
          // otherwise if you click something like #tracks
          // scroll and click again, Router will simply not respond
          // so we need to reset the url :/
          this.push("/");
          // return actual position of hash link
          return position;
        }
        return new Promise(resolve => {
          setTimeout(() => {
            if (document.querySelector(to.hash)) {
              // anchor hack as mentioned above
              this.push("/");
              resolve(position);
            }
            resolve(false);
          }, 1200);
        });
      }
    }
  }
});

/*router.beforeEach((to, from, next) => {
  let user = store.state.user;
  if (user && to.name != "finishsignup" && notFullySignUp(user)) {
    next({ name: "finishsignup" });
  } else {
    next();
  }
});*/

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

router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.isEligible)) {
    let user = store.state.user;
    if (
      user.role == "hacker" ||
      user.role == "mentor" ||
      user.role == "volunteer"
    ) {
      next();
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

/*const notFullySignUp = user => {
  return user.role == null;
};*/

export default router;
