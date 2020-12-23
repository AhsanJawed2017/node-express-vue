import { createWebHistory, createRouter } from "vue-router";

import Register from "../components/Register";

const routes = [
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
