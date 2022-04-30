<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// import MainTabBar from "components/common/tabbar/MainTabBar";
import MainTabBar from "./components/content/mainTabbar/MainTabBar.vue";

export default {
  components: { MainTabBar },
  name: "app",
};
</script>


<style>
@import "assets/css/base.css";
</style>
