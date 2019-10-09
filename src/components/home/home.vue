<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>
<script>
import HomeHeader from "../subComponents/header";
import HomeSwiper from "@/components/subComponents/swiper";
import HomeIcons from "@/components/subComponents/icons";
export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons },
  data() {
    return {};
  }
};
</script>
<style lang="scss"  scoped>
</style>