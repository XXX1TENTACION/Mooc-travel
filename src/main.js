// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import fastClick from "fastclick"; //解决移动端点击300毫秒延迟的情况
import VueAwesomeSwiper from "vue-awesome-swiper"; //轮播图
import "css/reset.css";
import "css/border.css"; //解决移动端一像素边框的问题
import "css/iconfont.css"; //字体图标
import "swiper/dist/css/swiper.css"; //轮播图样式
import store from "./store";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
fastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
