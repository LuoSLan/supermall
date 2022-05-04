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
      <detail-swiper :topImages="topImages" ref="dSwiper"></detail-swiper>
      <!-- <detail-base-info :goods="goods"></detail-base-info> -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="dParam"
      ></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click="backClick" v-show="isShowBackTop" />
    <toast :message="message" :show="show" />
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
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backTop/BackTop.vue";
import Toast from "components/common/toast/Toast";

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
    DetailBottomBar,

    Scroll,
    BackTop,
    Toast,
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
      isShowBackTop: false,
      message: "",
      show: false,
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
      // switch (index) {
      //   case 0:
      //     this.$refs.scroll.scroll.scrollToElement(this.$refs.dSwiper[0], {});
      //     break;
      //   case 1:
      //     console.log(index);
      //     this.$refs.scroll.scroll.scrollToElement(this.$refs.dParam[0]);
      //     break;
      // }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
      // console.log(this.$refs.scroll.message);
    },
    contentScroll(position) {
      this.isShowBackTop = position.y < -1000;

      console.log(position.y);
    },
    addToCart() {
      // 1.获取需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品添加到购物车
      this.$store.dispatch("addCart", product).then((res) => {
        this.show = true;
        this.message = res;
        setTimeout(() => {
          this.show = false;
          this.message = "";
        }, 1500);
      });
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
