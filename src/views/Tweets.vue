<template>
  <div id="tweets">
    <div id="leftbar">
      <UserLeftbar />
    </div>
    <div id="main-content">
      <div class="user-input">
        <textarea cols="50" rows="5">有什麼新鮮事？
        </textarea>
        <button type="button">推文</button>
      </div>
      <hr />
      <AllPosts :allpost="data" />
    </div>
    <div id="rightbar">
      <FollowingBar />
    </div>
  </div>
</template>
<script>
import UserLeftbar from "../components/UserLeftbar";
import FollowingBar from "../components/FollowingBar";
import AllPosts from "../components/AllPosts";
import tweetAPI from './../apis/tweets';
export default {
  name: "tweets",
  components: {
    UserLeftbar,
    FollowingBar,
    AllPosts,
  },
  data() {
    return {
      data: [],
    };
  },
  created() {
    // 首頁推文 /tweets
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
    tweetAPI
      .getMainContent()
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
#tweets {
  display: grid;
  grid-template-columns: 378px 600px 1fr;
  width: 100%;
  grid-gap: 1.5rem;
}
#leftbar,
#rightbar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>