import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TableView from "../views/TableView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/me",
      name: "me",
      component: () => import("../views/Me.vue"),
    },
    {
      path: "/tables/:id",
      name: "tables",
      component: TableView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFound,
    },
  ],
});

export default router;
