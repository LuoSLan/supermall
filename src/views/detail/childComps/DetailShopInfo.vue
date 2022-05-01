<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{ totalSells }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shop.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-higher': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-higher': item.isBetter }">
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    totalSells() {
      if (this.shop.sells < 10000) {
        return this.shop.sells;
      } else {
        return (this.shop.sells / 10000).toFixed(1) + "万";
      }
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
  font-size: 14px;
}
.shop-top {
  margin-bottom: 15px;
}
.shop-top img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  vertical-align: middle;
}
.shop-top span {
  font-size: 16px;
}

.shop-middle {
  display: flex;
  padding: 5px 10px;
  height: 85px;
}
.shop-middle-item {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.info-sells,
.info-goods {
  flex: 1;
  text-align: center;
}
.shop-middle-right table {
  padding: 0;
}
.sells-count,
.goods-count {
  padding: 12px 0 8px 0;
  font-size: 20px;
  font-weight: 600;
}
.score {
  padding: 0 6px 0 15px;
  color: #6e953b;
}
.score-higher {
  color: #e34c32;
}
.better {
  color: #fff;
  background-color: #6e953b;
  padding: 0 3px;
}
.better-higher {
  background-color: #e34c32;
}
.shop-bottom {
  margin: 15px auto;
  width: 250px;
  height: 30px;
  background-color: #f9dee3;
  border-radius: 10px;
}
.enter-shop {
  text-align: center;
  line-height: 30px;
}
li {
  height: 1000px;
}
</style>
