<template>
<div id="allposts">
  <div class="post-wrapper" v-for="item in allpost" :key="item.id">
    <div class="user-img">
      <img :src="profileImg" alt="profile" />
    </div>
    <div class="user-tweets" :id="item.id" @click="getRecentPost (item.id)">
      <div class="user-info-box">
        <span class="user-name">{{ item.userName }}</span>
        <span class="user-account-name">@{{ item.userAccount }}</span>
        <span class="post-time">．{{ item.tweetCreatedAt }}</span>
      </div>
      <div class="user-text">{{ item.description }}</div>
      <div class="user-btns">
        <span class="reply-btn"><img :src="messageImg" alt="reply" />{{ item.replyConut }}</span>
        <span class="like-btn"><img :src="likeImg" alt="like" />{{ item.likeConut }}</span>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import tweetAPI from './../apis/tweets';
export default {
  name: "allposts",
  data() {
    return {
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
  methods: {
    getRecentPost (tweetId) {
      this.fetchTweets(tweetId)
    },
    fetchTweets(page) {
    tweetAPI
      .getMainContent(page)
      .then((response) => {
        const dataArray  = response.data;
        // 未成功
        if (response.status != "200" || response.data.length == 0) {
          throw new Error(response.statusText);
        } else {
        // 成功
        //console.log(response.statusText)
        console.log(dataArray)
        this.data = dataArray
        }
      })
      .catch((error) => {
         console.log("error", error);
      }); 
    }
  },
  created() {
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
.user-name {
font-style: normal;
font-weight: bold;
font-size: 15px;
line-height: 22px;
color: #1C1C1C;
padding-right: 10px;
}
.user-account-name, .post-time {
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
color: #1C1C1C;
}
.reply-btn, .like-btn {
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