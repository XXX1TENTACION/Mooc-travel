<template>
  <div>
    <div class="header">
      <div class="iconfont iconfanhui icon-back" @click="$router.back(-1)"></div>
      <span>国内城市</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "cityHeader",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
@import "~css/variable.sass";
.header {
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  background-color: $bgColor;
  text-align: center;
  color: #fff;
  .icon-back {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.4rem;
    width: 0.64rem;
    text-align: center;
  }
}
</style>