<template>
  <div class="banner" @click="gallaryShow">
    <img width="100%" :src="bannerImg" />
    <div class="banner-info">
      <div class="banner-title">{{sightName}}</div>
      <div class="banner-number">
        <span class="iconfont iconpicture pic"></span>
        <span class="number">{{ gallaryImgs.length }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {};
  },
  methods: {
    gallaryShow() {
      this.$emit("imgShow");
    }
  }
};
</script>
<style lang='scss' scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-info {
    position: absolute;
    display: flex;
    left: 0;
    bottom: 0;
    right: 0;
    line-height: 0.32rem;
    color: #fff;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0.2rem;
    }
    .banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.2rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      font-size: 0.24rem;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
    }
  }
}
</style>