<template>
  <div id="userpost" style="">
    <h2>推文們</h2>
    <div class="card">
    <div class="card-header">
      最新推文
    </div>
    <div class="card-body">
      <div
        v-for="item in comments"
        :key="item.id"
      >
        <h4>
          <a href="#">{{ item.UserId }}</a>
        </h4>
        <p>{{ item.description }}</p>
        {{ item.updatedAt }}
        <hr>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "userpost",
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="scss">
// 版面配置

</style>