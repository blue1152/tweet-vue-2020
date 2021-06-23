<template>
  <div class="leftbar-wrapper">
    <div class="alpha-logo">
      <img :src="imgSrc" alt="ac_logo" />
    </div>
    <div class="nav-bar">
      <!-- 使用者本人 -->
      <ul v-if="currentUser.role == 'user'">
        <li>
          <router-link to="/tweets">
            <img :src="homeImg" alt="index" />首頁
          </router-link>
        </li>
        <li>
          <router-link to="/user">
            <img :src="userImg" alt="user" />個人資料
          </router-link>
        </li>
        <li>
          <router-link to="/tweets/user/setting">
            <img :src="settingImg" alt="setting" />設定
          </router-link>
        </li>
      </ul>
      <!-- admin -->
      <ul v-if="currentUser.role == 'admin'">
        <li><img :src="homeImg" alt="all-tweet-list" />推文清單</li>
        <li><img :src="userImg" alt="all-user-list" />使用者列表</li>
      </ul>
    </div>
    <div class="post-btn" @click="show()">推文</div>
    <div class="log-out" v-if="currentUser.role == 'user'" @click="logout">
      <img :src="logoutImg" alt="setting" />登出
    </div>
    <!-- Modal tweet-->
    <modal name="tweet-modal">
      <div class="modal-dialog" role="document">
        <form class="modal-content" @submit.prevent.stop="handleSubmit()">
          <div class="modal-header col-12">
            <a href data-dismiss="modal" aria-label="Close">
              <img :src="UserLeftbar.userCover" />
            </a>
          </div>
          <div class="modal-body col-12 d-flex">
            <div class="photo-wrapper">
              <img
                :src="UserLeftbar.userAvatar"
                alt
                class="photo rounded-circle"
              />
            </div>
            <textarea
              cols="50"
              rows="5"
              v-model="description"
              class="tweet-content ml-3"
            ></textarea>
          </div>
          <div class="modal-footer">
            <button type="submit" class="post-btn" @click="hide()">
              推文
            </button>
          </div>
        </form>
      </div>
    </modal>
  </div>
</template>
<script>
import Vue from "vue";
import VModal from "vue-js-modal";
import { mapState } from "vuex";
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweets";
import userAPI from "./../apis/users";
Vue.use(VModal);
export default {
  name: "leftbar-wrapper",
  data() {
    return {
      data: [],
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
    show() {
      this.$modal.show("tweet-modal");
    },
    hide() {
      this.$modal.hide("tweet-modal");
    },
    // 登出功能
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
    // 送出tweet功能
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
            this.description = "有什麼新鮮事？";
            this.$router.go(0);
          }
        })
        .catch((error) => {
          this.description = ""; // 清空
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
          if (response.status != "200" || response.data.length == 0) {
            throw new Error(response.statusText);
          } else {
            // 成功
            //console.log(response.statusText)
            console.colg(dataArray);
            this.userData = dataArray;
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
  },
  // 取得user狀態
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>