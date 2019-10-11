<template>
  <div class="detail-list">
    <ul class="list-wrapper" v-for="item in categoryList" :key="item.$index">
      <li class="list-item border-bottom">
        <span class="icon"></span>
        {{ item.title }}
      </li>
      <li v-if="item.children" class="list-children">
        <detail-list :categoryList="item.children"></detail-list>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "detailList",
  props: {
    categoryList: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.list-item {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
  .icon {
    display: inline-block;
    position: relative;
    width: 0.36rem;
    height: 0.36rem;
    top: 0.06rem;
    left: 0.06rem;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem
      no-repeat;
    margin-right: 0.1rem;
    background-size: 0.4rem 3rem;
  }
}
.list-children {
  padding: 0 0.2rem;
}
</style>