<template>
  <div class="rightbar-wrapper">
    <div class="follow-title">跟隨誰</div>
    <div class="follow-list">
      <div class="user-data">
        <div class="user-account">
          <img :src="imgSrc" alt="photo" />
          <span>
            <div class="user-name">Pizza Hut</div>
            <div class="account-name">@pizzahut</div>
          </span>
        </div>
        <div class="follow-btn active">正在跟隨</div>
      </div>
      <div class="user-data">
        <div class="user-account">
          <img :src="imgSrc" alt="photo" />
          <span>
            <div class="user-name">McDonald's</div>
            <div class="account-name">@McDonalds</div>
          </span>
        </div>
        <div class="follow-btn">跟隨</div>
      </div>
    </div>
    <div class="more-btn">顯示更多</div>
  </div>
</template>
<script>
import tweetAPI from './../apis/users';
export default {
  name: "rightbar-wrapper",
  data() {
    return {
      data: [],
      imgSrc: "./Photo.svg",
    };
  },
  created() {
    const userId = String(localStorage.getItem('id'))
    this.fetchTweets(userId);
  },
  methods: {
    fetchTweets(userId) {
    tweetAPI
      .getFollowings(userId)
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