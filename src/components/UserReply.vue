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
<style lang="scss" scoped>
$orange: #ff6600;
$main-black: #000;
$text-black: #1c1c1c;
$grey: #9197a3;
$text-grey: #657786;
$background-grey: #f5f8fa;
$line-grey: #e6ecf0;
// 版面配置
#userreply {
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
