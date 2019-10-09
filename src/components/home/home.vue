<template>
  <div>
    <home-header :city="city"></home-header>
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
export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("/api/index.json").then(this.success);
    },
    success(res) {
      const data = res.data.data;
      this.city = data.city;
      this.swiperList = data.swiperList;
      this.iconList = data.iconList;
      this.recommendList = data.recommendList;
      this.weekendList = data.weekendList;
    }
  }
};
</script>
<style lang="scss"  scoped>
</style>