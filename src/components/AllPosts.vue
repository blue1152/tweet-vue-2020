<template>
<div id="allposts">
  <div class="post-wrapper">
    <div class="user-img">
      <img :src="profileImg" alt="profile" />
    </div>
    <div class="user-tweets">
      <div class="user-info-box">
        <span class="user-name">Apple</span>
        <span class="user-account-name">@apple</span>
        <span class="post-time">．3小時</span>
      </div>
      <div class="user-text">123</div>
      <div class="user-btns">
        <span class="reply-btn">reply</span>
        <span class="like-btn">like</span>
      </div>
    </div>
  </div>
{{ data }}
</div>
</template>
<script>
export default {
  name: "allposts",
  data() {
    return {
      data: [],
      profileImg: "./photo_big.svg",
    };
  },
  props: {
    allpost: {
      type: Array,
      required: true,
    },
  },
  created() {
    //this.dataFix();
    this.data = this.allpost
    console.log(this.data)
  },
  methods: {
    // 模仿api取資料 TODO: 確認最終API資料格式
    dataFix() {
      const vm = this;
      const dataTweets = vm.account.user.Tweets;
      const dataName = vm.account.user.name;
      const dataAccount = vm.account.account;
      const reformattedArray = dataTweets.map(function (obj) {
        const rObj = {};
        rObj.name = dataName;
        rObj.account = dataAccount;
        rObj.id = obj.id;
        rObj.description = obj.description;
        rObj.createdAt = obj.createdAt;
        rObj.updatedAt = obj.updatedAt;
        return rObj;
      });
      //console.log(reformattedArray);
      return (vm.data = reformattedArray);
    },
  },
};
</script>
<style lang="scss">
// 版面配置
.post-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.user-tweets {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.user-info-box {
  display: flex;
  flex-wrap: wrap;
}
.reply-btn, .like-btn {
  padding-right: 10px;
}
</style>