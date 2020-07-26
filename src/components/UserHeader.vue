<template>
  <nav id="UserHeader">
    <section id="upper-bar">
      <span>
        <router-link class="back-arrow" to="/">
          <img :src="arrowImg" alt="index" />
        </router-link>
      </span>
      <span class="user-name">
        <div>John Doe</div>
        <div>推文</div>
      </span>
    </section>

    <section id="user-info">
      <div class="cover-photo">
        <div class="user-photo-big">
          <img :src="profileImg" alt="profile" />
        </div>
      </div>
      <div align="right" class="btn-wrapper">
        <button type="button" class="setting-btn">編輯個人資料</button>
      </div>
      <div class="user-name">
        <div>John Doe</div>
        <div>@heyjohn</div>
      </div>
      <div
        class="user-detail"
      >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</div>
      <div class="user-follow">
        <span>個跟隨中</span>
        <span>位跟隨者</span>
      </div>
    </section>
  </nav>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};
export default {
  name: "UserHeader",
  data() {
    return {
      arrowImg: "./black_arrow.svg",
      profileImg: "./photo_big.svg",
      currentUser: {
        id: -1,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },
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
};
</script>
<style lang="scss">
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
  background: url(/../cover.svg) no-repeat;
  object-fit: cover;
}
.user-photo-big {
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
</style>