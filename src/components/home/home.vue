<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "../homeComponents/header";
import HomeSwiper from "@/components/homeComponents/swiper";
import HomeIcons from "@/components/homeComponents/icons";
import HomeRecommend from "@/components/homeComponents/recommend";
import HomeWeekend from "@/components/homeComponents/weekend";
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState(["city"])
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.lastCity = this.city;
      axios.get("/api/index.json?city=" + this.city).then(this.success);
    },
    success(res) {
      const data = res.data.data;
      this.swiperList = data.swiperList;
      this.iconList = data.iconList;
      this.recommendList = data.recommendList;
      this.weekendList = data.weekendList;
    }
  },
  activated() {
    //当keep-alive是每次挂载的时候这个钩子函数会执行
    if (this.lastCity !== this.city) {
      //判断当新请求的城市和上一次加载的城市不同时才发送请求重新加载页面，否则就用缓存中的页面
      this.lastCity = this.city;
      this.getData();
    }
  }
};
</script>
<style lang="scss"  scoped>
</style>