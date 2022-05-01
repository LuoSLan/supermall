<template>
  <div class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin: 15px 10px;
}
.info-title {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
}

.info-price {
  margin-bottom: 20px;
}
.n-price {
  margin-right: 5px;
  color: var(--color-high-text);
  font-size: 25px;
}
.o-price {
  margin-right: 5px;
  text-decoration-line: line-through;
  color: #999;
  font-size: 14px;
}
.discount {
  padding: 4px;
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 9px;
}

.info-other {
  display: flex;
  margin-bottom: 25px;
}
.info-other span {
  flex: 1;
  color: #999;
  font-size: 14px;
}
.info-other span:nth-child(2) {
  text-align: center;
}
.info-other span:last-child {
  text-align: right;
}

.info-service {
  display: flex;
  font-size: 14px;
}
.info-service span {
  flex: 1;
  text-align: center;
}
.info-service span:first-child {
  text-align: left;
}
.info-service span:last-child {
  text-align: right;
}
.info-service span img {
  width: 12px;
  height: 12px;
}
</style>
