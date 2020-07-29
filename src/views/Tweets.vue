<template>
  <div id="tweets">
    <div id="leftbar">
      <UserLeftbar />
    </div>
    <div class="container">
      <div></div>
      <hr />
    </div>
    <div id="rightbar">
      <FollowingBar />
    </div>
  </div>
</template>
<script>
import UserLeftbar from "../components/UserLeftbar";
import FollowingBar from "../components/FollowingBar";
// 假資料
// 首頁推文 /users/:userId/tweets
const tweetsData = {};

export default {
  name: "tweets",
  components: {
    UserLeftbar,
    FollowingBar,
  },
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  mounted() {},
  methods: {
    fetchFeeds() {
      const vm = this;
      vm.data = tweetsData;
    },
    showComments() {
      return;
    },
    showReplies() {
      return;
    },
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