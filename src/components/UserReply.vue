<template>
  <div id="userreply" style="display: none;">
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
export default {
  name: "userreply",
  data() {
    return {
      data: [],
    };
  },
  props: {
    reply: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    // 模仿api取資料
    fetchFeeds() {
      this.data = this.reply.reply;
    },
  },
};
</script>
<style lang="scss">
// 版面配置
</style>