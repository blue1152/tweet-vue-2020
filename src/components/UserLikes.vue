<template>
  <div id="userlikes">
    <div id="leftbar">
      <UserLeftbar :UserLeftbar="userData" />
    </div>
    <div id="main-content">
      <div class="header">
        <UserHeader :UserHeader="userData" />
      </div>
      <div class="main-container">
        <UserLikes :account="account" />
      </div>
    </div>
    <div id="rightbar">
      <FollowingBar />
    </div>
  </div>
</template>
<script>
import UserLeftbar from "../components/UserLeftbar";
import FollowingBar from "../components/FollowingBar";
import UserHeader from "../components/UserHeader";
import UserLikes from "../components/UserLikes";
import tweetAPI from "./../apis/tweets";
import userAPI from "./../apis/users";
export default {
  name: "user",
  components: {
    UserLeftbar,
    FollowingBar,
    UserHeader,
    UserLikes,
  },
  data() {
    return {
      userData: {}, // 使用者資料
      account: {}, // 使用者推文
      reply: [],
    };
  },
  created() {
    // 使用者 /users/:userId/
    // 使用者自己的推文 /users/:userId/tweets
    // 使用者回覆過的貼文 /users/:userId/replied_tweets
    // 使用者按讚的貼文 /users/:userId/likes
    const page = "";
    const userId = localStorage.getItem("id");
    this.fetchTweets(userId, page);
    this.fetchUser(userId);
  },
  methods: {
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
            //console.log(dataArray);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    fetchTweets(userId, page) {
      tweetAPI
        .getTweets(userId, page)
        .then((response) => {
          console.log("response", response);
          const dataArray = response.data;
          // 未成功
          if (response.status != "200" || response.data.length == 0) {
            throw new Error(response.statusText);
          } else {
            // 成功
            console.log(response.statusText);
            console.log(dataArray);
            this.account = dataArray;
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>
