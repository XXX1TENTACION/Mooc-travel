<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>test</div>
  </div>
</template>
<script>
import HomeHeader from "../subComponents/header";
import HomeSwiper from "@/components/subComponents/swiper";

export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper },
  data() {
    return {};
  }
};
</script>
<style lang="scss"  scoped>
</style>