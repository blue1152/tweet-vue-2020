<template>
  <div id="userlikes" style="display: none;">
     <div>
      <UserTabs />
    </div>
    <h2>喜歡的內容們</h2>
  </div>
</template>
<script>
import UserTabs from "../components/UserTabs";
export default {
  name: "userlikes",
  components: {
    UserTabs,
  },
};
</script>
<style lang="scss">
// 版面配置

</style>