// for all pages
import Vue from "vue";
import VueRouter from "vue-router";
import Tweets from "../views/Tweets.vue";
import User from "../views/User.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import Regist from "../views/Regist.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/login", // 登入後才能使用
  },
  {
    path: "/tweets",
    name: "tweets",
    component: Tweets, // 主頁
  },
  {
    path: "/user",
    name: "user",
    component: User, // 使用者個人頁
  },
  {
    path: "/login",
    name: "log-in",
    component: Login, // 使用者登入頁
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin, // 後台登入頁
  },
  {
    path: "/regist",
    name: "regist",
    component: Regist, // 使用者註冊
  },
  {
    path: "/tweets/user/userpost",
    name: "userpost",
    component: () => import("../components/UserPost.vue"), // 使用者自己的推文
  },
  {
    path: "/tweets/user/userreply",
    name: "userreply",
    component: () => import("../components/UserReply.vue"), // 使用者回覆
  },
  {
    path: "/tweets/user/userlikes",
    name: "userlikes",
    component: () => import("../components/UserLikes.vue"), // 使用者喜愛的推文
  },
  {
    path: "/tweets/user/setting",
    name: "setting",
    component: () => import("../views/Setting.vue"), // 使用者設定
  },
  {
    path: "/tweets/user/followers",
    name: "followers",
    component: () => import("../views/Followers.vue"), // 自己的跟隨誰清單
  },
  {
    path: "/tweets/user/following",
    name: "following",
    component: () => import("../views/Following.vue"), // 自己的跟隨者清單
  },
  {
    path: "/tweets/otheruser",
    name: "otheruser",
    component: () => import("../views/OtherUser.vue"), // 別人的 user profile
  },
  {
    path: "/admin/postslist",
    name: "postslist",
    component: () => import("../views/PostsList.vue"), // 後台推文清單
  },
  {
    path: "/admin/userslist",
    name: "userslist",
    component: () => import("../views/UsersList.vue"), // 後台使用者清單
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound, // 找不到頁面
  },
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes,
});

export default router;
