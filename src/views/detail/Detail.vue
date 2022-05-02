<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @itemClick="itemClick"
    ></detail-nav-bar>
    <scroll
      class="detail-content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
    >
      <detail-swiper :topImages="topImages" ref="dswiper"></detail-swiper>
      <!-- <detail-base-info :goods="goods"></detail-base-info> -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="dparam"
      ></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";

import Scroll from "components/common/scroll/Scroll.vue";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
    };
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;

    //根据iid获得详情数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      //1.顶部轮播图
      this.topImages = res.result.itemInfo.topImages;
      console.log(res);

      //2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3.获取店铺信息
      this.shop = new Shop(data.shopInfo);

      //4.保存商品详情
      this.detailInfo = data.detailInfo;

      //5.获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      //6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
    itemClick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scroll.scrollToElement(this.$refs.dswiper[0], {});
          break;
        case 1:
          console.log(index);

          this.$refs.scroll.scroll.scrollToElement(this.$refs.dparam[0]);
          break;
      }
    },
  },
};
</script>

<style scoped>
.detail-nav-bar {
  position: sticky;
  top: 0;
  background-color: #fff;
}
.detail-content {
  height: calc(100vh - 93px);
}
</style>
