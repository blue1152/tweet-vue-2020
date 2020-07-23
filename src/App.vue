<template>
  <div id="app">
    <main
      role="main"
      class="mt-5 bg-white"
    >
      <router-view />
    </main>
  </div>
</template>
<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  name: "App",
};
</script>
<style>
  @import '../public/index.css';
</style>
<style lang="scss">
// 版面配置
</style>
