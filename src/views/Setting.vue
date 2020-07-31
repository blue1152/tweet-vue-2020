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
      <span class="set-account">@<input type="text" class="form-control" placeholder="acount" v-model="userDataNew.account"></span>
    </div>
  </div>
    <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">名稱</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" placeholder="name" v-model="userDataNew.name">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" placeholder="Email" v-model="userDataNew.email">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">密碼</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" placeholder="Password" v-model="userDataNew.password">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">密碼確認</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" placeholder="PasswordConfirm" v-model="userDataNew.passwordConfirm">
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="save-btn" @submit.prevent.stop="handleSubmitUser()">儲存</button>
    </div>
  </div>
</form>
  </div>
</div>
</template>
<script>
import { Toast } from "./../utils/helpers";
import UserLeftbar from "../components/UserLeftbar";
import tweetAPI from './../apis/tweets';
import userAPI from './../apis/users';
export default {
  name: "setting",
  components: {
    UserLeftbar,
  },
  data() {
    return {
      userData: {},
      data: [],
      userDataNew: {
        account: "",
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        introduction: "",
        avatar: "",
        cover: ""
      },
    };
  },
 created() {
    // 首頁推文 /tweets
    // 個別推文 /tweets/:tweetId
    // 個別回覆 /tweets/:tweet_id/replies
    const page = '';
    const userId = localStorage.getItem("id");
    this.fetchTweets(page);
    this.fetchUser(userId);
  },
  methods: {
    handleSubmitUser() {
      if (!this.description) {
        Toast.fire({
          icon: "warning",
          title: "記得要寫東西再送出喔~",
        });
        return;
      }
      tweetAPI
        .updateUser({
          userId: localStorage.getItem("id"),
          account: this.userDataNew.account,
          name: this.userDataNew.name,
          email: this.userDataNew.email,
          password: this.userDataNew.password,
          passwordConfirm: this.userDataNew.passwordConfirm,
          introduction: this.userDataNew.introduction,
          avatar: this.userDataNew.avatar,
          cover: this.userDataNew.cover,
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
            const page = '';
            this.fetchTweets(page)
          }
        })
        .catch((error) => {
          this.description = ""; // 清空
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: "字數過長",
          });
          console.log("error", error);
        }); 
    },
    fetchUser(userId) {
    userAPI
      .getCurrentUser (userId)
      .then((response) => {
        //console.log("response", response);
        const dataArray  = response.data;
        // 未成功
        if (response.status != "200" || response.data.length == 0) {
          throw new Error(response.statusText);
        } else {
        // 成功
        //console.log(response.statusText)
        //console.log(dataArray)
        this.userData = dataArray
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
        const dataArray  = response.data;
        // 未成功
        if (response.status != "200" || response.data.length == 0) {
          throw new Error(response.statusText);
        } else {
        // 成功
        //console.log(response.statusText)
        //console.log(dataArray)
        this.data = dataArray
        }
      })
      .catch((error) => {
         console.log("error", error);
      }); 
    }
  },
};
</script>
<style lang="scss">
// 版面配置
$orange: #ff6600;
$main-black: #000;
$text-black: #1c1c1c;
$grey: #9197a3;
$text-grey: #657786;
$background-grey: #f5f8fa;
$main-grey: #e6ecf0;
#setting {
  display: flex;
  flex-wrap: wrap;
  margin: 85px 16px;
}
#leftbar {
  width: 378px;
  height: 100%;
  overflow: hidden;
}
#main-content-setting {
  width: 600px;
  overflow: hidden;
}
.save-btn {
  border-radius: 50px;
  width: 122px;
  height: 50px;
  background: $orange;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  cursor: pointer;
}
</style>