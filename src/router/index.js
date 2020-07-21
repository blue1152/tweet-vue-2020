import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Regist from "../views/Regist.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "log-in",
    component: Login,
  },
  {
    path: "/regist",
    name: "regist",
    component: Regist,
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
