<template>
  <div id="app">
    <div id="leftbar">
      <UserLeftbar />
    </div>
    <main
      role="main"
      class="mt-5 bg-white"
    >
      <router-view />
    </main>
    <div id="rightbar">
      <FollowingBar />
    </div>
  </div>
</template>
<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLeftbar from './components/UserLeftbar'
import FollowingBar from './components/FollowingBar'
export default {
  name: "App",
  components: {
    UserLeftbar,
    FollowingBar
  }
};
</script>
<style>
  @import '../public/index.css';
</style>
<style lang="scss">
// 版面配置
#app {
  display: grid;
  grid-template-columns: 378px 600px 1fr;
  width: 100%;
  grid-gap: 1.5rem;
}
#leftbar, #rightbar {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
