<template>
  <div class="citylist">
    <div class="location">
      <div class="title border-topbottom">当前城市</div>
      <div class="list">
        <div class="city-name">北京</div>
      </div>
    </div>
    <div class="hotcity">
      <div class="title border-topbottom">热门城市</div>
      <div class="list"></div>
    </div>
    <div class="item">
      <div class="title border-topbottom">A</div>
      <ul class="item-wrapper">
        <li class="name">阿拉善</li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "citylist",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.citylist {
  position: absolute;
  top: 79px;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  .title {
    line-height: 0.44rem;
    padding-left: 0.2rem;
    background-color: #eee;
    color: #666;
  }
}
</style>