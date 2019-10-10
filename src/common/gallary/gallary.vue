<template>
  <div class="gallary">
    <div class="gallary-wrapper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img
            src="http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_r_800x800_7462ee3a.jpg"
            width="100%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://img1.qunarzz.com/sight/p0/1908/3f/3f75f9179e233684a3.img.jpg_r_800x800_208f8cc8.jpg"
            width="100%"
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: "gallary",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      }
    };
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