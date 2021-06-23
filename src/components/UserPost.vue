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