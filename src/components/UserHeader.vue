<template>
  <nav id="UserHeader">
    <section id="upper-bar">
      <span>
        <router-link class="back-arrow" to="/tweets">
          <img :src="arrowImg" alt="index" />
        </router-link>
      </span>
      <span class="user-name">
        <div>{{ UserHeader.name }}</div>
        <div>{{ UserHeader.tweetCounts }} 推文</div>
      </span>
    </section>

    <section id="user-info">
      <div class="cover-photo">
        <img :src="UserHeader.user.cover" alt="profile" />
        <div class="user-photo-big">
          <img :src="UserHeader.userAvatar" alt="profile" />
        </div>
      </div>
      <div align="right" class="btn-wrapper">
        <button
          type="button"
          class="setting-btn"
          data-toggle="modal"
          data-target="#userEdit"
        >
          編輯個人資料
        </button>
      </div>
      <div class="user-name">
        <div>{{ UserHeader.name }}</div>
        <div>@{{ UserHeader.account }}</div>
      </div>
      <div class="user-detail">
        {{ UserHeader.introduction }} (這裡是introduction)
      </div>
      <div class="user-follow">
        <span>{{ UserHeader.tweetFollowingCounts }}個跟隨中</span>
        <span>{{ UserHeader.tweetFollowerCounts }}位跟隨者</span>
      </div>
    </section>
    <!-- Modal userEdit-->
    <div
      class="modal fade"
      id="userEdit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="userEditModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content user-edit-modal flex-column">
          <form>
            <div class="modal-header col-12 d-flex align-items-center">
              <div class="left-wrapper d-flex  align-items-center">
                <a href="" data-dismiss="modal" aria-label="Close"
                  ><img src="https://i.imgur.com/wO030c5.png"
                /></a>
                <div class="user-modal-title">編輯個人資料</div>
              </div>
              <div class="right-wrapper">
                <button type="submit" class="post-btn">儲存</button>
              </div>
            </div>
            <div
              class="modal-body col-12 m-0 p-0"
              style="box-sizing: border-box;"
            >
              <div class="cover-wrapper">
                <img
                  :src="UserHeader.user.cover"
                  alt="cover"
                  class="cover-edit"
                />
              </div>
              <div class="user-photo-big">
                <img
                  :src="UserHeader.userAvatar"
                  alt="profile"
                  class="photo-edit rounded-circle"
                />
              </div>
              <div class="d-flex flex-column input-wrapper mt-3 mb-5">
                <input
                  type="text"
                  name="text-name"
                  class="text-name mx-auto"
                  maxlength="50"
                />
                <label for="text-name" class="text-name-label mx-auto"
                  >名稱</label
                >
                <small class="text-counter text-right mr-4">0/50</small>
              </div>
              <div class="d-flex flex-column input-wrapper mb-5">
                <input
                  type="text"
                  name="text-description"
                  class="text-description mx-auto"
                  maxlength="160"
                />
                <label
                  for="text-description"
                  class="text-description-label mx-auto"
                  >自我介紹</label
                >
                <small class="text-counter text-right mr-4">0/160</small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
// 路由 /api/users/:userId
// 路由 /api/users/:userId/followings
// 路由 /api/users/:userId/followers
import { Toast } from "./../utils/helpers";
import tweetAPI from "./../apis/tweets";
export default {
  name: "UserHeader",
  data() {
    return {
      userData: {
        account: "",
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        introduction: "",
        avatar: "",
        cover: "",
      },
      arrowImg: "./black_arrow.svg",
    };
  },
  props: {
    UserHeader: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleSubmitUser() {
      if (!this.description) {
        Toast.fire({
          icon: "warning",
          title: "記得要寫東西再送出喔~",
        });
        return;
      }
      tweetAPI
        .updateUser({
          userId: localStorage.getItem("id"),
          account: this.userData.account,
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password,
          passwordConfirm: this.userData.passwordConfirm,
          introduction: this.userData.introduction,
          avatar: this.userData.avatar,
          cover: this.userData.cover,
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
            const page = "";
            this.fetchTweets(page);
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
    fetchTweets() {
      tweetAPI
        .getMainContent()
        .then((response) => {
          console.log("response", response);
          const dataArray = response.data;
          // 未成功
          if (response.status != "200" || response.data.length == 0) {
            throw new Error(response.statusText);
          } else {
            // 成功
            console.log(response.statusText);
            console.log(dataArray);
            this.data = dataArray;
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
.user-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
// 變數設置
$orange: #ff6600;
$main-black: #000;
$text-black: #1c1c1c;
$grey: #9197a3;
$text-grey: #657786;
$background-grey: #f5f8fa;
$main-grey: #e6ecf0;
// 使用者資料
#upper-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 7px 19px;
}
.back-arrow {
  margin-right: 2.5rem;
}
.cover-photo {
  width: 100%;
  min-height: 200px;
  position: relative;
  object-fit: cover;
}
.user-photo-big {
  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
  position: absolute;
  top: 124px;
  left: 14px;
}
.btn-wrapper {
  padding: 10px 15px;
}
.setting-btn {
  width: 122px;
  height: 40px;
  border: 1px solid $orange;
  color: $orange;
  border-radius: 100px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 40px;
}
.setting-btn:hover {
  background: $orange;
  color: #fff;
}
.user-name {
  padding-top: 10px;
}
.user-name > div:nth-child(1) {
  font-style: normal;
  font-weight: 900;
  font-size: 19px;
  line-height: 28px;
  color: $text-black;
}
.user-name > div:nth-child(2) {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: $text-grey;
}
.user-follow > span {
  margin-right: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: $main-black;
}
.cover-wrapper {
  overflow: hidden;
}
</style>
