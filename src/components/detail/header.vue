<template>
  <div class="header">
    <div class="header-abs" @click="$router.back(-1)" v-show="backIconShow">
      <span class="iconfont iconfanhui incon-back"></span>
    </div>
    <common-fade>
      <div class="header-fixed" v-show="!backIconShow">
        <div class="iconfont iconfanhui icon-back" @click="$router.back(-1)"></div>
        <span>景点详情</span>
      </div>
    </common-fade>
  </div>
</template>
<script>
import CommonFade from "common/fade/fade";
export default {
  name: "detailHeader",
  components: { CommonFade },
  data() {
    return {
      backIconShow: true,
      timer: null
    };
  },
  //这里在组件中对window对象绑定事件，在全局都会起作用，会有副作用
  mounted() {
    window.addEventListener("scroll", this.scrollChange);
  },
  //在详情页面关闭的时候对全局事件解绑，就会不会影响到其他页面
  // deactivated() {
  //   window.removeEventListener("scroll", this.scrollChange);
  // },
  methods: {
    scrollChange() {
      //节流
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 60) {
          this.backIconShow = false;
        } else {
          this.backIconShow = true;
        }
      }, 16);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "~css/variable.sass";
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.7rem;
  height: 0.7rem;
  line-height: 0.7rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  .incon-back {
    color: #fff;
    font-size: 0.3rem;
  }
}
.header-fixed {
  z-index: 98;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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