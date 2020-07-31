<template>
  <div class="leftbar-wrapper">
    <div class="alpha-logo">
      <img :src="imgSrc" alt="ac_logo" />
    </div>
    <div class="nav-bar">
      <!-- 使用者本人 -->
      <ul v-if="UserLeftbar.user.role == 'user'">
        <li>
          <img :src="homeImg" alt="index" />首頁
        </li>
        <li>
          <img :src="userImg" alt="user" />個人資料
        </li>
        <li>
          <router-link to="/tweets/user/setting">
            <img :src="settingImg" alt="setting" />設定
          </router-link>
        </li>
      </ul>
      <!-- admin -->
      <ul v-if="UserLeftbar.user.role == 'admin'">
        <li>
          <img :src="homeImg" alt="all-tweet-list" />推文清單
        </li>
        <li>
          <img :src="userImg" alt="all-user-list" />使用者列表
        </li>
      </ul>
    </div>
    <div class="post-btn" v-if="UserLeftbar.user.role == 'user'" data-toggle="modal" data-target="#tweet">推文</div>
    <div class="log-out" @click="logout">
      <img :src="logoutImg" alt="setting" />登出
    </div>
<!-- Modal tweet-->
<div class="modal fade" id="tweet" tabindex="-1" role="dialog" aria-labelledby="tweetModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <form class="modal-content">
      <div class="modal-header col-12">
        <a href="" data-dismiss="modal" aria-label="Close"><img src="https://i.imgur.com/wO030c5.png"></a>
      </div>
      <div class="modal-body col-12 d-flex">
        <div class="photo-wrapper">
          <img src="https://i.imgur.com/9UcUJdS.jpg" alt="" class="photo rounded-circle">
        </div>
        <textarea cols="50" rows="5" v-model="description" class="tweet-content ml-3">
        </textarea>
      </div>
      <div class="modal-footer">
        <button type="submit" class="post-btn" @submit.prevent.stop="handleSubmit()">推文</button>
      </div>
    </form>
  </div>
</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { Toast } from "./../utils/helpers";
import tweetAPI from './../apis/tweets';
export default {
  name: "leftbar-wrapper",
  data() {
    return {
      description: "有什麼新鮮事？",
      profileImg: "./photo_big.svg",
      coverImg: "./cover.svg",
      imgSrc: "./ac_logo.svg",
      homeImg: "./icon_index.svg",
      userImg: "./icon_user.svg",
      settingImg: "./icon_cog.svg",
      logoutImg: "./icon_logout.svg",
    };
  },
  props: {
    UserLeftbar: {
      type: Object,
      required: true,
    },
  },
  methods: {
    logout () {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/login')
    },
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
          console.log("response", response);
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
  },
  // computed 會將結果暫存起來，當參考到的資料改變時，computed 才會重新計算。
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
};
</script>
<style lang="scss">
// 變數設置
$orange: #ff6600;
$main-black: #000;
$text-black: #1c1c1c;
$grey: #9197a3;
$text-grey: #657786;
$background-grey: #f5f8fa;
$main-grey: #e6ecf0;

// 版面配置
a {
  color: #333;
}
.leftbar-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  padding: 14px 103px;
  position: relative;
  min-height: 700px;
}
.alpha-logo {
  width: 50px;
  height: 50px;
  margin-bottom: 2rem;
}
.nav-bar {
  color: $text-black;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  ul {
    li {
      cursor: pointer;
      width: 235px;
      height: 60px;
      img {
        margin-right: 1rem;
      }
    }
  }
}
.post-btn {
  border-radius: 100px;
  width: 210px;
  height: 45px;
  background: $orange;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  cursor: pointer;
}
.log-out {
  position: absolute;
  bottom: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: $text-black;
  cursor: pointer;
  img {
    margin-right: 1rem;
  }
}
// modal
.user-modal-title {
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 28px;
  color: #1C1C1C;
  padding: 13px 0;
  padding-left: 40px;
}
.modal-content {
  border-radius: 14px;
  border: none;
}

.modal-footer, .btn {
  border: none;
}

.photo {
  width: 50px;
  height: 50px;
  margin: -5px 0 0 -5px;
}

.photo-edit {
  width: 120px;
  height: 120px;
  border: 4px solid #ffffff;
  margin: -65px 0 0 10px;
}

.cover-edit {
  width: 500px;
  height: 200px;
}
.name {
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 22px;
  color: #1c1c1c;
}

.account {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.dot, .createdAt {
color: #657786;
}

.taged-user {
  color: #FF6600;
}

.input-wrapper {
  position: relative;
}

.text-name, .text-description {
  border: none;
  border-bottom: 2px solid #657786;
  background: #F5F8FA;
}

.text-name {
  width: 450px;
  height: 54px;
}

.text-description {
  width: 450px;
  height: 150px;
}

.input-wrapper > label {
  width: 450px;
}

.text-name-label {
  position: absolute;
  top: 3%;
  left: 8%;
}

.text-description-label {
  position: absolute;
  top: 3%;
  left: 8%;
}
</style>