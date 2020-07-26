<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit()">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Log In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
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

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">Submit</button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>
<script>
//import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      // test用, 之後刪除↓ //
      const data = JSON.stringify({
        user: {
          email: this.email,
          password: this.password,
        },
      });

      this.$router.push("/tweets"); // 登入成功後轉址
      this.$store.commit("setCurrentUser", data.user);
      // test用, 之後刪除↑ //

      if (!this.email || !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入 email 和 password",
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
            this.$store.commit("setCurrentUser", data.user); // 資料傳入vuex
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
        }); */

      // TODO: 即時檢核：如發現 token 被修改或無效，則將頁面重新導回登入頁。
      // 記住帳密：讓已經登入過的使用者可以直接進入餐廳首頁而不用重新輸入帳號密碼。
    },
  },
};
</script>
