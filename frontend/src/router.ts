import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import { useAuthStore } from "./context/Auth/AuthContext";

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
  const authStore = useAuthStore();

  if (!authStore.isLoggedIn) {
    authStore.initializeAuth();
  }

  if (to.meta.requiredAuth && !authStore.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});
