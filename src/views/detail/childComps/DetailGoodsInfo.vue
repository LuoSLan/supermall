<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
        @load="imgLoad"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    };
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style>
.goods-info {
  border-bottom: 5px solid #f2f5f8;
}
.info-desc,
.info-key {
  padding: 15px 15px;
}
.start {
  margin-bottom: 10px;
  width: 150px;
  border-bottom: 1px solid #999;
}
.end {
  margin-top: 10px;
  margin-left: auto;
  width: 150px;
  border-bottom: 1px solid #999;
}
.info-list img {
  width: 100%;
}
</style>
