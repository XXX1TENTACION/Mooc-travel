<template>
  <div class="swiper-wrapper">
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
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination" //dots
        },
        loop: true //循环轮播
      },
      swiperList: [
        {
          id: 1,
          imgUrl:
            "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/b59b8db9f72eb8f54df5bf2155672e9c.jpg"
        },
        {
          id: 2,
          imgUrl:
            "//mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg"
        }
      ]
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