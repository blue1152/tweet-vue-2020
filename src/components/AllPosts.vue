<template>
  <div id="allposts">
    <div class="post-wrapper" v-for="item in allpost" :key="item.id">
      <div class="user-img">
        <img :src="item.userAvatar" alt="profile" />
      </div>
      <router-link to="/tweets/targettweet">
        <div class="user-tweets" :id="item.id" @click="getRecentPost(item.id)">
          <div class="user-info-box">
            <span class="user-name">{{ item.userName }}</span>
            <span class="user-account-name">@{{ item.userAccount }}</span>
            <span class="post-time">．{{ item.tweetCreatedAt }}</span>
          </div>
          <div class="user-text">{{ item.description }}</div>
          <div class="user-btns">
            <span class="reply-btn"
              ><img :src="messageImg" alt="reply" />{{ item.replyConut }}</span
            >
            <span class="like-btn" @click="isLike(item.id, 'like')"
              ><img :src="likeImg" alt="like" />{{ item.likeConut }}</span
            >
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import tweetAPI from "./../apis/tweets";
export default {
  name: "allposts",
  data() {
    return {
      route: "/tweets/" + this.postId,
      postId: "",
      likeStatus: "",
      data: [],
      profileImg: "./photo_big.svg",
      messageImg: "./message.svg",
      likeImg: "./like.svg",
    };
  },
  props: {
    allpost: {
      type: Array,
      required: true,
    },
  },
  watch: {
    allpost: function(newValue) {
      this.data = {
        ...this.data,
        ...newValue,
      };
    },
  },
  methods: {
    // 個別推文 /tweets/:tweetId
    // 個別回覆 /tweets/:tweet_id/replies
    // 取得特定推文內容
    getRecentPost(tweetId) {
      this.postId = tweetId;
      localStorage.setItem("post", tweetId);
    },
    // 請求特定推文 /tweets/${tweetId}
    fetchTweets(page) {
      tweetAPI
        .getMainContent(page)
        .then((response) => {
          const dataArray = response.data;
          // 未成功
          if (response.status != "200" || response.data.length == 0) {
            throw new Error(response.statusText);
          } else {
            // 成功
            //console.log(response.statusText)
            //console.log(dataArray);
            this.data = dataArray;
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    // like
    isLikes(id, like) {
      tweetAPI
        .editLikes({
          postId: id,
          like: like,
        })
        .then((response) => {
          // 未成功
          if (response.status != "200") {
            throw new Error(response.statusText);
          } else {
            // 成功
            //console.log(response.statusText)
            this.$router.push("/tweets");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>