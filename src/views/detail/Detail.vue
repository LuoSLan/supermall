<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import { getDetail, Goods } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
    };
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;

    //根据iid获得详情数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      //顶部轮播图
      this.topImages = res.result.itemInfo.topImages;
      console.log(res);

      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
    });
  },
};
</script>

<style>
</style>
