<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
<<<<<<< HEAD
=======
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
>>>>>>> origin/weekend
  </div>
</template>
<script>
import HomeHeader from "../subComponents/header";
import HomeSwiper from "@/components/subComponents/swiper";
import HomeIcons from "@/components/subComponents/icons";
<<<<<<< HEAD
export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons },
=======
import HomeRecommend from "@/components/subComponents/recommend";
import HomeWeekend from "@/components/subComponents/weekend";
export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
>>>>>>> origin/weekend
  data() {
    return {};
  }
};
</script>
<style lang="scss"  scoped>
</style>