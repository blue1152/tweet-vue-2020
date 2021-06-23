<template>
  <div id="tweets">
    <div id="leftbar">
      <UserLeftbar :UserLeftbar="userData" />
    </div>
    <div id="main-content">
      <div class="content-header">
        <div class="index-title">首頁</div>
        <div class="index-line2"></div>
        <form class="user-input" @submit.prevent.stop="handleSubmit()">
          <textarea cols="50" rows="5" v-model="description"></textarea>
          <button type="submit">推文</button>
        </form>
      </div>
      <div class="main-tweets">
        <AllPosts :allpost="data" />
      </div>
    </div>
    <div id="rightbar">
      <FollowingBar />
    </div>
  </div>
</template>
<script>
import { Toast } from "./../utils/helpers";
import UserLeftbar from "../components/UserLeftbar";
import FollowingBar from "../components/FollowingBar";
import AllPosts from "../components/AllPosts";
import tweetAPI from "./../apis/tweets";
import userAPI from "./../apis/users";
export default {
  name: "tweets",
  components: {
    UserLeftbar,
    FollowingBar,
    AllPosts,
  },
  data() {
    return {
      userData: {}, // 使用者資料
      data: [], // 全部推文資料
      description: "有什麼新鮮事？",
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
    // 最上方送出新推文
    handleSubmit() {
      if (!this.description) {
        Toast.fire({
          icon: "warning",
          title: "記得要寫東西再送出喔~",
        });
        return;
      } else if (this.description.length > 140) {
        Toast.fire({
          icon: "warning",
          title: "最多只能輸入140字~",
        });
        return;
      }
      tweetAPI
        .createTweets({
          userId: localStorage.getItem("id"),
          description: this.description,
        })
        .then((response) => {
          //console.log("response", response);
          const data = response.data;
          //console.log(data);
          // 未成功
          if (data.status !== "success") {
            throw new Error(data.message);
          } else {
            // 成功
            const page = "";
            this.fetchTweets(page);
            this.description = "有什麼新鮮事？";
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
        .getCurrentUser(userId)
        .then((response) => {
          //console.log("response", response);
          const dataArray = response.data;
          // 未成功
          if (response.status != "200") {
            throw new Error(response.statusText);
          } else {
            // 成功
            //console.log(response.statusText)
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
          if (response.status != "200") {
            throw new Error(response.statusText);
          } else {
            // 成功
            //console.log(response.statusText)
            this.data = dataArray;
            //console.log(dataArray);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
