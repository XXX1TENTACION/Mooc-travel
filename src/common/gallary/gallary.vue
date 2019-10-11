<template>
  <div class="gallary" @click="gallaryHide">
    <div class="gallary-wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in gallaryImgs" :key="item.$index">
          <img :src="item" width="100%" height="260" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "gallary",
  props: {
    gallaryImgs: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          //配置分页
          el: ".swiper-pagination",
          type: "fraction"
        },
        //配置画廊自动更新
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    gallaryHide() {
      this.$emit("imgHide");
    }
  }
};
</script>
<style lang='scss' scoped>
.gallary >>> .swiper-container {
  overflow: inherit;
}
.gallary {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-color: #000;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .gallary-wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 70%;
    .swiper-pagination {
      color: #fff;
      bottom: -3rem;
    }
  }
}
</style>