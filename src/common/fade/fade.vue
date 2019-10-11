<template>
  <transition>
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: "fade",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
</style>