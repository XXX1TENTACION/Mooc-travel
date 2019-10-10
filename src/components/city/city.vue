<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="getInfo"></city-alphabet>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "@/components/cityComponents/header";
import CitySearch from "../cityComponents/search";
import CityList from "../cityComponents/citylist";
import CityAlphabet from "../cityComponents/alphabet";
export default {
  name: "city",
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("/api/city.json").then(this.success);
    },
    success(res) {
      const data = res.data.data;
      this.hotCities = data.hotCities;
      this.cities = data.cities;
    },
    getInfo(letter) {
      this.letter = letter;
    }
  }
};
</script>
<style lang='scss' scoped>
</style>