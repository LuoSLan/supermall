<template>
  <div class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// BScroll.use(Pullup);

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    // pullingUpLoad: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(".wrapper", {
      observeDOM: true,
      observeImage: true,
      click: true,
      probeType: this.probeType,
      pullingUpLoad: this.pullingUpLoad,
    });

    //监听滚动位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
      // console.log(position);
    });
    //监听上拉事件
    // this.scroll.on("pullingUp", () => {
    //   console.log("加载");
    // });
    // console.log(this.scroll.plugins.zoom);
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style>
</style>
