<template>
  <div id="setting">
    <div id="leftbar">
      <UserLeftbar :UserLeftbar="userData" />
    </div>
    <div id="main-content-setting">
      <h3>帳戶設定</h3>
      <form>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">帳號</label>
          <div class="col-sm-10">
            <span class="set-account"
              >@<input
                type="text"
                class="form-control"
                v-model="userData.account"
            /></span>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">名稱</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="userData.name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" v-model="userData.email" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >密碼</label
          >
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              placeholder="請輸入新密碼"
              v-model="userData.password"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >密碼確認</label
          >
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              placeholder="確認新密碼"
              v-model="userData.passwordConfirm"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="save-btn" @click="handleSubmitUser()">
              儲存
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { Toast } from "./../utils/helpers";
import UserLeftbar from "../components/UserLeftbar";
import tweetAPI from "./../apis/tweets";
import userAPI from "./../apis/users";
export default {
  name: "setting",
  components: {
    UserLeftbar,
  },
  // 監聽表單變化

  data() {
    return {
      data: [],
      userData: {},
      userDataNew: {
        account: "",
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        introduction: "",
        avatar: "",
        cover: "",
      },
    };
  },
  created() {
    // 首頁推文 /tweets
    // 個別推文 /tweets/:tweetId
    // 個別回覆 /tweets/:tweet_id/replies
    const page = "";
    const userId = localStorage.getItem("id");
    this.fetchTweets(page);
    this.fetchUser(userId);
  },
  methods: {
    // 送出編輯資料
    handleSubmitUser() {
      if (!this.userData.password || !this.userData.passwordConfirm) {
        Toast.fire({
          icon: "warning",
          title: "請輸入新密碼並確認",
        });
        return;
      } else if (this.userData.password !== this.userData.passwordConfirm) {
        Toast.fire({
          icon: "warning",
          title: "密碼輸入不一致",
        });
        return;
      } else if (
        !this.userData.account ||
        !this.userData.name ||
        !this.userData.email
      ) {
        Toast.fire({
          icon: "warning",
          title: "欄位不能有空白",
        });
        return;
      }
      tweetAPI
        .updateUser({
          userId: localStorage.getItem("id"),
          account: this.userData.account,
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
          passwordConfirm: this.userData.passwordConfirm,
          introduction: this.userData.introduction,
          avatar: this.userData.avatar,
          cover: this.userData.cover,
        })
        .then((response) => {
          console.log("response", response);
          const data = response.data;
          //console.log(data);
          // 未成功
          if (data.status !== "success") {
            throw new Error(data.message);
          } else {
            // 成功
            this.$router.push("/tweets");
          }
        })
        .catch((error) => {
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: "字數過長",
          });
          console.log("error", error);
        });
    },
    // 取得原始資料
    fetchUser(userId) {
      userAPI
        .getCurrentUser(userId)
        .then((response) => {
          //console.log("response", response);
          const dataArray = response.data;
          // 未成功
          if (response.status != "200" || response.data.length == 0) {
            throw new Error(response.statusText);
          } else {
            // 成功
            //console.log(response.statusText)
            console.log(dataArray);
            this.userData = dataArray;
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    fetchTweets(page) {
      tweetAPI
        .getMainContent(page)
        .then((response) => {
          //console.log("response", response);
          const dataArray = response.data;
          // 未成功
          if (response.status != "200" || response.data.length == 0) {
            throw new Error(response.statusText);
          } else {
            // 成功
            //console.log(response.statusText)
            //console.log(dataArray)
            this.data = dataArray;
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>