<template>
  <div class="search">
    <input type="text" class="inp" placeholder="请输入城市名或拼音" />
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
@import "~css/variable.sass";
.search {
  height: 0.72rem;
  background-color: $bgColor;
  padding: 0 0.1rem;
  margin-top: -1px;
  .inp {
    box-sizing: border-box;
    height: 0.62rem;
    line-height: 0.62rem;
    width: 100%;
    border-radius: 0.06rem;
    text-align: center;
    padding: 0 0.1rem;
    color: #666;
  }
}
</style>