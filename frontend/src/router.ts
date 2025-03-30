import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import { isAuthenticated } from "./utils/isAuthenticated";

const routes = [
  { path: "/login", component: Login },
  {
    path: "/link",
    component: () => import("./views/Link.vue"),
    meta: { requiredAuth: true },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiredAuth && !isAuthenticated()) {
    next("/login");
  } else {
    next(); // Caso contrário, permite a navegação normalmente
  }
});
