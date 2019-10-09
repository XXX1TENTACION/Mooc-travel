<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>
<script>
import HomeHeader from "../subComponents/header";
import HomeSwiper from "@/components/subComponents/swiper";
import HomeIcons from "@/components/subComponents/icons";
import HomeRecommend from "@/components/subComponents/recommend";
import HomeWeekend from "@/components/subComponents/weekend";
export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  data() {
    return {};
  }
};
</script>
<style lang="scss"  scoped>
</style>