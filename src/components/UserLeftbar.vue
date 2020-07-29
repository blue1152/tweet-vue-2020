<template>
  <div class="leftbar-wrapper">
    <div class="alpha-logo">
      <img :src="imgSrc" alt="ac_logo" />
    </div>
    <div class="nav-bar">
      <!-- 使用者本人 -->
      <ul v-if="currentUser.isUser">
        <li @click="callAjax()">
          <img :src="homeImg" alt="index" />首頁
        </li>
        <li @click="callAjax()">
          <img :src="userImg" alt="user" />個人資料
        </li>
        <li @click="callAjax()">
          <img :src="settingImg" alt="setting" />設定
        </li>
      </ul>
      <!-- admin -->
      <ul v-if="currentUser.isAdmin">
        <li @click="callAjax()">
          <img :src="homeImg" alt="all-tweet-list" />推文清單
        </li>
        <li @click="callAjax()">
          <img :src="userImg" alt="all-user-list" />使用者列表
        </li>
      </ul>
    </div>
    <div class="post-btn" v-if="currentUser.isUser">推文</div>
    <div class="log-out">
      <img :src="logoutImg" alt="setting" />登出
    </div>
  </div>
</template>
<script>
// test用, 之後刪除↓ //
const dummyUser = {
  currentUser: {
    id: 1,
    name: "user",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: false,
    isUser: true,
  },
  isAuthenticated: true,
};
// test用, 之後刪除↑ //
//import { mapState } from 'vuex'
export default {
  name: "leftbar-wrapper",
  data() {
    return {
      imgSrc: "./ac_logo.svg",
      homeImg: "./icon_index.svg",
      userImg: "./icon_user.svg",
      settingImg: "./icon_cog.svg",
      logoutImg: "./icon_logout.svg",
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
        isUser: true,
      },
      isAuthenticated: false,
    };
  },
  // test用, 之後刪除↓ //
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
      this.isAuthenticated = dummyUser.isAuthenticated;
    },
  },
  // test用, 之後刪除↑ //
  /*
  // computed 會將結果暫存起來，當參考到的資料改變時，computed 才會重新計算。
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  */
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
.leftbar-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  padding: 14px 103px;
  position: relative;
  min-height: 1000px;
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
}
.log-out {
  position: absolute;
  bottom: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: $text-black;
  img {
    margin-right: 1rem;
  }
}
</style>