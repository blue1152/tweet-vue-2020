<template>
  <div id="user-tabs">
    <div class="user-tabs-link">
      推文
    </div>
    <div class="user-tabs-link">
      推文與回覆
    </div>
    <div class="user-tabs-link">
      喜歡的內容
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-tabs',
  methods: {
    fetchUser() {}
  },
  mounted() {

  }
}
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