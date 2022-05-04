<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center>购物车({{ cartLength }})</template>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "ShopCart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style>
.cart {
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: sticky;
  top: 0;
  z-index: 999; */
}
</style>
