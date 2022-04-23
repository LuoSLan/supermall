<template>
  <div class="recomend">
    <div v-for="item in recommends" :key="item" class="recomend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recomend {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px 0;
  text-align: center;
  font-size: 12px;
}

.recomend-item img {
  margin-bottom: 5px;
  width: 75px;
  height: 75px;
}
</style>
