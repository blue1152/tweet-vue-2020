import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "./../apis/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      account: "",
      name: "",
      id: -1,
      email: "",
      role: "",
    },
    isAuthenticated: false,
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser,
      };
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true;
    },
    revokeAuthentication(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  actions: {
    // 在 actions 中可以透過參數的方式取得 commit 的方法
    async fetchCurrentUser({ commit }) {
      try {
        const data = await usersAPI.getCurrentUser(localStorage.getItem("id"));
        console.log(data.data.user);

        if (data.statusText === "error") {
          throw new Error(data);
        }

        const account = data.data.account;
        const name = data.data.name;
        const id = String(data.data.user.id);
        const email = data.data.email;
        const role = data.data.user.role;

        commit("setCurrentUser", {
          account,
          name,
          id,
          email,
          role,
        });
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  modules: {},
});
