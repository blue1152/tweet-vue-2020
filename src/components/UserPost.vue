<template>
  <div id="userpost">
    <div>
      <UserTabs />
    </div>
    <hr />
    <div class="user-tweet">
      <div class="tweet-body" v-for="item in account" :key="item.id">
        <div class="user-photo">
          <img :src="item.userAvatar" alt="profile" />
        </div>
        <div class="right-content">
          <div class="user-name">
            <span
              ><a href="#">{{ item.userName }}</a></span
            >
            <span style="padding-left: 10px;">@{{ item.userAccount }}</span>
            <span style="padding-left: 10px;">{{ item.tweetCreatedAt }}</span>
          </div>
          <div class="user-text">
            <p>{{ item.description }}</p>
          </div>
          <div class="user-btns">
            <span class="reply-btn"
              ><img :src="messageImg" alt="reply" />{{ item.replyConut }}
            </span>
            <span class="like-btn"
              ><img :src="likeImg" alt="like" />{{ item.likeConut }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserTabs from "../components/UserTabs";
export default {
  name: "userpost",
  components: {
    UserTabs,
  },
  data() {
    return {
      data: [],
      messageImg: "./message.svg",
      likeImg: "./like.svg",
    };
  },
  props: {
    account: {
      type: Array,
      required: true,
    },
  },
  /*
  watch: {
    account: function(newValue) {
      this.data = {
        ...this.data,
        ...newValue,
      };
    },
  },
  */
  created() {
    //this.dataFix();
  },
  methods: {
    // 模仿api取資料 TODO: 確認最終API資料格式
    dataFix() {
      const vm = this;
      const dataTweets = vm.account.user.Tweets;
      const dataName = vm.account.user.name;
      const dataAvatar = vm.account.user.avatar;
      const dataAccount = vm.account.account;
      const reformattedArray = dataTweets.map(function(obj) {
        const rObj = {};
        rObj.name = dataName;
        rObj.account = dataAccount;
        rObj.id = obj.id;
        rObj.description = obj.description;
        rObj.createdAt = obj.createdAt;
        rObj.updatedAt = obj.updatedAt;
        rObj.avatar = dataAvatar;
        return rObj;
      });
      console.log(reformattedArray);
      return (vm.data = reformattedArray);
    },
  },
};
</script>
<style lang="scss" scoped>
$orange: #ff6600;
$main-black: #000;
$text-black: #1c1c1c;
$grey: #9197a3;
$text-grey: #657786;
$background-grey: #f5f8fa;
$line-grey: #e6ecf0;
// 版面配置
#userpost {
  max-width: 600px;
  margin: 0 auto;
}
.user-tweet {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.tweet-body {
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0;
}
.tweet-body:nth-child(odd) {
  background: $background-grey;
}
.right-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
}
.user-photo {
  padding: 0 15px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
.user-name {
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
  padding-right: 10px;
}
.user-account-name,
.post-time {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}
.user-text {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
}
.reply-btn,
.like-btn {
  padding-right: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;
  color: #657786;
  img {
    padding-right: 10px;
  }
}
</style>
