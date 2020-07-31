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
          placeholder="Account"
          autocomplete="username"
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

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit" :disabled="isProcessing">登入</button>

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
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";
export default {
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.account || !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請填入 帳號 和 密碼",
        });
        return;
      }

      this.isProcessing = true

      authorizationAPI
        .logIn({
          account: this.account,
          password: this.password,
        })
        .then((response) => {
          //console.log("response", response);
          const data = response.data;
          //console.log(data);
          // 未成功
          if (response.data.status !== "success") {
            throw new Error(data.message);
          } else {
            // 成功
            const token = String(data.token)
            const userId = String(data.user.id)
            localStorage.setItem("token", token); // 存入token
            localStorage.setItem("id", userId); // 存入使用者id
            this.$store.commit("setCurrentUser", data.user); // 資料傳入vuex (store/index.js)
            this.$router.push("/tweets"); // 登入成功後轉址
          }
        })
        .catch((error) => {
          this.password = ""; // 清空密碼
          this.isProcessing = false; // 還原submit btn
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: "請確認您輸入了正確的帳號密碼",
          });
          console.log("error", error);
        }); 

      // TODO: 即時檢核：如發現 token 被修改或無效，則將頁面重新導回登入頁。
    },
  },
};
</script>
