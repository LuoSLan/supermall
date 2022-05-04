<template>
  <div
    class="check-button"
    :class="{ check: isChecked }"
    @click="$emit('click')"
  >
    <img src="../../../assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  emits: ["click"],
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #bfbfbf;
}
.check-button img {
  width: 20px;
  height: 20px;
}
.check {
  background-color: orange;
  border: #fff;
}
</style>
