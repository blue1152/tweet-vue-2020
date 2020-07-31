<template>
  <div id="tweets">
    <div id="leftbar">
      <UserLeftbar :UserLeftbar="userData" />
    </div>
    <div id="main-content">
      <div class="index-title">首頁</div>
      <hr />
      <form class="user-input" @submit.prevent.stop="handleSubmit()">
        <textarea cols="50" rows="5" v-model="description">
        </textarea>
        <button type="submit">推文</button>
      </form>
      <hr />
      <AllPosts :allpost="data" />
    </div>
    <div id="rightbar">
      <FollowingBar />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { Toast } from "./../utils/helpers";
import UserLeftbar from "../components/UserLeftbar";
import FollowingBar from "../components/FollowingBar";
import AllPosts from "../components/AllPosts";
import tweetAPI from './../apis/tweets';
import userAPI from './../apis/users';
export default {
  name: "tweets",
  components: {
    UserLeftbar,
    FollowingBar,
    AllPosts,
  },
  data() {
    return {
      userData: {},
      data: [],
      description: "有什麼新鮮事？",
    };
  },
  created() {
    // 首頁推文 /tweets
    // 個別推文 /tweets/:tweetId
    // 個別回覆 /tweets/:tweet_id/replies
    const page = '';
    const userId = localStorage.getItem("id");
    this.fetchTweets(page);
    this.fetchUser(userId);
  },
  methods: {
    handleSubmit() {
      if (!this.description) {
        Toast.fire({
          icon: "warning",
          title: "記得要寫東西再送出喔~",
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
            const page = '';
            this.fetchTweets(page)
            this.description = "有什麼新鮮事？"; // 還原
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
    getRecentPost (tweetId) {
      this.fetchTweets(tweetId)
    },
    fetchUser(userId) {
    userAPI
      .getCurrentUser (userId)
      .then((response) => {
        //console.log("response", response);
        const dataArray  = response.data;
        // 未成功
        if (response.status != "200" || response.data.length == 0) {
          throw new Error(response.statusText);
        } else {
        // 成功
        //console.log(response.statusText)
        //console.log(dataArray)
        this.userData = dataArray
        }
      })
      .catch((error) => {
         console.log("error", error);
      }); 
    },
    fetchTweets(page) {
    tweetAPI
      .getMainContent(page)
      .then((response) => {
        //console.log("response", response);
        const dataArray  = response.data;
        // 未成功
        if (response.status != "200" || response.data.length == 0) {
          throw new Error(response.statusText);
        } else {
        // 成功
        //console.log(response.statusText)
        //console.log(dataArray)
        this.data = dataArray
        }
      })
      .catch((error) => {
         console.log("error", error);
      }); 
    }
  },
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
};
</script>
<style lang="scss">
textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; /*remove the resize handle on the bottom right*/
}
// 變數設置
$orange: #ff6600;
$main-black: #000;
$text-black: #1c1c1c;
$grey: #9197a3;
$text-grey: #657786;
$background-grey: #f5f8fa;
$line-grey: #e6ecf0;
// 版面配置
.index-title {
  color: #1c1c1c;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
}
#tweets {
  display: grid;
  grid-template-columns: 378px 600px 1fr;
  width: 100%;
  grid-gap: 1.5rem;
  padding: 20px;
}
#leftbar,
#rightbar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#main-content {
  max-height: 700px;
  overflow: auto;
}
.user-input {
  display: flex;
  flex-direction: column;
}
.user-input > button {
  width: 92px;
  height: 30px;
  line-height: 30px;
  background: $orange;
  border-radius: 100px;
  color: #fff;
  text-align: center;
}
</style>