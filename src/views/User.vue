<template>
  <div id="user">
    <div id="leftbar">
      <UserLeftbar />
    </div>
    <div id="main-content">
      <div class="header">
        <UserHeader />
      </div>
      <div class="main-container">
        <UserPost :account="account" />
        <!-- <UserReply :reply="reply" /> -->
        <UserLikes />
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
import UserPost from "../components/UserPost";
//import UserReply from "../components/UserReply";
import UserLikes from "../components/UserLikes";
import tweetAPI from './../apis/tweets';
export default {
  name: "user",
  components: {
    UserLeftbar,
    FollowingBar,
    UserHeader,
    UserPost,
    // UserReply,
    UserLikes,
  },
  data() {
    return {
      account: [],
      reply: [],
    };
  },
  created() {
    // 使用者 /users/:userId/
    // 使用者自己的推文 /users/:userId/tweets
    // 使用者回覆過的貼文 /users/:userId/replied_tweets
    // 使用者按讚的貼文 /users/:userId/likes
    let userId = '2'
    let page = 'tweets'
    this.fetchTweets(userId, page)
  },
  methods: {
    fetchTweets(userId, page) {
    tweetAPI
      .getTweets(userId, page)
      .then((response) => {
        console.log("response", response);
        const dataArray  = response.data;
        // 未成功
        if (response.status != "200" || response.data.length == 0) {
          throw new Error(response.statusText);
        } else {
        // 成功
        console.log(response.statusText)
        console.log(dataArray)
        this.account = dataArray
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
#user {
  display: grid;
  grid-template-columns: 378px 600px 1fr;
  grid-template-rows: 422px 800px;
  width: 100%;
  grid-gap: 1.5rem;
}
#leftbar {
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-row: 1 / 3;
}
#main-content {
  grid-row: 1 / 3;
}
.main-container {
  overflow: auto;
}
#rightbar {
  grid-row: 1 / 3;
}
#user-tabs {
  display: flex;
  flex-wrap: wrap;
}
.user-tabs-link {
  padding: 5px 10px 5px 0;
}
.tab-links {
  color: #333;
}
.tab-links:hover {
  color: $orange;
}
</style>