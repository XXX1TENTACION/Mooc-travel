<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont iconfanhui"></div>
    </div>
    <div class="header-input">
      <span class="iconfont iconsousuo"></span>
      <span>输入喜欢城市，游玩景点</span>
    </div>
    <div class="header-right">
      <span class="text">城市</span>
      <span class="iconfont iconarrow-left-copy-copy arrow"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
@import "~css/variable.sass";
.header {
  height: 0.86rem;
  display: flex;
  background-color: $bgColor;
  line-height: 0.86rem;
  color: #fff;
  .header-left {
    flex: 0 0 0.64rem;
    text-align: center;
    font-size: 0.4rem;
  }
  .header-input {
    flex: 1;
    background-color: #fff;
    color: #ccc;
    border-radius: 0.1rem;
    margin: 0.12rem 0;
    margin-left: 0.2rem;
    line-height: 0.62rem;
    padding-left: 0.2rem;
  }
  .header-right {
    flex: 0 0 1.24rem;
    text-align: center;
    font-size: 0;
    .text {
      font-size: 0.24rem;
      margin-right: 0.1rem;
    }
    .arrow {
      font-size: 0.24rem;
    }
  }
}
</style>