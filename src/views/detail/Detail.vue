<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import detailNavBar from "./childComps/detailNavBar.vue";

export default {
  name: "Detail",
  components: { detailNavBar },
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.iid;
  },
};
</script>

<style>
</style>
