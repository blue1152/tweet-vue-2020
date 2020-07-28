<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit()">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">建立你的帳號</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">帳號</label>
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

      <div class="form-label-group mb-2">
        <label for="name">名稱</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
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
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">密碼確認</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">註冊</button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/">取消</router-link>
        </p>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck,
      });

      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
  },
};
</script>