<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NarBar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  z-index: 999;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  /* flex-shrink: 0; */
  width: 60px;
  /* background-color: pink; */
}
.center {
  flex: 1;
  /* background-color: skyblue; */
}
</style>
