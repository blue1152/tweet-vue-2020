<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit()">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">登入Alphitter</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="account">帳號</label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">密碼</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">登入</button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/regist">註冊Alpitter</router-link>
        </p>
        <p>
          <router-link to="/admin">後台登入</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
//import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // test用, 之後刪除↓ //
      const data = JSON.stringify({
        user: {
          account: this.account,
          password: this.password,
        },
      });

      this.$router.push("/tweets"); // 登入成功後轉址
      this.$store.commit("setCurrentUser", data.user);
      // test用, 之後刪除↑ //

      if (!this.account || !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入 帳號 和 密碼",
        });
        return;
      }

      /*     authorizationAPI
        .logIn({
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log("response", response);
          const { data } = response;
          // 未成功
          if (data.status !== "success") {
            throw new Error(data.message);
          } else {
            // 成功
            localStorage.setItem("token", data.token); // 存入token
            this.$store.commit("setCurrentUser", data.user); // 資料傳入vuex (store/index.js)
            this.$router.push("/tweets"); // 登入成功後轉址
          }
        })
        .catch((error) => {
          // 將密碼欄位清空
          this.password = "";
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: "請確認您輸入了正確的帳號密碼",
          });
          console.log("error", error);
        }); 
      */

      // TODO: 即時檢核：如發現 token 被修改或無效，則將頁面重新導回登入頁。
      // 記住帳密：讓已經登入過的使用者可以直接進入餐廳首頁而不用重新輸入帳號密碼。
    },
  },
};
</script>
