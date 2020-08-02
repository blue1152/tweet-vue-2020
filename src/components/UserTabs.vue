<template>
  <div id="user-tabs">
    <div class="user-tabs-link">
      <router-link to="/user">
        推文
      </router-link>
    </div>
    <div class="user-tabs-link">
      <router-link to="/tweets/user/userreply">
        推文與回覆
      </router-link>
    </div>
    <div class="user-tabs-link">
      <router-link to="/tweets/user/userlikes">
        喜歡的內容
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "user-tabs",
  methods: {
    fetchUser() {},
  },
  computed: {
    ...mapState(["currentUser"]),
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
</style>
