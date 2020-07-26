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
export default {
  name: "rightbar-wrapper",
  data() {
    return {
      imgSrc: "./Photo.svg",
    };
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
$line-grey: #e6ecf0;

// 版面配置
.rightbar-wrapper {
  margin-top: 15px;
  width: 350px;
  height: 517px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: $background-grey;
  padding: 14px 15px;
  position: relative;
}
.follow-title {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: $text-black;
  padding-bottom: 0.5rem;
}
.user-data {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $line-grey;
}
.user-account {
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .user-name {
    padding-left: 1rem;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    color: $text-black;
  }
  .account-name {
    padding-left: 1rem;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
    color: $text-grey;
  }
}
.follow-btn.active {
  width: 92px;
  height: 30px;
  line-height: 30px;
  background: $orange;
  border-radius: 100px;
  color: #fff;
  text-align: center;
}
.follow-btn {
  width: 62px;
  height: 30px;
  line-height: 30px;
  border-radius: 100px;
  color: $orange;
  border: 1px solid $orange;
  text-align: center;
}
.more-btn {
  padding-top: 0.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 22px;
  color: $orange;
}
</style>