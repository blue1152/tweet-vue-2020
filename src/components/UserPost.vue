<template>
  <div id="userpost">
    <div>
      <UserTabs />
    </div>
    <hr />
    <div class="user-tweet">
      <div class="tweet-body" v-for="item in data" :key="item.id">
        <div class="user-photo"></div>
        <div class="user-name">
          <span>
            <a href="#">{{ item.name }}</a>
          </span>
          <span style="padding-left: 10px;">@{{ item.account }}</span>
          <span style="padding-left: 10px;">{{ item.createdAt }}</span>
        </div>
        <div>
          <p>{{ item.description }}</p>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import UserTabs from "../components/UserTabs";
export default {
  name: "userpost",
  components: {
    UserTabs,
  },
  data() {
    return {
      data: [],
    };
  },
  props: {
    account: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.dataFix();
  },
  methods: {
        // 模仿api取資料 TODO: 確認最終API資料格式
    dataFix() {
      const vm = this;
      const dataTweets = vm.account.user.Tweets;
      const dataName = vm.account.user.name;
      const dataAccount = vm.account.account;
      const reformattedArray = dataTweets.map(function (obj) {
        const rObj = {};
        rObj.name = dataName;
        rObj.account = dataAccount;
        rObj.id = obj.id;
        rObj.description = obj.description;
        rObj.createdAt = obj.createdAt;
        rObj.updatedAt = obj.updatedAt;
        return rObj;
      });
      //console.log(reformattedArray);
      return (vm.data = reformattedArray);
    },
  },
};
</script>
<style lang="scss">
// 版面配置
</style>