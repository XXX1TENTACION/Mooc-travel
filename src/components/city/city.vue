<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>
<script>
import CityHeader from "@/components/cityComponents/header";
import CitySearch from "../cityComponents/search";
import CityList from "../cityComponents/citylist";
export default {
  name: "city",
  components: { CityHeader, CitySearch, CityList },
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
</style>