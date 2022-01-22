import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: () => import("@/views/Catalog.vue"),
  },
  {
    path: "/inspect/:id",
    name: "Inspect",
    component: () => import("@/views/Inspect.vue"),
  },
  {
    path: "/whatsup",
    beforeEnter: () => {
      location.href = "https://wa.me/+380953622829";
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
