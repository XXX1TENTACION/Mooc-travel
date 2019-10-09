<template>
  <div class="swiper-wrapper" v-if="swiperList.length">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" width="100%" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination" //dots
        },
        loop: true, //循环轮播
        autoplay: true
      }
    };
  }
};
</script>
<style lang='scss' scoped>
// 在父组件中修改子组件的样式
.swiper-wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}
.swiper-wrapper {
  overflow: hidden;
  min-height: 1.1428rem;
}
</style>