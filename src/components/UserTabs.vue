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
