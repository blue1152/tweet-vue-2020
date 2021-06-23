<template>
  <div id="userreply">
    <div id="leftbar">
      <UserLeftbar :UserLeftbar="userData" />
    </div>
    <div id="main-content">
      <div class="header">
        <UserHeader :UserHeader="userData" />
      </div>
      <div id="main-container">
        <div>
          <UserTabs />
        </div>
        <div class="user-tweet">
          <div class="tweet-body" v-for="item in data" :key="item.id">
            <div class="user-photo">
              <img :src="item.userAvatar" alt="profile" />
            </div>
            <div class="user-name">
              <span>
                <a href="#">{{ item.userName }}</a>
              </span>
              <span style="padding-left: 10px;">@{{ item.userAccount }}</span>
              <span style="padding-left: 10px;">{{ item.tweetCreatedAt }}</span>
            </div>
            <div>
              <p>{{ item.description }}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div id="rightbar">
      <FollowingBar />
    </div>
  </div>
</template>
<script>
import UserTabs from "../components/UserTabs";
import UserLeftbar from "../components/UserLeftbar";
import FollowingBar from "../components/FollowingBar";
import UserHeader from "../components/UserHeader";
import tweetAPI from "./../apis/tweets";
import userAPI from "./../apis/users";
export default {
  name: "userreply",
  components: {
    UserTabs,
    UserLeftbar,
    FollowingBar,
    UserHeader,
  },
  data() {
    return {
      data: [],
      userData: {}, // 使用者資料
    };
  },
  created() {
    const userId = localStorage.getItem("id");
    const page = "replied_tweets";
    this.fetchTweets(userId, page);
    this.fetchUser(userId);
  },
  methods: {
    fetchTweets(userId, page) {
      tweetAPI
        .getTweets(userId, page)
        .then((response) => {
          //console.log("response", response);
          const dataArray = response.data;
          // 未成功
          if (response.status != "200" || response.data.length == 0) {
            throw new Error(response.statusText);
          } else {
            // 成功
            //console.log(response.statusText);
            console.log(dataArray);
            this.data = dataArray;
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
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
            console.log(dataArray);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>