<template>
  <div id="targettweet">
    <div id="leftbar">
      <UserLeftbar :UserLeftbar="userData" />
    </div>
    <!--/leftbar -->
    <div id="main-content">
      <div class="content-header">
        <span>
          <router-link class="back-arrow" to="/tweets">
            <img :src="arrowImg" alt="index" />
          </router-link>
        </span>
        <div class="index-title">推文</div>
      </div>
      <!--/content-header -->
      <div class="main-tweets">
        <div class="post-wrapper">
          <div class="user-img">
            <img :src="target.tweet.User.avatar" alt="profile" />
            <span class="user-name">{{ target.tweet.User.name }}</span>
            <span class="user-account-name"
              >@{{ target.tweet.User.account }}</span
            >
          </div>
          <div class="user-tweets" :id="target.tweet.id">
            <div class="user-text">
              {{ target.tweet.description }}
            </div>
            <div class="post-time">{{ target.tweet.createdAt }}</div>
            <div class="tweet-line"></div>
            <div class="count">
              <span>{{ target.replyConut }}回覆</span>
              <span>{{ target.likeConut }}喜歡次數</span>
            </div>
            <div class="tweet-line"></div>
            <div class="user-btns">
              <span class="reply-btn"
                ><img :src="messageImg" alt="reply" />
              </span>
              <span class="like-btn" @click="isLike(item.id, 'like')"
                ><img :src="likeImg" alt="like" />
              </span>
            </div>
            <div class="tweet-line"></div>
            <div v-if="replyCounts !== 0">
              <div
                class="others-reply"
                v-for="item in target.tweet.Replies"
                :key="item.id"
              >
                <div></div>
                <div class="others-content">
                  <div>
                    <span class="user-name">{{ item.userName }}</span>
                    <span class="user-account-name"
                      >@{{ item.userAccount }}</span
                    >
                    <span class="post-time">．{{ item.tweetCreatedAt }}</span>
                  </div>
                  <div>回覆 @{{ item.User.account }}</div>
                  <div class="other-descrition">{{ item.comment }}</div>
                  <div class="others-reply-btn">
                    <span class="reply-btn"
                      ><img :src="messageImg" alt="reply" />
                    </span>
                    <span class="like-btn" @click="isLike(item.id, 'like')"
                      ><img :src="likeImg" alt="like" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/user-tweets -->
        </div>
        <!--/post-wrapper -->
      </div>
      <!--/main-tweets -->
    </div>
    <!--/main-content -->
    <div id="rightbar">
      <FollowingBar />
    </div>
    <!--/rightbar -->
  </div>
  <!--/targettweet -->
</template>
<script>
import { Toast } from "./../utils/helpers";
import UserLeftbar from "../components/UserLeftbar";
import FollowingBar from "../components/FollowingBar";
import tweetAPI from "./../apis/tweets";
import userAPI from "./../apis/users";
export default {
  name: "targettweet",
  components: {
    UserLeftbar,
    FollowingBar,
  },
  data() {
    return {
      replyCounts: "",
      userData: {},
      target: {},
      arrowImg: "./black_arrow.svg",
      messageImg: "./message.svg",
      likeImg: "./like.svg",
    };
  },
  created() {
    // 首頁推文 /tweets
    // 個別推文 /tweets/:tweetId
    // 個別回覆 /tweets/:tweet_id/replies
    const postId = localStorage.getItem("post");
    const userId = localStorage.getItem("id");
    this.fetchTweets(postId);
    this.fetchUser(userId);
  },
  methods: {
    // 最上方送出新推文
    handleSubmit() {
      if (!this.description) {
        Toast.fire({
          icon: "warning",
          title: "記得要寫東西再送出喔~",
        });
        return;
      } else if (this.description.length > 140) {
        Toast.fire({
          icon: "warning",
          title: "最多只能輸入140字~",
        });
        return;
      }
      tweetAPI
        .createTweets({
          userId: localStorage.getItem("id"),
          description: this.description,
        })
        .then((response) => {
          //console.log("response", response);
          const data = response.data;
          //console.log(data);
          // 未成功
          if (data.status !== "success") {
            throw new Error(data.message);
          } else {
            // 成功
            const page = "";
            this.fetchTweets(page);
            this.description = "有什麼新鮮事？";
          }
        })
        .catch((error) => {
          this.description = ""; // 清空
          // 顯示錯誤提示
          Toast.fire({
            icon: "warning",
            title: "字數過長",
          });
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
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    fetchTweets(postId) {
      tweetAPI
        .getTarget(postId)
        .then((response) => {
          //console.log("response", response);
          const dataArray = response.data;
          // 未成功
          if (response.status != "200") {
            throw new Error(response.statusText);
          } else {
            // 成功
            console.log(response.statusText);
            this.target = dataArray;
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
